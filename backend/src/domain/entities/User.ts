import { IUserProps } from '../interfaces/IUserProps';

export class User {
  private id: string;
  private firstName: string;
  private lastName: string;
  private middleName: string;
  private birthDate: Date;
  private email: string;
  private password: string;
  private role: string;
  private phone: string;
  private address: string;
  private user_type: string;
  private created_at: Date;
  private updated_at: Date;

  constructor(props: IUserProps) {
    this.id = props.id ?? crypto.randomUUID();
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.middleName = props.middleName;
    this.birthDate = props.birthDate;
    this.email = props.email;
    this.password = props.password;
    this.role = props.role;
    this.phone = props.phone;
    this.address = props.address;
    this.user_type = props.user_type;
    this.created_at = props.created_at ?? new Date();
    this.updated_at = props.updated_at ?? new Date();
  }

  getId(): string {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getMiddleName(): string {
    return this.middleName;
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getRole(): string {
    return this.role;
  }

  getPhone(): string {
    return this.phone;
  }

  getAddress(): string {
    return this.address;
  }

  getUserType(): string {
    return this.user_type;
  }

  getCreatedAt(): Date {
    return this.created_at;
  }

  getUpdatedAt(): Date {
    return this.updated_at;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
    this.touchUpdateAt();
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
    this.touchUpdateAt();
  }

  setMiddleName(middleName: string): void {
    this.middleName = middleName;
    this.touchUpdateAt();
  }

  setBirthDate(birthDate: Date): void {
    this.birthDate = birthDate;
    this.touchUpdateAt();
  }

  setEmail(email: string): void {
    this.email = email;
    this.touchUpdateAt();
  }

  setPassword(password: string): void {
    this.password = password;
    this.touchUpdateAt();
  }

  setPhone(phone: string): void {
    this.phone = phone;
    this.touchUpdateAt();
  }

  setAddress(address: string): void {
    this.address = address;
    this.touchUpdateAt();
  }

  setUserType(user_type: string): void {
    this.user_type = user_type;
    this.touchUpdateAt();
  }
  private touchUpdateAt(): void {
    this.updated_at = new Date();
  }
}
