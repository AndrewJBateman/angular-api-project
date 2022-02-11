export interface apiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
  support: {
    url: string;
    text: string;
  };
}

export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string
}
