"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Classification_1 = require("./Classification");
var CompanyRepository = /** @class */ (function () {
    function CompanyRepository() {
    }
    CompanyRepository.prototype.GetById = function (id) {
        return {
            Id: id,
            Name: "test",
            Classification: Classification_1.Classification.Bronze
        };
    };
    return CompanyRepository;
}());
exports.CompanyRepository = CompanyRepository;
