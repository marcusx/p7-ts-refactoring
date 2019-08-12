import { CustomerService } from './CustomerService';

console.log('Good morning');
const customerService = new CustomerService(
  'Marcus',
  'Exner',
  'marcus.exner@bbv.eu',
  '1977-09-25',
  'bbv'
);
const result = customerService.addCustomer();
console.log(result);
