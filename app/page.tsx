"use client"

import React from "react";
import FeedProdutos from "@/components/feedProdutos";





export default function Home() {
  return (

      <div>
          <FeedProdutos/>
      </div>
  )
}


{/*async function addDataToFireStore(name: string, email: string, message: string) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });
    console.log("Document written with ID: ", docRef.id)
    return true;

  } catch(error) {
    console.error("Error adding document ", error)
    return false;
  }
}

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const added = await addDataToFireStore(name, email, message);
    if (added) {
      setName("");
      setEmail("");
      setMessage("");

      alert("Data added to firestore!")
    }
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg">
        <label>
          Name:
          <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border rounded-md"
              required
          />
        </label>
        <label>
          Email:
          <input
              type="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded-md"
              required
          />
        </label>
        <label>
          Message:
          <textarea
              value={message}
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              className="p-2 border rounded-md text-black"
              required
          />
        </label>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
  );
}
*/}