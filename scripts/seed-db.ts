import db from "../lib/db";

// Transaction categories and descriptions for a retail bank customer
const transactionTypes = [
  // Groceries
  {
    category: "Groceries",
    descriptions: ["Tesco", "Sainsbury's", "Asda", "Waitrose", "Aldi", "Lidl"],
    type: "debit",
    amountRange: [15, 85],
  },

  // Restaurants & Dining
  {
    category: "Dining",
    descriptions: [
      "Nando's",
      "Pizza Express",
      "Costa Coffee",
      "Starbucks",
      "Wagamama",
      "Five Guys",
    ],
    type: "debit",
    amountRange: [8, 45],
  },

  // Transport
  {
    category: "Transport",
    descriptions: [
      "TfL Oyster",
      "Uber",
      "Shell Petrol",
      "BP Fuel",
      "National Rail",
    ],
    type: "debit",
    amountRange: [5, 60],
  },

  // Shopping
  {
    category: "Shopping",
    descriptions: ["Amazon", "ASOS", "Zara", "H&M", "John Lewis", "Argos"],
    type: "debit",
    amountRange: [12, 120],
  },

  // Utilities
  {
    category: "Utilities",
    descriptions: [
      "British Gas",
      "Thames Water",
      "EDF Energy",
      "Sky Broadband",
      "O2 Mobile",
    ],
    type: "debit",
    amountRange: [25, 95],
  },

  // Entertainment
  {
    category: "Entertainment",
    descriptions: ["Netflix", "Spotify", "Amazon Prime", "Vue Cinema", "Odeon"],
    type: "debit",
    amountRange: [8, 35],
  },

  // Salary (monthly credit)
  {
    category: "Salary",
    descriptions: ["Monthly Salary"],
    type: "credit",
    amountRange: [3000, 3000],
  },

  // ATM Withdrawals
  {
    category: "Cash",
    descriptions: ["ATM Withdrawal"],
    type: "debit",
    amountRange: [20, 100],
  },

  // Online Services
  {
    category: "Services",
    descriptions: [
      "Apple.com",
      "Google Storage",
      "Adobe Creative Cloud",
      "Dropbox",
    ],
    type: "debit",
    amountRange: [5, 25],
  },

  // Friend Transfers (credits)
  {
    category: "Transfer",
    descriptions: [
      "Transfer from Sarah M",
      "Transfer from James P",
      "Transfer from Emma L",
      "Transfer from Tom W",
      "Transfer from Rachel K",
      "Transfer from Mike D",
    ],
    type: "credit",
    amountRange: [15, 150],
  },

  // Refunds (credits)
  {
    category: "Refund",
    descriptions: [
      "Refund - Amazon",
      "Refund - ASOS",
      "Refund - Zara",
      "Cashback Reward",
      "Interest Credit",
    ],
    type: "credit",
    amountRange: [8, 75],
  },
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomAmount(min: number, max: number): number {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

function generateTransactions() {
  const transactions: Array<{
    date: string;
    description: string;
    category: string;
    amount: number;
    type: string;
  }> = [];

  // Start from 3 months ago
  const endDate = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 3);

  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    // Generate 5 transactions per day (on average)
    const numTransactions = Math.floor(Math.random() * 3) + 4; // 4-6 transactions

    for (let i = 0; i < numTransactions; i++) {
      const transactionType = getRandomElement(transactionTypes);

      // Skip salary transactions unless it's the 1st of the month
      if (
        transactionType.category === "Salary" &&
        currentDate.getDate() !== 1
      ) {
        continue;
      }

      // Add friend transfers occasionally (about 10% chance)
      if (transactionType.category === "Transfer" && Math.random() > 0.1) {
        continue;
      }

      // Add refunds occasionally (about 5% chance)
      if (transactionType.category === "Refund" && Math.random() > 0.05) {
        continue;
      }

      const description = getRandomElement(transactionType.descriptions);
      const amount = getRandomAmount(
        transactionType.amountRange[0],
        transactionType.amountRange[1]
      );

      transactions.push({
        date: currentDate.toISOString().split("T")[0],
        description,
        category: transactionType.category,
        amount,
        type: transactionType.type,
      });
    }

    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Sort by date (oldest first)
  transactions.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return transactions;
}

// Generate transactions
const transactionsData = generateTransactions();

// Import schema
const { transactions } = await import("../db/schema");
const { sql } = await import("drizzle-orm");

// Clear existing transactions using Drizzle
await db.delete(transactions);

// Insert new transactions using Drizzle
await db.insert(transactions).values(transactionsData);

console.log(`✅ Seeded ${transactionsData.length} transactions`);
console.log(
  `📅 Date range: ${transactionsData[0].date} to ${
    transactionsData[transactionsData.length - 1].date
  }`
);

process.exit(0);
