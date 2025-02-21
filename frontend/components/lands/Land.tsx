import React from "react";
import LandCard from "./LandCard";

export interface LandData {
  id: string;
  AvgProductionOfLantana: number;
  Lands: string;
  Location: string;
  Density: number;
  Area: number;
  State: string;
  City: string;
  LRURepresentative: number;
  StartDate: string;
  EndDate: string;
  Distribution: number[];
}

export const data: LandData[] = [
  {
    id: "1",
    AvgProductionOfLantana: 45,
    Lands: "Telangana",
    Location: "17.4065,78.4772",
    Density: 13,
    Area: 90,
    State: "Telangana",
    City: "Hyderabad",
    LRURepresentative: 4,
    StartDate: "12-03-2015",
    EndDate: "15-06-2015",
    Distribution: [14, 29, 8, 37, 12],
  },
  {
    id: "2",
    AvgProductionOfLantana: 38,
    Lands: "Karnataka",
    Location: "12.2958,76.6394",
    Density: 53,
    Area: 28,
    State: "Karnataka",
    City: "Mysuru",
    LRURepresentative: 2,
    StartDate: "21-01-2020",
    EndDate: "26-11-2020",
    Distribution: [37, 14, 3, 7, 39],
  },
  {
    id: "3",
    AvgProductionOfLantana: 67,
    Lands: "Telangana",
    Location: "18.6725,78.0941",
    Density: 12,
    Area: 17,
    State: "Telangana",
    City: "Nizamabad",
    LRURepresentative: 3,
    StartDate: "10-10-2012",
    EndDate: "28-05-2013",
    Distribution: [19, 9, 23, 35, 14],
  },
  {
    id: "4",
    AvgProductionOfLantana: 98,
    Lands: "Kerala",
    Location: "11.2588,75.7804",
    Density: 72,
    Area: 54,
    State: "Kerala",
    City: "Kozhikode",
    LRURepresentative: 5,
    StartDate: "28-01-2020",
    EndDate: "11-09-2020",
    Distribution: [9, 28, 23, 5, 35],
  },
  {
    id: "5",
    AvgProductionOfLantana: 56,
    Lands: "Telangana",
    Location: "17.4065,78.4772",
    Density: 66,
    Area: 21,
    State: "Telangana",
    City: "Hyderabad",
    LRURepresentative: 7,
    StartDate: "01-12-2018",
    EndDate: "29-05-2019",
    Distribution: [18, 27, 41, 13, 1],
  },
  {
    id: "6",
    AvgProductionOfLantana: 45,
    Lands: "Karnataka",
    Location: "12.9141,74.8560",
    Density: 37,
    Area: 95,
    State: "Karnataka",
    City: "Mangalore",
    LRURepresentative: 5,
    StartDate: "07-05-2015",
    EndDate: "21-06-2015",
    Distribution: [34, 11, 26, 27, 2],
  },
  {
    id: "7",
    AvgProductionOfLantana: 78,
    Lands: "Karnataka",
    Location: "12.9716,77.5946",
    Density: 55,
    Area: 57,
    State: "Karnataka",
    City: "Bengaluru",
    LRURepresentative: 1,
    StartDate: "23-12-2011",
    EndDate: "18-01-2012",
    Distribution: [19, 27, 8, 41, 5],
  },
  {
    id: "8",
    AvgProductionOfLantana: 67,
    Lands: "Karnataka",
    Location: "12.9716,77.5946",
    Density: 46,
    Area: 90,
    State: "Karnataka",
    City: "Bengaluru",
    LRURepresentative: 2,
    StartDate: "19-09-2014",
    EndDate: "16-01-2015",
    Distribution: [25, 6, 33, 14, 22],
  },
  {
    id: "9",
    AvgProductionOfLantana: 34,
    Lands: "Andhra Pradesh",
    Location: "16.3067,80.4365",
    Density: 29,
    Area: 20,
    State: "Andhra Pradesh",
    City: "Guntur",
    LRURepresentative: 5,
    StartDate: "12-06-2016",
    EndDate: "29-05-2017",
    Distribution: [16, 14, 49, 16, 5],
  },
  {
    id: "10",
    AvgProductionOfLantana: 23,
    Lands: "Tamil Nadu",
    Location: "13.0843,80.2705",
    Density: 96,
    Area: 61,
    State: "Tamil Nadu",
    City: "Chennai",
    LRURepresentative: 4,
    StartDate: "11-02-2020",
    EndDate: "08-05-2020",
    Distribution: [26, 17, 18, 25, 14],
  },
];

const Land = () => {
  return (
    <div className="grid  grid-cols-3 gap-5">
      {data.map((item, index) => (
        <LandCard key={index} landData={item}></LandCard>
      ))}
    </div>
  );
};

export default Land;
