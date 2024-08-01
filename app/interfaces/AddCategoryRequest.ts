export default interface AddCategoryRequest {
    id: number;
    category: string;
    admin_name?: string | null;
    status: "pending" | "rejected" | "accepted";
    user: {
      id: number;
  
      name: string;
    };
  
    parent: {
      id: number;
  
      name: string;
    } | null;
  }
  