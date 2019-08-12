import { Company } from './Company';

export class Customer {
  firstname!: string;
  lastname!: string;
  dateOfBirth!: string;
  emailAddress!: string;
  hasCreditLimit?: boolean;
  creditLimit!: number;
  company!: Company;
}
