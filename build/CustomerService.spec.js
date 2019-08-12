"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerService_1 = require("./CustomerService");
var chai_1 = require("chai");
require("mocha");
describe('Customer Service', function () {
    var service = new CustomerService_1.CustomerService();
    describe('Add Customer Service Method', function () {
        it('Should return true if all values are set correctly.', function () {
            var result = service.AddCustomer('Marcus', 'Exner', 'marcus.exner@bbv.eu', '25.09.1977', 'ID1234');
            chai_1.expect(result).to.be.true;
        });
        it('Should return false if email is not valid.', function () {
            var result = service.AddCustomer('Marcus', 'Exner', 'marcus.exner#bbv.eu', '25.09.1977', 'ID1234');
            chai_1.expect(result).to.be.true;
        });
        it('Should be false if firstname AND lastname is missing.', function () {
            var result = service.AddCustomer('', '', 'marcus.exner@bbv.eu', '25.09.1977', 'ID1234');
            chai_1.expect(result).to.be.false;
        });
        it('Should be true if only firstname is missing.', function () {
            var result = service.AddCustomer('', 'Exner', 'marcus.exner@bbv.eu', '25.09.1977', 'ID1234');
            chai_1.expect(result).to.be.true;
        });
        it('Should be true if only lastname is missing.', function () {
            var result = service.AddCustomer('Marcus', '', 'marcus.exner@bbv.eu', '25.09.1977', 'ID1234');
            chai_1.expect(result).to.be.true;
        });
        it('Should be false if user is not at least of age 21.', function () {
            var result = service.AddCustomer('Marcus', 'Exner', 'marcus.exner@bbv.eu', '25.09.2010', 'ID1234');
            chai_1.expect(result).to.be.false;
        });
    });
});
