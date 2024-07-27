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