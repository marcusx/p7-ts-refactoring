import { Company } from './Company';

export class Customer {
  Firstname!: string;
  Surname!: string;
  DateOfBirth!: string;
  EmailAddress!: string;
  HasCreditLimit?: boolean;
  CreditLimit?: number;
  Company!: Company;
}
