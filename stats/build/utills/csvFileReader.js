"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// Functional Aproch
exports.CsvFileReaderFunction = function (path) {
    var data = fs_1.default
        .readFileSync(path, {
        encoding: "utf-8"
    })
        .split("\n");
    var MatchArray = data.map(function (match) {
        return match.split(",");
    });
    return MatchArray;
};
var MatchData = exports.CsvFileReaderFunction("football.scv");
var MatchDate = [];
var GetDate = function () {
    MatchData.map(function (item) { return MatchDate.push(item[0]); });
};
console.log(MatchDate);
GetDate();
// Class Based Approche
var CsvFileReaderClass = /** @class */ (function () {
    function CsvFileReaderClass(path) {
        this.path = path;
        this.data = [];
    }
    CsvFileReaderClass.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.path, {
            encoding: "utf-8"
        })
            .split("\n")
            .map(function (match) {
            return match.split(",");
        });
    };
    CsvFileReaderClass.prototype.getDate = function () {
        var MatchDate = [];
        var MatchDates = this.data.map(function (item) { return MatchDate.push(item[0]); });
        return MatchDate;
    };
    return CsvFileReaderClass;
}());
exports.CsvFileReaderClass = CsvFileReaderClass;
