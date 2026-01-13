import { FaUserSecret } from "react-icons/fa6";

function DisplayEmployee({
  data,
  approveEmployee,
  rejectEmployee,
  deleteEmployee,
}) {
  return (
    <div className="bg-white border rounded-xl ">
      {/* Header: Icon + Title */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <FaUserSecret className="text-blue-600 text-xl" />
        </div>
        <h2 className="text-lg font-semibold">
          Name : {data.name} 
        </h2>
      </div>

      {/* Details Rows */}
      <div className="space-y-3 text-gray-700">
        {/* Row 1 */}
        <div className="flex justify-between">
          <span>
            <strong>Age:</strong> {data.age}
          </span>
          <span>
            <strong>Gender:</strong> {data.gender}
          </span>
          <span>
            <strong>PostCode:</strong> {data.postcode}
          </span>
        </div>

        {/* Row 2 */}
        <div className="flex justify-between">
          <span>
            <strong>Contact:</strong> {data.contact}
          </span>
          <span>
            <strong>Email:</strong> {data.email}
          </span>
        </div>
        {/* Row 3 */}
        <div className="flex justify-between">
          <span
            className={`font-semibold ${
              data.status === "approved"
                ? "text-green-600"
                : data.status === "rejected"
                ? "text-red-600"
                : "text-yellow-600" // default pending
            }`}
          >
            <strong>Status:</strong> {data.status || "pending"}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        {data.status === "pending" ? (
          <button
            onClick={() => approveEmployee(data.id)}
            className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Approve
          </button>
        ) : (
          <button
            onClick={() => rejectEmployee(data.id)}
            className="flex-1 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Reject
          </button>
        )}
        <button
          onClick={() => deleteEmployee(data.id)}
          className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default DisplayEmployee;
