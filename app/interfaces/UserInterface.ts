export interface UserInterface {
    id : number

    first_name : string

    last_name : string

    email : string

    phone_number : string

    image : string

    role : "admin" | "employee" | "merchant" | "customer"

    blocked : boolean

}


export interface MerchantInterface extends UserInterface {

    merchant_id : number

    verified : boolean
}

export interface EmployeeInterface extends UserInterface {
    id : number 


    user_id : number 


    branch_id  :number

    merchant_id : number

    code : string
}