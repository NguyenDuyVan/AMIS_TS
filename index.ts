import express from 'express';
import { employeesRouter } from './src/WebAPI/Controller/EmployeesController';

const app = express();
const port = 3001;

app.use('/employees', employeesRouter);

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.listen(port, function () {
    console.log('Your app running on port ' + port);
    console.log('userRoute ' + employeesRouter);
})