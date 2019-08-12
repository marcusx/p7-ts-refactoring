﻿import moment from 'moment';
import { CompanyRepository } from './CompanyRepository';
import { Customer } from './Customer';
import { CustomerDataAccess } from './CustomerDataAccess';

export class CustomerService {
  private customer: Customer;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    dateOfBirth: string,
    companyId: string
  ) {
    const companyRepository = new CompanyRepository();

    this.customer = {
      firstname: firstname,
      lastname: lastname,
      emailAddress: email,
      dateOfBirth: dateOfBirth,
      creditLimit: 0,
      company: companyRepository.getById(companyId)
    };
  }

  customerNameIsValid() {
    if (!this.customer.firstname || !this.customer.lastname) {
      console.log('Firstname OR Lastname missing.');
      return false;
    }
    return true;
  }

  emailIsValid() {
    if (
      !this.customer.emailAddress.includes('@') ||
      !this.customer.emailAddress.includes('.')
    ) {
      console.log('Email not valid. "@" or ate least one "." is missing.');
      return false;
    }
    return true;
  }

  customerAgeIsLegal() {
    const age = moment().diff(this.customer.dateOfBirth, 'years');
    console.log('AGE: ', age);
    if (age < 21) {
      console.log('User not old enough. Needs to be above 21.');
      return false;
    }
    return true;
  }

  processCreditLimit() {
    if (this.customer.company.Name == 'VeryImportantClient') {
      // Skip credit check
      this.customer.hasCreditLimit = false;
    } else {
      // Do credit check
      this.customer.hasCreditLimit = true;
      this.customer.creditLimit = 10;
    }
  }

  customerCreditLimitOk() {
    if (this.customer.hasCreditLimit && this.customer.creditLimit < 500) {
      console.log('Credit limit not sufficent.');
      return false;
    } else {
      return true;
    }
  }

  addCustomer() {
    if (!this.customerNameIsValid()) return false;
    if (!this.emailIsValid()) return false;
    if (!this.customerAgeIsLegal()) return false;
    if (!this.customerCreditLimitOk()) return false;

    CustomerDataAccess.AddCustomer(this.customer);
    return true;
  }
}
