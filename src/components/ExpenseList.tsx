import type { Expense } from "../types";
import ExpenseItem from "./ExpenseItem";


interface Props {
  expenses: Expense[];
  onDeleteExpense: (id: string) => void;
}

export default function ExpenseList({ expenses, onDeleteExpense }: Props) {
  if (expenses.length === 0)
    return (
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-200 text-center text-gray-600">
        No expenses yet 🪙
      </div>
    );

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-indigo-700">Expense History</h2>
        <span className="text-lg font-semibold text-indigo-800">
          Total: ₹{total.toLocaleString("en-IN")}
        </span>
      </div>

      <ul className="space-y-3 max-h-[400px] overflow-y-auto">
        {expenses.map((exp) => (
          <ExpenseItem key={exp.id} expense={exp} onDelete={onDeleteExpense} />
        ))}
      </ul>
    </div>
  );
}
