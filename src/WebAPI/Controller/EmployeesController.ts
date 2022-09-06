import { Request, Response } from "express";
import { EmployeesRepository } from "../../Infrastructure/Repository/EmployeesRepository";
import express from 'express';

export const employeesRouter = express.Router();

const _employeesRepository = new EmployeesRepository()

employeesRouter.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).json(_employeesRepository.Get())
    } catch (error) {
        res.send(error)
    }
})