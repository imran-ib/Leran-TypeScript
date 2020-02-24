import fs from "fs";

// Functional Aproch

export const CsvFileReaderFunction = (path: string): string[][] => {
  const data: string[] = fs
    .readFileSync(path, {
      encoding: "utf-8"
    })
    .split("\n");
  const MatchArray: string[][] = data.map(match => {
    return match.split(",");
  });
  return MatchArray;
};
const MatchData = CsvFileReaderFunction("football.scv");

let MatchDate: string[] = [];

const GetDate = function() {
  MatchData.map(item => MatchDate.push(item[0]));
};

console.log(MatchDate);

GetDate();

// Class Based Approche

export class CsvFileReaderClass {
  data: string[][] = [];

  constructor(public path: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.path, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((match: string): string[] => {
        return match.split(",");
      });
  }

  getDate() {
    let MatchDate: string[] = [];
    const MatchDates: number[] = this.data.map(item => MatchDate.push(item[0]));
    return MatchDate;
  }
}
