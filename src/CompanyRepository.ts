import { Company } from './Company';
import { Classification } from './Classification';

export class CompanyRepository {
  GetById(id): Company {
    if (id === 'bbv') {
      return {
        Id: id,
        Name: 'VeryImportantClient',
        Classification: Classification.Silver
      };
    } else {
      return {
        Id: id,
        Name: 'test',
        Classification: Classification.Bronze
      };
    }
  }
}
