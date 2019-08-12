import { CustomerService } from './CustomerService';

console.log('Good morning');
const customerService = new CustomerService();
const addCustomer = customerService.addCustomer(
  'Marcus',
  'Exner',
  'marcus.exner@bbv.eu',
  '1977-09-25',
  'irgendwas'
);
console.log(addCustomer);
