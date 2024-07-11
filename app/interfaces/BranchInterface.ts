export default interface Branch {
  id?: number;

  name: string;

  location: string;

  google_maps: string;

  store_id: number;

  category_id?: number;

  category_name: string;

  image: string;

  visible?: boolean;
}
