import React, { useState } from 'react';// Import Firestore from your firebase.js file
import {firestore} from "../firebase"
import { collection, addDoc } from 'firebase/firestore';  // Firestore functions for adding data
import backdrop from "../assets/Welcome.svg";

const Preregister = () => {
  const [email, setEmail] = useState('');  // State to hold the email input value
   const ref = collection(firestore, "email")
  // Function to handle the button click and send data to Firestore
  const handleSend = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email');
      return;
    }
     let data = {
      Email:email,
      submittedAt: new Date()
     }
    try {
      addDoc(ref, data)
      // Add the email to Firestore
      // const docRef = await addDoc(collection(db, 'submissions'), {
      //   email: email,
      //   submittedAt: new Date(),  // Optional timestamp
      // });

      alert('Thanks for Pre-registering!');
      setEmail(''); // Clear the input field after submission
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error registering your email. Please try again.');
    }
  };

  return (
    <main className="w-full h-[60dvh] flex flex-col justify-end items-center relative">
      <header className="font-bold text-3xl absolute top-3 w-full text-center py-3">
        Төслийн талаарх мэдэгдэл авахыг хүсвэл mail-ээ үлдээнэ үү.
      </header>
      <div className="flex mb-8 z-40">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
          className="outline-none bg-[#faf9f6] border-[1.5px] h-14 border-indigo-500 p-3 px-4 rounded-2xl"
        />
        <button
          onClick={handleSend}
          className="h-14 p-3 px-5 ml-2 rounded-2xl bg-indigo-500 text-[#faf9f6] active:scale-125"
        >
          Илгээх
        </button>
      </div>
      <img src={backdrop} alt="" className="hidden md:block absolute -bottom-3/4 w-full" />
    </main>
  );
};

export default Preregister;
