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
        '1977-09-25',
        'bbv' // Very important company without credit limit.
      );
      expect(result).to.be.true;
    });

    it('Should return false if email is not valid.', () => {
      const result = service.AddCustomer(
        'Marcus',
        'Exner',
        'marcus.exner#bbv.eu',
        '1977-09-25',
        'bbv'
      );
      expect(result).to.be.false;
    });

    it('Should be false if firstname AND lastname is missing.', () => {
      const result = service.AddCustomer(
        '',
        '',
        'marcus.exner@bbv.eu',
        '1977-09-25',
        'bbv'
      );
      expect(result).to.be.false;
    });

    it('Should be false if only firstname is missing.', () => {
      const result = service.AddCustomer(
        '',
        'Exner',
        'marcus.exner@bbv.eu',
        '1977-09-25',
        'bbv'
      );
      expect(result).to.be.false;
    });

    it('Should be false if only lastname is missing.', () => {
      const result = service.AddCustomer(
        'Marcus',
        '',
        'marcus.exner@bbv.eu',
        '1977-09-25',
        'bbv'
      );
      expect(result).to.be.false;
    });

    it('Should be false if user is not at least of age 21.', () => {
      const result = service.AddCustomer(
        'Marcus',
        'Exner',
        'marcus.exner@bbv.eu',
        '2010-09-25',
        'bbv'
      );
      expect(result).to.be.false;
    });
  });
});
