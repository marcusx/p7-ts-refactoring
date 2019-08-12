import moment from 'moment';
import { CompanyRepository } from './CompanyRepository';
import { Customer } from './Customer';
import { CustomerDataAccess } from './CustomerDataAccess';

export class CustomerService {
  AddCustomer(firstname, lastname, email, dateOfBirth, companyId) {
    if (!firstname || !lastname) {
      console.log('Firstname OR Lastname missing.');
      return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
      console.log('Email not valid. "@" or ate least one "." is missing.');
      return false;
    }

    const age = moment().diff(dateOfBirth, 'years');
    console.log('AGE: ', age);
    if (age < 21) {
      console.log('User not old enough. Needs to be above 21.');
      return false;
    }

    var companyRepository = new CompanyRepository();
    var company = companyRepository.GetById(companyId);

    var customer: Customer = {
      Company: company,
      DateOfBirth: dateOfBirth,
      EmailAddress: email,
      Firstname: firstname,
      Surname: lastname
    };

    if (company.Name == 'VeryImportantClient') {
      // Skip credit check
      customer.HasCreditLimit = false;
    } else {
      // Do credit check
      customer.HasCreditLimit = true;
      customer.CreditLimit = 10;
    }

    if (customer.HasCreditLimit && customer.CreditLimit < 500) {
      console.log('Credit limit not sufficent.');
      return false;
    }

    CustomerDataAccess.AddCustomer(customer);

    return true;
  }
}
