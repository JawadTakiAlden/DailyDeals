export interface Offer {
    id : number
    name : string
    created_at : string
    branch_name : string
    offer_type : 'extra_offer' | 'gift_offer' | 'percentage_offer' | 'discount_offer'
}