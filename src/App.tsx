import { useState, useEffect } from "react";
import type { Expense } from "./types";
import ExpenseForm from "./components/ExpenseForm.tsx";
import ExpenseList from "./components/ExpenseList.tsx";

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // ✅ Load from localStorage when app starts
  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) setExpenses(JSON.parse(saved));
  }, []);

  // ✅ Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-indigo-700 tracking-wide">
        💸 Expense Tracker Pro
      </h1>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      </div>

      <footer className="text-center mt-10 text-sm text-gray-500">
        Built with by Akhil • React + TypeScript + Tailwind
      </footer>
    </div>
  );
}
