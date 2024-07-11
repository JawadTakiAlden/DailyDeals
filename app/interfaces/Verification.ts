export default interface Verification {
  id: number;

  commercial_record: string;

  merchant_id: number;

  store_id: number;

  store_name?: string;

  merchant_name?: string;

  status: "pending" | "rejected" | "accepted";
}
