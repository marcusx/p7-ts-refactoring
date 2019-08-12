import { CustomerService } from './CustomerService';

console.log('Good morning');
const customerService = new CustomerService();
const addCustomer = customerService.AddCustomer(
  'Marcus',
  '',
  'marcus.exner@bbv.eu',
  '1977-09-25',
  'bbv'
);
console.log(addCustomer);
