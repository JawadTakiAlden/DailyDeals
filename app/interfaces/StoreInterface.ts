export default interface Store {
    id? : number,
    name : string
    type : "free_vendor" | "verified_vendor"
    merchant_id? : number
}