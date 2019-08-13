import { CustomerService } from './CustomerService';
import { expect } from 'chai';
import 'mocha';

describe('Customer Service', () => {
  describe('Add Customer Service Method', () => {
    it('Should return true if all values are set correctly.', () => {
      const customerService = new CustomerService(
        'Marcus',
        'Exner',
        'marcus.exner@bbv.eu',
        '1977-09-25',
        'bbv' // Very important company without credit limit.
      );
      const result = customerService.addCustomer();
      expect(result).to.be.true;
    });

    it('Should return false if email is not valid.', () => {
      const customerService = new CustomerService(
        'Marcus',
        'Exner',
        'marcus.exner#bbv.eu',
        '1977-09-25',
        'bbv'
      );
      const result = customerService.addCustomer();
      expect(result).to.be.false;
    });

    it('Should be false if firstname AND lastname is missing.', () => {
      const customerService = new CustomerService(
        '',
        '',
        'marcus.exner@bbv.eu',
        '1977-09-25',
        'bbv'
      );
      const result = customerService.addCustomer();
      expect(result).to.be.false;
    });

    it('Should be false if only firstname is missing.', () => {
      const customerService = new CustomerService(
        '',
        'Exner',
        'marcus.exner@bbv.eu',
        '1977-09-25',
        'bbv'
      );
      const result = customerService.addCustomer();
      expect(result).to.be.false;
    });

    it('Should be false if only lastname is missing.', () => {
      const customerService = new CustomerService(
        'Marcus',
        '',
        'marcus.exner@bbv.eu',
        '1977-09-25',
        'bbv'
      );
      const result = customerService.addCustomer();
      expect(result).to.be.false;
    });

    it('Should be false if user is not at least of age 21.', () => {
      const customerService = new CustomerService(
        'Marcus',
        'Exner',
        'marcus.exner@bbv.eu',
        '2010-09-25',
        'bbv'
      );
      const result = customerService.addCustomer();
      expect(result).to.be.false;
    });
  });

  describe('Customer Name Is Valid Method', () => {
    it('Should be false if user firstname is missing.', () => {
      const customerService = new CustomerService(
        '',
        'Exner',
        'marcus.exner@bbv.eu',
        '2010-09-25',
        'bbv'
      );
      const result = customerService.customerNameIsValid();
      expect(result).to.be.false;
    });
  });

  describe('Credit limit is ok.', () => {
    it('Should be false if user is not important.', () => {
      const customerService = new CustomerService(
        '',
        'Exner',
        'marcus.exner@bbv.eu',
        '2010-09-25',
        'irgendwas'
      );
      const result = customerService.customerCreditLimitOk();
      expect(result).to.be.false;
    });
  });
});
