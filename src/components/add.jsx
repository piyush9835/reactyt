import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Add({ items, setItems }) {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const addItem = (e) => {
    e.preventDefault();
    if (!value) return;

    setItems([...items, value]);
    navigate("/list");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={addItem} className="bg-white p-6 rounded-2xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Add Item</h2>

        <input
  type="text"
  placeholder="Enter item"
  className="w-full mb-4 p-2 border rounded bg-white text-black placeholder-gray-500"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Save
        </button>

        <button
          type="button"
          onClick={() => navigate("/list")}
          className="w-full mt-2 border py-2 rounded"
        >
          Back
        </button>
      </form>
    </div>
  );
}
