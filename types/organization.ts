export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  rank: string;
  term: string;
  avatarUrl: string;
  bio: string[];
  responsibilities: string[];
  order: number;
}

export interface OrganizationDepartment {
  id: string;
  name: string;
  code: string;
  category: 'khoi-nghiep-vu' | 'khoi-dieu-tra' | 'khoi-bo-tro' | 'khoi-dia-phuong' | 'khoi-su-nghiep';
  headOfDepartment: string;
  phone: string;
  email: string;
  address: string;
  functions: string[];
}
