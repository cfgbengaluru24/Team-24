import fs from 'fs';

// const representativeData = [
//   { username:"rd1", id: '1', Labour: [
//     "Raj","Vikram","Satya"
//   ] },
//   { username:"rd2",id: '2', Labour: [
//     "Jaish","Akshata","Bhaskar"
//   ] },
//   { username:"rd3",id: '3', Labour: [
//     "Namit","Nagraj","Oshan"
//   ] },
//   { username:"rd4",id: '4', Labour: [
//     "Sachin","Mahesh","Suresh"
//   ] },
//   { username:"rd5",id: '5', Labour: [
//     "Dinesh","Laxman","Jatin"
//   ] }
// ];

const representativeData = [
  {
    username: "rd1",
    id: "1",
    Labour: ["Prisha", "Aarohi", "Ishita", "Kabir", "Myra", "Advait"],
    "Total Land (units)": 7,
    "Average Production Per Day": 43.16447368,
    Sells: "Raw"
  },
  {
    username: "rd2",
    id: "2",
    Labour: ["Neel", "Vivaan", "Vihaan", "Reyansh", "Riya", "Atharv"],
    "Total Land (units)": 20,
    "Average Production Per Day": 43.56291391,
    Sells: "Elephant"
  },
  {
    username: "rd3",
    id: "3",
    Labour: ["Avni", "Rudra", "Anvi", "Arjun"],
    "Total Land (units)": 15,
    "Average Production Per Day": 28.50993377,
    Sells: "Raw"
  },
  {
    username: "rd4",
    id: "4",
    Labour: ["Aditi", "Aarush", "Anika"],
    "Total Land (units)": 16,
    "Average Production Per Day": 21.58666667,
    Sells: "Furniture"
  },
  {
    username: "rd5",
    id: "5",
    Labour: ["Arin"],
    "Total Land (units)": 7,
    "Average Production Per Day": 10.79807692,
    Sells: "Furniture"
  },
  {
    username: "rd6",
    id: "6",
    Labour: ["Shaurya", "Anaya", "Pari", "Ira", "Darsh", "Navya", "Aditya"],
    "Total Land (units)": 18,
    "Average Production Per Day": 60.15789474,
    Sells: "Weaving"
  },
  {
    username: "rd7",
    id: "7",
    Labour: ["Aaradhya", "Inaaya", "Krishna", "Ayush", "Ridhima", "Eva", "Rishi"],
    "Total Land (units)": 18,
    "Average Production Per Day": 51.44736842,
    Sells: "Elephant"
  },
  {
    username: "rd8",
    id: "8",
    Labour: ["Laksh", "Anisha", "Saanvi", "Nitya", "Aahana", "Ayaan", "Sai", "Siya"],
    "Total Land (units)": 12,
    "Average Production Per Day": 57.34210526,
    Sells: "Furniture"
  },
  {
    username: "rd9",
    id: "9",
    Labour: [],
    "Total Land (units)": 17,
    "Average Production Per Day": "",
    Sells: ""
  },
  {
    username: "rd10",
    id: "10",
    Labour: ["Aadhya", "Arnav", "Raghav", "Aarav", "Ishaan", "Dev", "Sara"],
    "Total Land (units)": 6,
    "Average Production Per Day": 52.01973684,
    Sells: "Raw"
  }
];

export { representativeData };
// fs.writeFile('/c:/Users/91996/OneDrive/Desktop/cfg/Team-24/frontend/lib/people.json', JSON.stringify(repersentativeData), (err) => {
//   if (err) {
//     console.error('Error writing JSON file:', err);
//   } else {
//     console.log('JSON file created successfully!');
//   }
// });
export const fetchLabHistory = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labourers: [
          { month: "January", year: 2024, count: 15 },
          { month: "February", year: 2024, count: 18 },
          { month: "March", year: 2024, count: 22 },
          { month: "April", year: 2024, count: 20 },
          { month: "May", year: 2024, count: 28 },
          { month: "June", year: 2024, count: 30 },
          { month: "July", year: 2024, count: 32 },
          { month: "August", year: 2024, count: 30 },
          { month: "September", year: 2024, count: 31 },
          { month: "October", year: 2024, count: 40 },
          { month: "November", year: 2024, count: 42 },
          { month: "December", year: 2024, count: 45 },
        ],
      });
    }, 1000);
  });
};

export const fetchRevHistory = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labourers: [
          { month: "January", year: 2024, count: 15 },
          { month: "February", year: 2024, count: 18 },
          { month: "March", year: 2024, count: 22 },
          { month: "April", year: 2024, count: 25 },
          { month: "May", year: 2024, count: 28 },
          { month: "June", year: 2024, count: 30 },
          { month: "July", year: 2024, count: 32 },
          { month: "August", year: 2024, count: 30 },
          { month: "September", year: 2024, count: 20 },
          { month: "October", year: 2024, count: 40 },
          { month: "November", year: 2024, count: 42 },
          { month: "December", year: 2024, count: 45 },
        ],
      });
    }, 1000);
  });
};
