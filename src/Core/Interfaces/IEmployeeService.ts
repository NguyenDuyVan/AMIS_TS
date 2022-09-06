import { EmployeeEntity } from "../Entities/EmployeesEntity";
import { IBaseService } from "./Base/IBaseService";

export interface IEmployeeService extends IBaseService<EmployeeEntity> {
    /**
    * Tìm kiếm thông tin nhân viên theo Mã hoặc Họ Tên
    * @param employeeFilter : Id nhân viên cần lấy dữ liệu
    * @param pageSize : Số bản ghi trên 1 trang
    * @param pageNumber : Thứ tự trang
    * CreatedBy VanND (05/09/2022)
    */
    GetPaging(employeeFilter: string, pageSize: number, pageNumber: number): EmployeeEntity[]

    /**
    * Xóa nhiều đối tượng theo Id
    * @param entitiesId : Danh sách Id những Nhân viên cần xóa
    * @returns số nhân viên bị xóa
    * CreatedBy VanND (05/09/2022)
    */
    DeleteMulti(entitiesIdText: string): { employeeEffect: number }

    // ExportData() : MemoryStream
    // xuất file exel
}