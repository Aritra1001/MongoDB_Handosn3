const { Employee } = require("../model/model");

const saveEmployeeData = async (req, res) => {
  const employeeData = req.body;
  console.log(employeeData);
  try {
    const employeeObj = new Employee({
      firstName: employeeData.firstName,
      lastName: employeeData.lastName,
      salary: employeeData.salary,
      department: employeeData.department,
      lastCompany: employeeData.lastCompany,
      lastSalary: employeeData.lastSalary,
      overallExp: employeeData.overallExp,
      contactInfo: employeeData.contactInfo,
      yearGrad: employeeData.yearGrad,
      gradStream: employeeData.gradStream,
    });
    const result = await employeeObj.save();
    return res.status(200).send(result);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error occurred while processing the data" });
  }
};

const getAllEmployeeData = async (req, res) => {
  try {
    const result = await Employee.find();
    return res.status(200).send(result);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Something went wrong while processing the data" });
  }
};

const getEmployeeSalData = async (req, res) => {
  const filter = req.params.salary;
  const query = { salary: { $gt: filter } };
  console.log(query);
  try {
    const result = await Employee.find(query);
    return res.status(200).send(result);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Something went wrong while processing the data" });
  }
};

const getExpData = async(req, res)=>{
    const overallExp = req.params.exp;
    const query = {overallExp: {$gt: overallExp}};
    console.log(query);
    try {
        const result = await Employee.find(query);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({message: "Something went wrong while processing the data"});
    }
}

const getEmpExpGradData = async (req, res) => {
    const yearGrad = req.params.grad;
    const overallExp = req.params.exp;
    // console.log("yearGrad & overallExp", yearGrad, overallExp);
    const query = {yearGrad: {$gt: yearGrad}, overallExp: {$gt: overallExp}};
  console.log(query);
  try {
    const result = await Employee.find(query);
    return res.status(200).send(result);
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Something went wrong while processing the data" });
  }
};

const updateEmployeeData = async(req, res)=>{
    const filter = req.body.filter;
    const update = req.body.update;
    const filterValue = {salary: {$eq: filter.salary}};
    const updateValue = {$set: {salary: update.salary}};
    console.log(filterValue, updateValue);
    try {
        const result = await Employee.updateMany(filterValue, updateValue);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({ message: "Something went wrong while processing the data" });
    }
}

const deleteData = async(req, res)=>{
    const lastCompany = req.query.lastCompany;
    const delQuery = {lastCompany: lastCompany};
    console.log(delQuery);
    try {
        const result = await Employee.deleteMany(delQuery);
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({message: "Something went wrong while processing the data"});
    }

}

module.exports = {
  saveEmployeeData,
  getAllEmployeeData,
  getEmployeeSalData,
  getExpData,
  getEmpExpGradData,
  updateEmployeeData,
  deleteData
};
