import { useState } from "react";
import type { Expense } from "../types";

interface Props {
  onAddExpense: (expense: Expense) => void;
}

export default function ExpenseForm({ onAddExpense }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || amount <= 0 || !date) return alert("Please fill all fields");

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title,
      amount,
      category,
      date,
    };

    onAddExpense(newExpense);

    // Reset form
    setTitle("");
    setAmount(0);
    setCategory("Food");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
    >
      <h2 className="text-xl font-bold mb-4 text-indigo-700">Add New Expense</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount || ""}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Rent</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
        >
          ➕ Add Expense
        </button>
      </div>
    </form>
  );
}
