"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerService_1 = require("./CustomerService");
console.log('Good morning');
var customerService = new CustomerService_1.CustomerService();
var addCustomer = customerService.AddCustomer('Marcus', 'Exner', 'marcus.exner@bbv.eu', '25.09.1977', 'bbv');
console.log(addCustomer);
