"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Trash2 } from "lucide-react";
import EditTransactionModal from "./EditTransactionModal";

// Consistent date formatting to avoid hydration mismatch
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "debit" | "credit";
  balance: number;
}

interface TransactionRowProps {
  transaction: Transaction;
}

export default function TransactionRow({ transaction }: TransactionRowProps) {
  const router = useRouter();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this transaction?")) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch(`/api/transactions/${transaction.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.refresh(); // Refresh the page data
      } else {
        alert("Failed to delete transaction");
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
      alert("Error deleting transaction");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <tr
        className={`hover:bg-gray-50 ${
          transaction.type === "credit" ? "bg-gray-100" : ""
        }`}
      >
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
          {formatDate(transaction.date)}
        </td>
        <td className="px-6 py-4 text-sm text-gray-900">
          {transaction.description}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
          <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
            {transaction.category}
          </span>
        </td>
        <td
          className={`whitespace-nowrap px-6 py-4 text-right text-sm font-medium ${
            transaction.type === "credit" ? "text-green-600" : "text-red-600"
          }`}
        >
          {transaction.type === "credit" ? "+" : "-"}£
          {transaction.amount.toFixed(2)}
        </td>
        <td
          className={`whitespace-nowrap px-6 py-4 text-right text-sm font-semibold ${
            transaction.balance >= 0 ? "text-gray-900" : "text-red-600"
          }`}
        >
          £{transaction.balance.toFixed(2)}
        </td>
        <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="rounded p-1 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              title="Edit transaction"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="rounded p-1 text-red-600 hover:bg-red-50 hover:text-red-700 disabled:opacity-50"
              title="Delete transaction"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </td>
      </tr>

      <EditTransactionModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        transaction={transaction}
      />
    </>
  );
}
