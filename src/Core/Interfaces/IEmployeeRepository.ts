import { EmployeeEntity } from "../Entities/EmployeesEntity";
import { IBaseRepository } from "./Base/IBaseRepository";

export interface IEmployeeRepository extends IBaseRepository<EmployeeEntity> {
    /**
    * Tìm kiếm thông tin nhân viên theo Mã hoặc Họ Tên
    * @param employeeFilter : Id nhân viên cần lấy dữ liệu
    * @param pageSize : Số bản ghi trên 1 trang
    * @param pageNumber : Thứ tự trang
    * CreatedBy VanND (05/09/2022)
    */
    GetPaging(employeeFilter: string, pageSize : number, pageNumber: number) : EmployeeEntity[]

    /**
    * Lấy tất cả Id nhân viên
    * CreatedBy VanND (05/09/2022)
    */
    GetAllEmployeesId() : string[]

    /**
    * Thực hiện check mã nhân viên có trùng hay không
    * @param employeeCode : mã nhân viên
    * CreatedBy VanND (05/09/2022)
    */
    CheckEmployeeCode(employeeCode: string) : Boolean

    /**
    * Xóa nhiều đối tượng theo Id
    * @param entitiesId : Danh sách Id những Nhân viên cần xóa
    * @returns số nhân viên bị xóa
    * CreatedBy VanND (05/09/2022)
    */
    DeleteMulti(entitiesIdText: string): {employeeEffect: number}

    /**
    * Lấy mã nhân viên mới
    * CreatedBy VanND (05/09/2022)
    */
    GetNewEmployeeCode() : string
}