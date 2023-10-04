const coalMines = [
  {
    id: "M0",
    name: "Jharia Coalfield",
    state: "Jharkhand",
    production: {
      1: 4520,
      2: 502,
      3: 4880,
    },
    coordinates: {
      n: 24.35,
      e: 79.34,
    },
  },
  {
    id: "M1",
    name: "Singrauli Coalfield",
    state: "Madhya Pradesh",
    production: {
      1: 7485,
      2: 251,
      3: 321,
    },
    coordinates: {
      n: 24.2,
      e: 82.68,
    },
  },
  {
    id: "M2",
    name: "Talcher Coalfield",
    state: "Odisha",
    production: {
      1: 745,
      2: 1450,
      3: 3245,
    },
    coordinates: {
      n: 20.95,
      e: 85.23,
    },
  },
  //   {
  //     id: "M3",
  //     name: "Korba Coalfield",
  //     state: "Chhattisgarh",
  //     production: {
  //       1: 7854,
  //       2: 321,
  //       3: 4520,
  //     },
  //     coordinates: {
  //       n: 22.35,
  //       e: 82.68,
  //     },
  //   },
  //   {
  //     id: "M4",
  //     name: "Raniganj Coalfield",
  //     state: "West Bengal",
  //     production: {
  //       1: 450,
  //       2: 3560,
  //       3: 478,
  //     },
  //     coordinates: {
  //       n: 23.62,
  //       e: 87.16,
  //     },
  //   },
  //   {
  //     id: 5,
  //     name: "Nagpur Coalfield",
  //     state: "Maharashtra",
  //     production: {
  //       1: 785,
  //       2: 3645,
  //       3: 7820,
  //     },
  //     coordinates: {
  //       n: 21.17,
  //       e: 79.08,
  //     },
  //   },
  //   {
  //     id: 6,
  //     name: "Wardha Valley Coalfield",
  //     state: "Maharashtra",
  //     production: {
  //       1: 6875,
  //       2: 562,
  //       3: 7820,
  //     },
  //     coordinates: {
  //       n: 20.74,
  //       e: 78.55,
  //     },
  //   },
  //   {
  //     id: 7,
  //     name: "Godavari Valley Coalfield",
  //     state: "Andhra Pradesh",
  //     production: {
  //       1: 4720,
  //       2: 592,
  //       3: 7880,
  //     },
  //     coordinates: {
  //       n: 17.31,
  //       e: 80.55,
  //     },
  //   },
  //   {
  //     id: 8,
  //     name: "Koyagudem Coalfield",
  //     state: "Telangana",
  //     production: {
  //       1: 4520,
  //       2: 502,
  //       3: 4880,
  //     },
  //     coordinates: {
  //       n: 17.33,
  //       e: 80.54,
  //     },
  //   },
  //   {
  //     id: 9,
  //     name: "Singareni Coalfield",
  //     state: "Telangana",
  //     production: {
  //       1: 250,
  //       2: 4870,
  //       3: 99852,
  //     },
  //     coordinates: {
  //       n: 17.49,
  //       e: 79.5,
  //     },
  //   },
  //   {
  //     id: 10,
  //     name: "Wani Coalfield",
  //     state: "Maharashtra",
  //     production: {
  //       1: 789,
  //       2: 8852,
  //       3: 3650,
  //     },
  //     coordinates: {
  //       n: 20.03,
  //       e: 78.97,
  //     },
  //   },
  //   {
  //     id: 11,
  //     name: "Chanda Coalfield",
  //     state: "Maharashtra",
  //     production: {
  //       1: 745,
  //       2: 7995,
  //       3: 3650,
  //     },
  //     coordinates: {
  //       n: 19.97,
  //       e: 79.23,
  //     },
  //   },
  //   {
  //     id: 12,
  //     name: "Korba Coalfield",
  //     state: "Chhattisgarh",
  //     production: {
  //       1: 745,
  //       2: 3654,
  //       3: 450,
  //     },
  //     coordinates: {
  //       n: 22.37,
  //       e: 82.7,
  //     },
  //   },
  //   {
  //     id: 13,
  //     name: "Rajmahal Coalfield",
  //     state: "Jharkhand",
  //     production: {
  //       1: 785,
  //       2: 3657,
  //       3: 25,
  //     },
  //     coordinates: {
  //       n: 24.03,
  //       e: 87.25,
  //     },
  //   },
  //   {
  //     id: 14,
  //     name: "Tandur Coalfield",
  //     state: "Telangana",
  //     production: {
  //       1: 7800,
  //       2: 780,
  //       3: 9872,
  //     },
  //     coordinates: {
  //       n: 17.25,
  //       e: 77.59,
  //     },
  //   },
];

const distributorData = [
  {
    id: "D0",
    name: "Distributor 0",
    state: "Andhra Pradesh",
    coordinates: {
      n: 15.91,
      e: 79.74,
    },
  },
  {
    id: "D1",
    name: "Distributor 1",
    state: "Bihar",
    coordinates: {
      n: 25.61,
      e: 85.14,
    },
  },
  {
    id: "D2",
    name: "Distributor 2",
    state: "Gujarat",
    coordinates: {
      n: 22.25,
      e: 71.19,
    },
  },
  {
    id: "D3",
    name: "Distributor 3",
    state: "Haryana",
    coordinates: {
      n: 29.05,
      e: 76.08,
    },
  },
  {
    id: "D4",
    name: "Distributor 4",
    state: "Karnataka",
    coordinates: {
      n: 12.97,
      e: 77.59,
    },
  },
  {
    id: "D5",
    name: "Distributor 5",
    state: "Kerala",
    coordinates: {
      n: 10.85,
      e: 76.27,
    },
  },
  {
    id: "D6",
    name: "Distributor 6",
    state: "Madhya Pradesh",
    coordinates: {
      n: 22.72,
      e: 75.87,
    },
  },
  {
    id: "D7",
    name: "Distributor 7",
    state: "Maharashtra",
    coordinates: {
      n: 19.75,
      e: 75.71,
    },
  },
  //   {
  //     id: "D8",
  //     name: "Distributor 8",
  //     state: "Odisha",
  //     coordinates: {
  //       n: 20.27,
  //       e: 85.84,
  //     },
  //   },
  //   {
  //     id: "D9",
  //     name: "Distributor 9",
  //     state: "Punjab",
  //     coordinates: {
  //       n: 31.63,
  //       e: 74.87,
  //     },
  //   },
  //   {
  //     name: "Distributor 11",
  //     state: "Rajasthan",
  //     coordinates: {
  //       n: 26.91,
  //       e: 75.79,
  //     },
  //   },
  //   {
  //     name: "Distributor 12",
  //     state: "Tamil Nadu",
  //     coordinates: {
  //       n: 13.08,
  //       e: 80.27,
  //     },
  //   },
  //   {
  //     name: "Distributor 13",
  //     state: "Telangana",
  //     coordinates: {
  //       n: 17.38,
  //       e: 78.47,
  //     },
  //   },
  //   {
  //     name: "Distributor 14",
  //     state: "Uttar Pradesh",
  //     coordinates: {
  //       n: 26.84,
  //       e: 80.94,
  //     },
  //   },
  //   {
  //     name: "Distributor 15",
  //     state: "West Bengal",
  //     coordinates: {
  //       n: 22.58,
  //       e: 88.41,
  //     },
  //   },
];

const powerPlants = [
  {
    id: "C0",
    name: "Talcher Thermal Power Station",
    state: "Odisha",
    coordinates: {
      n: 20.9467,
      e: 85.2143,
    },
  },
  {
    id: "C1",
    name: "Mundra Thermal Power Station",
    state: "Gujarat",
    coordinates: {
      n: 22.8512,
      e: 69.7366,
    },
  },
  {
    id: "C2",
    name: "Vindhyachal Thermal Power Station",
    state: "Madhya Pradesh",
    coordinates: {
      n: 24.4655,
      e: 82.9917,
    },
  },
  //   {
  //     name: "Sipat Thermal Power Plant",
  //     state: "Chhattisgarh",
  //     coordinates: {
  //       n: 22.9324,
  //       e: 82.0532,
  //     },
  //   },
  //   {
  //     name: "Kota Super Thermal Power Plant",
  //     state: "Rajasthan",
  //     coordinates: {
  //       n: 25.1723,
  //       e: 75.8496,
  //     },
  //   },
  //   {
  //     name: "Neyveli Thermal Power Station",
  //     state: "Tamil Nadu",
  //     coordinates: {
  //       n: 11.6328,
  //       e: 79.4763,
  //     },
  //   },
  //   {
  //     name: "Korba Super Thermal Power Plant",
  //     state: "Chhattisgarh",
  //     coordinates: {
  //       n: 22.3423,
  //       e: 82.6972,
  //     },
  //   },
  //   {
  //     name: "NTPC Dadri",
  //     state: "Uttar Pradesh",
  //     coordinates: {
  //       n: 28.5774,
  //       e: 77.5516,
  //     },
  //   },
  //   {
  //     name: "Ramagundam Thermal Power Station",
  //     state: "Telangana",
  //     coordinates: {
  //       n: 18.7574,
  //       e: 79.4932,
  //     },
  //   },
  //   {
  //     name: "Simhadri Super Thermal Power Plant",
  //     state: "Andhra Pradesh",
  //     coordinates: {
  //       n: 17.6892,
  //       e: 83.1906,
  //     },
  //   },
  //   {
  //     name: "Rihand Thermal Power Station",
  //     state: "Uttar Pradesh",
  //     coordinates: {
  //       n: 24.1927,
  //       e: 82.973,
  //     },
  //   },
  //   {
  //     name: "Bhadravati Thermal Power Plant",
  //     state: "Karnataka",
  //     coordinates: {
  //       n: 13.6364,
  //       e: 75.7224,
  //     },
  //   },
  //   {
  //     name: "Durgapur Steel Thermal Power Station",
  //     state: "West Bengal",
  //     coordinates: {
  //       n: 23.5539,
  //       e: 87.3339,
  //     },
  //   },
  //   {
  //     name: "Nashik Thermal Power Station",
  //     state: "Maharashtra",
  //     coordinates: {
  //       n: 20.0495,
  //       e: 73.6672,
  //     },
  //   },
  //   {
  //     name: "Kolaghat Thermal Power Station",
  //     state: "West Bengal",
  //     coordinates: {
  //       n: 22.2659,
  //       e: 87.926,
  //     },
  //   },
];

const edges = [
  ["M0", "D0", 2],
  ["M1", "D1", 1],
  ["M1", "D2", 3],
  ["M2", "D2", 2],
  ["M2", "D3", 1],
  ["D0", "D4", 1],
  ["D1", "D5", 2],
  ["D2", "D7", 4],
  ["D3", "D7", 2],
  ["D4", "D6", 3],
  ["D5", "D6", 2],
  ["D6", "C0", 4],
  ["D6", "C1", 3],
  ["D7", "C2", 4],
];

module.exports.coalMines = coalMines;
module.exports.distributorData = distributorData;
module.exports.powerPlants = powerPlants;
module.exports.edges = edges;
