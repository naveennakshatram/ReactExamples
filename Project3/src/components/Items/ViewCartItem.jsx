
function ViewCartItem({cartItems}) {
  
  return (
    <>
      <div className="p-8 flex flex-col gap-4">
        <h1 className="text-8xl font-bold mb-4 text-blue-600">
          View Cart Items
        </h1>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border p-4 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <span className="font-bold text-6xl">{item.name}</span>
              <span className="text-gray-600 text-4xl">${item.price}</span>
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-amber-300 text-black px-4 py-2 rounded hover:bg-amber-400 transition-colors duration-200">
                Update
              </button>

              <button className="bg-red-400 text-black px-4 py-2 rounded hover:bg-red-500 transition-colors duration-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ViewCartItem;
