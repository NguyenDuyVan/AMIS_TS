import { Department } from "../Entities/Department";
import { IBaseRepository } from "./Base/IBaseRepository";

export interface IDepartmentRepository extends IBaseRepository<Department> {
    /**
    * Check mã phòng ban có bị trùng không
    * @param departmentCode : Mã phòng ban
    * true - trùng, false - không trùng
    * CreatedBy VanND (05/09/2022)
    */
    CheckDepartmentCode(departmentCode: string): Boolean
}  