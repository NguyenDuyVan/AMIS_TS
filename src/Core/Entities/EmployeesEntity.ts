import { ResourceVn } from "../Resources/ResourceVN";
import { BaseEntity } from "./BaseEntity";

enum Gender {
    Female = 0,
    Male = 1,
    Other = 2,
}

export class EmployeeEntity extends BaseEntity {
    /**
    * Id cuả nhân viên
    * CreatedBy VanND (05/09/2022)
    */
    private employeeId: string

    /**
    * Mã nhân viên
    * CreatedBy VanND (05/09/2022)
    */
    private employeeCode: string

    /**
    * Tên nhân viên
    * CreatedBy VanND (05/09/2022)
    */
    private employeeName: string

    /**
    * Chức danh
    * CreatedBy VanND (05/09/2022)
    */
    private positionName?: string

    /**
    * Ngày sinh
    * CreatedBy VanND (05/09/2022)
    */
    private dateOfBirth?: Date

    /**
    * Giới tính
    * CreatedBy VanND (05/09/2022)
    */
    private gender?: Gender

    /**
    * Giới tính
    * CreatedBy VanND (05/09/2022)
    */
    private _genderName?: string

    /**
    * Đặt gt cho genderName
    * CreatedBy VanND (05/09/2022)
    */
    public get genderName() {
        switch (this.gender) {
            case 0:
                return this._genderName = ResourceVn.gender.female
                break;
            case 1: 
                return this._genderName = ResourceVn.gender.male
                break;
            default: this._genderName = ResourceVn.gender.other
                break;
        }
    }

    /**
    * Số CMND / CCCD
    * CreatedBy VanND (05/09/2022)
    */
    private identityNumber?: string

    /**
    * Ngày cấp
    * CreatedBy VanND (05/09/2022)
    */
    private identityDate?: Date

    /**
    * Nơi cấp
    * CreatedBy VanND (05/09/2022)
    */
    private identityPlace?: string

    /**
    * Địa chỉ
    * CreatedBy VanND (05/09/2022)
    */
    private address?: string

    /**
    * SĐT di động
    * CreatedBy VanND (05/09/2022)
    */
    private phoneNumber?:string

    /**
    * Số điện thoại cố định
    * CreatedBy VanND (05/09/2022)
    */
    private telephoneNumber?: string

    /**
    * Email
    * CreatedBy VanND (05/09/2022)
    */
    private email : string

    /**
    * Tài khoản ngân hàng
    * CreatedBy VanND (05/09/2022)
    */
    private BankAccountNumber?: number

    /**
    * Tên ngân hàng
    * CreatedBy VanND (05/09/2022)
    */
    private bankName?: string

    /**
    * Chi nhánh ngân hàng
    * CreatedBy VanND (05/09/2022)
    */
    private bankBranchName?: string

    /**
    * Id của đơn vị - Khóa ngoại
    * CreatedBy VanND (05/09/2022)
    */
    private departmentId?: string

    /**
    * Tên của đơn vị - Khóa ngoại 
    * CreatedBy VanND (05/09/2022)
    */
    private departmentName?: string
}