import type { Expense } from "../types";


interface Props {
  expense: Expense;
  onDelete: (id: string) => void;
}

export default function ExpenseItem({ expense, onDelete }: Props) {
  const colors: Record<string, string> = {
    Food: "bg-green-100 text-green-700",
    Travel: "bg-blue-100 text-blue-700",
    Shopping: "bg-pink-100 text-pink-700",
    Rent: "bg-yellow-100 text-yellow-700",
    Other: "bg-gray-100 text-gray-700",
  };

  return (
    <li className="flex justify-between items-center bg-white border border-gray-100 shadow-sm rounded-xl p-3 hover:shadow-md transition-all duration-200">
      <div>
        <p className="font-semibold text-gray-800">{expense.title}</p>
        <p className="text-sm text-gray-500">
          {new Date(expense.date).toLocaleDateString("en-IN")}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${colors[expense.category]}`}
        >
          {expense.category}
        </span>
        <p className="font-bold text-indigo-700">₹{expense.amount}</p>
        <button
          onClick={() => onDelete(expense.id)}
          className="text-red-500 hover:text-red-700 font-bold text-lg transition-all"
        >
          ✕
        </button>
      </div>
    </li>
  );
}
