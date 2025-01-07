import React, { useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Chart = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ["Ovqat", "Transport", "O‘yin-kulgi"];

  const handleAddExpense = (event) => {
    event.preventDefault();
    const { category, amount, date } = event.target.elements;
    setExpenses([
      ...expenses,
      {
        category: category.value,
        amount: parseFloat(amount.value),
        date: new Date(date.value),
      },
    ]);
    event.target.reset();
  };

  const getCategoryData = () => {
    return categories.map((cat) => {
      return expenses
        .filter((exp) => exp.category === cat)
        .reduce((sum, exp) => sum + exp.amount, 0);
    });
  };

  const getMonthlyData = (category) => {
    const filteredExpenses = expenses.filter(
      (exp) => exp.category === category
    );
    const monthlyData = {};

    filteredExpenses.forEach((exp) => {
      const month = exp.date.getMonth() + 1;
      monthlyData[month] = (monthlyData[month] || 0) + exp.amount;
    });

    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    return months.map((month) => monthlyData[month] || 0);
  };

  const pieData = {
    labels: categories,
    datasets: [
      {
        data: getCategoryData(),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const lineData = {
    labels: Array.from({ length: 12 }, (_, i) => `${i + 1}-oy`),
    datasets: [
      {
        label: selectedCategory
          ? `${selectedCategory} oylik trendi`
          : "Kategoriya tanlanmagan",
        data: selectedCategory ? getMonthlyData(selectedCategory) : [],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        Dinamik xarajatlar statistikasi
      </h1>
      <form onSubmit={handleAddExpense} className="mb-6">
        <div className="mb-4">
          <label className="block mb-2 font-medium">Kategoriya:</label>
          <select name="category" className="w-full border rounded p-2">
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Miqdor:</label>
          <input
            type="number"
            name="amount"
            className="w-full border rounded p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Sana:</label>
          <input
            type="date"
            name="date"
            className="w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Qo‘shish
        </button>
      </form>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Doira diagramma</h2>
        <Pie data={pieData} onClick={(e, elements) => {
          if (elements.length > 0) {
            const category = pieData.labels[elements[0].index];
            setSelectedCategory(category);
          }
        }} />
      </div>

      {selectedCategory && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">
            {selectedCategory} uchun oylik trend
          </h2>
          <Line data={lineData} />
        </div>
      )}

      <div>
        <h2 className="text-xl font-bold mb-2">Xarajatlar ro‘yxati</h2>
        <ul>
          {expenses.map((exp, idx) => (
            <li key={idx} className="mb-2">
              {exp.category}: {exp.amount} -{" "}
              {exp.date.toLocaleDateString("uz-UZ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chart;
