"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerService_1 = require("./CustomerService");
console.log('Good morning');
const customerService = new CustomerService_1.CustomerService('Marcus', 'Exner', 'marcus.exner@bbv.eu', '1977-09-25', 'bbv');
const result = customerService.addCustomer();
console.log(result);
