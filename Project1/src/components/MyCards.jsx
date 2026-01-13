import { useState } from "react";
import { FaUserSecret } from "react-icons/fa6";

function MyCards({newEmp}) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");

  const onMyCardSubmit = () => {   
    if(!name.trim() || !age.trim() || !contact.trim() || !email.trim() || !postcode.trim()) 
    {
      return alert("Fields are empty! Please fill all fields.");
    }

    newEmp({
      id: Date.now(),name,age,gender,contact,email,postcode,status:"pending"
    })
    setName("");
    setAge("");
    setGender("");
    setContact("");
    setEmail("");
    setPostcode("");
  }

  return (
    <div className="flex-1 bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Personal Details</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="border rounded px-3 py-2 w-full"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          className="border rounded px-3 py-2 w-full"
          onChange={(e) => setAge(e.target.value)}
        />

        <select className="border rounded px-3 py-2 w-full"
        onChange={(e)=> setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          type="tel"
          placeholder="Contact Number"
          value={contact}
          onChange={(e)=>setContact(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />

        <input
          type="text"
          placeholder="Postcode"
          value={postcode}
          onChange={(e)=> setPostcode(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />

        <button 
        onClick={onMyCardSubmit}
        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
          <FaUserSecret className="text-lg" />
          <span class="text-2xl text-amber-400">Submit</span>
        </button>
      </div>
    </div>
  );
}

export default MyCards;
