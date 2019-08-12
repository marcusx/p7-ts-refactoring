"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const CompanyRepository_1 = require("./CompanyRepository");
const CustomerDataAccess_1 = require("./CustomerDataAccess");
class CustomerService {
    constructor(firstname, lastname, email, dateOfBirth, companyId) {
        const companyRepository = new CompanyRepository_1.CompanyRepository();
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
        if (!this.customer.emailAddress.includes('@') ||
            !this.customer.emailAddress.includes('.')) {
            console.log('Email not valid. "@" or ate least one "." is missing.');
            return false;
        }
        return true;
    }
    customerAgeIsLegal() {
        const age = moment_1.default().diff(this.customer.dateOfBirth, 'years');
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
        }
        else {
            // Do credit check
            this.customer.hasCreditLimit = true;
            this.customer.creditLimit = 10;
        }
    }
    customerCreditLimitOk() {
        if (this.customer.hasCreditLimit && this.customer.creditLimit < 500) {
            console.log('Credit limit not sufficent.');
            return false;
        }
        else {
            return true;
        }
    }
    addCustomer() {
        if (!this.customerNameIsValid())
            return false;
        if (!this.emailIsValid())
            return false;
        if (!this.customerAgeIsLegal())
            return false;
        if (!this.customerCreditLimitOk())
            return false;
        CustomerDataAccess_1.CustomerDataAccess.AddCustomer(this.customer);
        return true;
    }
}
exports.CustomerService = CustomerService;
