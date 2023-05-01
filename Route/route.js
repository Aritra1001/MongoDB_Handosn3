const router = require('express').Router();
const employeeFunc = require('../Controller/employee');

router.post('/employee', employeeFunc.saveEmployeeData);
router.get('/employee', employeeFunc.getAllEmployeeData);
router.get('/employee/:salary', employeeFunc.getEmployeeSalData);
router.get('/employee/overallExp/:exp', employeeFunc.getExpData);
router.get('/employee/yearGrad/:grad/overallExp/:exp', employeeFunc.getEmpExpGradData);
router.put('/employee', employeeFunc.updateEmployeeData);
router.delete('/employee', employeeFunc.deleteData);

module.exports = router;