"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerService_1 = require("./CustomerService");
const chai_1 = require("chai");
require("mocha");
describe('Customer Service', () => {
    describe('Add Customer Service Method', () => {
        it('Should return true if all values are set correctly.', () => {
            const customerService = new CustomerService_1.CustomerService('Marcus', 'Exner', 'marcus.exner@bbv.eu', '1977-09-25', 'bbv' // Very important company without credit limit.
            );
            const result = customerService.addCustomer();
            chai_1.expect(result).to.be.true;
        });
        it('Should return false if email is not valid.', () => {
            const customerService = new CustomerService_1.CustomerService('Marcus', 'Exner', 'marcus.exner#bbv.eu', '1977-09-25', 'bbv');
            const result = customerService.addCustomer();
            chai_1.expect(result).to.be.false;
        });
        it('Should be false if firstname AND lastname is missing.', () => {
            const customerService = new CustomerService_1.CustomerService('', '', 'marcus.exner@bbv.eu', '1977-09-25', 'bbv');
            const result = customerService.addCustomer();
            chai_1.expect(result).to.be.false;
        });
        it('Should be false if only firstname is missing.', () => {
            const customerService = new CustomerService_1.CustomerService('', 'Exner', 'marcus.exner@bbv.eu', '1977-09-25', 'bbv');
            const result = customerService.addCustomer();
            chai_1.expect(result).to.be.false;
        });
        it('Should be false if only lastname is missing.', () => {
            const customerService = new CustomerService_1.CustomerService('Marcus', '', 'marcus.exner@bbv.eu', '1977-09-25', 'bbv');
            const result = customerService.addCustomer();
            chai_1.expect(result).to.be.false;
        });
        it('Should be false if user is not at least of age 21.', () => {
            const customerService = new CustomerService_1.CustomerService('Marcus', 'Exner', 'marcus.exner@bbv.eu', '2010-09-25', 'bbv');
            const result = customerService.addCustomer();
            chai_1.expect(result).to.be.false;
        });
    });
});
