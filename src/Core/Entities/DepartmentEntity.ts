import { BaseEntity } from "./BaseEntity";

export class DepartmentEntity extends BaseEntity {
    /**
    * Id đơn vị
    * CreatedBy VanND (05/09/2022)
    */
    private departmentId : string

    /**
    * Mã đơn vị
    * CreatedBy VanND (05/09/2022)
    */
    private departmentCode: string

    /**
    * Tên đơn vị
    * CreatedBy VanND (05/09/2022)
    */
    private departmentName : string
}