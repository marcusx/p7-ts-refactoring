"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Classification_1 = require("./Classification");
class CompanyRepository {
    getById(id) {
        if (id === 'bbv') {
            return {
                Id: id,
                Name: 'VeryImportantClient',
                Classification: Classification_1.Classification.Silver
            };
        }
        else {
            return {
                Id: id,
                Name: 'test',
                Classification: Classification_1.Classification.Bronze
            };
        }
    }
}
exports.CompanyRepository = CompanyRepository;
