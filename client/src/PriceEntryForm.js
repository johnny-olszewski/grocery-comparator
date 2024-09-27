import React, { useState, useEffect } from "react";

function PriceEntryForm() {
  const [date, setDate] = useState("");

  // Get today's date in YYYY-MM-DD format
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Month from 0 to 11
    const dd = String(today.getDate()).padStart(2, "0");
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const [itemName, setItemName] = useState("");
  const [store, setStore] = useState("");
  const [brand, setBrand] = useState("");
  const [isOnSale, setIsOnSale] = useState(false);
  const [price, setPrice] = useState("");

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Enter Grocery Item Price</h1>

      {/* Date Field */}
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Item Name Field */}
      <div className="mb-4">
        <label
          htmlFor="itemName"
          className="block text-sm font-medium text-gray-700"
        >
          Item Name
        </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Store Field */}
      <div className="mb-4">
        <label
          htmlFor="store"
          className="block text-sm font-medium text-gray-700"
        >
          Store
        </label>
        <input
          type="text"
          id="store"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Brand Field */}
      <div className="mb-4">
        <label
          htmlFor="brand"
          className="block text-sm font-medium text-gray-700"
        >
          Brand
        </label>
        <input
          type="text"
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Sale Checkbox */}
      <div className="mb-4">
        <label htmlFor="sale" className="inline-flex items-center">
          <input
            type="checkbox"
            id="sale"
            checked={isOnSale}
            onChange={(e) => setIsOnSale(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-sm text-gray-700">Item is on Sale</span>
        </label>
      </div>

      {/* Price Field */}
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price (in dollars)
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            $
          </span>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => {
              let value = e.target.value.replace(/[^\d]/g, ""); // Only allow digits

              // Prevent the field from starting empty, default to 0
              if (value.length === 0) {
                setPrice("");
                return;
              }

              // Convert value into a floating number with two decimal places
              let formattedValue = (parseFloat(value) / 100).toFixed(2);

              // Remove the leading 0 for better formatting if applicable
              setPrice(formattedValue);
            }}
            className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter price"
          />
          <button
            type="button"
            onClick={() => setPrice("")}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-r-md bg-gray-50 text-gray-500 text-sm hover:bg-gray-100"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </div>
  );
}

export default PriceEntryForm;
