import { IBaseRepository } from "../../Core/Interfaces/Base/IBaseRepository";
import { connection } from "../Connection/mysql/connection";

export class BaseRepository<T> implements IBaseRepository<T> {
    Filter(entityFilter: string, pageSize?: number | undefined, pageNumber?: number | undefined): Promise<T | T[]> {
        throw new Error("Method not implemented.");
    }
    async Get(): Promise<T[]> {
        const [rows] = await (await connection).query('SELECT * FROM Employees');
        return rows as T[];
    }
    async GetById(entityId: string): Promise<T[]> {
        const [rows] = await (await connection).query(String(`SELECT * FROM Employees WHERE EmployeeId = "${entityId}"`));
        return rows as T[];
    }
    Insert(data: T): T {
        throw new Error("Method not implemented.");
    }
    Update(entityId: string, data: T): T {
        throw new Error("Method not implemented.");
    }
    Delete(entityId: string): number {
        throw new Error("Method not implemented.");
    }
}
