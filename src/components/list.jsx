import { useNavigate } from "react-router-dom";

export default function List({ items, setItems }) {
  const navigate = useNavigate();

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="p-6 min-h-screen bg-[#111] text-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold underline">
          List Page
        </h1>

        <button
          onClick={() => navigate("/add")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          Add Item
        </button>
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <p className="text-gray-400">No items added yet.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-800 p-3 rounded"
            >
              <span className="text-white">{item}</span>

              <button
                onClick={() => deleteItem(index)}
                className="text-red-500 hover:text-red-400 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
