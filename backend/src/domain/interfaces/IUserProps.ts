export interface IUserProps {
  id?: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: Date;
  email: string;
  password: string;
  role: string;
  phone: string;
  address: string;
  user_type: string;
  created_at?: Date;
  updated_at?: Date;
}
