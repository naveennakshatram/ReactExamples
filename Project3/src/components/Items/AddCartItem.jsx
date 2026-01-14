import { useState } from "react";

function AddCartItem({newItem,cartItems}) {
  
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  function addProductToCart() {
    if (!productName || !productPrice || !productImage) {
      return alert("Please fill all fields!");
    }
 
    newItem({
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      image: productImage,
    });

    
    // Reset form
    setProductName("");
    setProductPrice("");
    setProductImage("");
  }

  return (
    <>
      <div className="p-8 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6">Add Items to Cart</h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={productName}
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            value={productPrice}
            placeholder="Product Price"
            min={100}
            onChange={(e) => setProductPrice(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Product Image URL"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            className="border p-2 rounded"
          />

          {productImage && (
            <img
              src={productImage}
              alt="Preview"
              className="w-40 h-40 flex object-cover rounded-lg mt-2"
              onError={(e) => (e.target.style.display = "none")} // hide if invalid URL
            />
          )}

          <button
            onClick={addProductToCart}
            className="bg-amber-300 px-4 py-2 rounded hover:bg-amber-400 transition-colors duration-200"
          >
            Add Item
          </button>
        </div>
        {/* Show added cart items */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-2">Current Cart Items</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 items-center mb-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
              onError={(e) => (e.target.style.display = "none")}
            />
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default AddCartItem;
