import { useNavigate } from "react-router-dom";

export default function List({ items, setItems }) {
  const navigate = useNavigate();

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">List Page</h1>

        <button
          onClick={() => navigate("/add")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </div>

      {items.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between bg-gray-100 p-3 rounded"
            >
              <span>{item}</span>

              <button
                onClick={() => deleteItem(index)}
                className="text-red-600 font-semibold"
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
