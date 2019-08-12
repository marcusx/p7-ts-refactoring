import { CustomerService } from './CustomerService';

console.log('Good morning');
const customerService = new CustomerService();
const addCustomer = customerService.AddCustomer(
  'Marcus',
  'Exner',
  'marcus.exner@bbv.eu',
  '25.09.1977',
  'bbv'
);
console.log(addCustomer);
