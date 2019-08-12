import { CustomerService } from './CustomerService';
import { expect } from 'chai';
import 'mocha';

describe('Customer Service', () => {
  const service = new CustomerService();

  describe('Add Customer Service Method', () => {
    it('Should return true if all values are set correctly.', () => {
      const result = service.AddCustomer(
        'Marcus',
        'Exner',
        'marcus.exner@bbv.eu',
        '25.09.1977',
        'ID1234'
      );
      expect(result).to.be.true;
    });

    it('Should return false if email is not valid.', () => {
      const result = service.AddCustomer(
        'Marcus',
        'Exner',
        'marcus.exner#bbv.eu',
        '25.09.1977',
        'ID1234'
      );
      expect(result).to.be.true;
    });

    it('Should be false if firstname AND lastname is missing.', () => {
      const result = service.AddCustomer(
        '',
        '',
        'marcus.exner@bbv.eu',
        '25.09.1977',
        'ID1234'
      );
      expect(result).to.be.false;
    });

    it('Should be true if only firstname is missing.', () => {
      const result = service.AddCustomer(
        '',
        'Exner',
        'marcus.exner@bbv.eu',
        '25.09.1977',
        'ID1234'
      );
      expect(result).to.be.true;
    });

    it('Should be true if only lastname is missing.', () => {
      const result = service.AddCustomer(
        'Marcus',
        '',
        'marcus.exner@bbv.eu',
        '25.09.1977',
        'ID1234'
      );
      expect(result).to.be.true;
    });

    it('Should be false if user is not at least of age 21.', () => {
      const result = service.AddCustomer(
        'Marcus',
        'Exner',
        'marcus.exner@bbv.eu',
        '25.09.2010',
        'ID1234'
      );
      expect(result).to.be.false;
    });
  });
});
