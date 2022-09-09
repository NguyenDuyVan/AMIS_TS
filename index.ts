import express, { Router } from 'express';
import cors from 'cors'
import { EmployeesController } from './src/WebAPI/Controller/EmployeesController';
import { BaseController } from './src/WebAPI/Controller/BaseController';
import { IEmployeeRepository } from './src/Core/Interfaces/IEmployeeRepository';
// import { Department } from './src/WebAPI/Controller/DepartmentsController';

export const app = express();
const port = process.env.PORT;

app.use(cors())

// new BaseController<Employee>('employees', Router())
// app.use('api/v1/employees', employeesRouter);
new EmployeesController()
// new DepartmentsController()



express().get('/api/v1/employees',() => {
    console.log('okokokokoko');
})

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.listen(port, function () {
    console.log('Your app running on port ' + port);
    // console.log('userRoute ' + employeesRouter);
})
