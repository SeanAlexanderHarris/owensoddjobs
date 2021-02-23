import { useState } from "react";

export default function useContact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function submitContact(event, values) {
    event.preventDefault();

    // gather all the data
    const formValuesDto = {
      name: values.name,
      emailAddress: values.email,
      message: values.message,
      contactNumber: values.contactNumber,
      mapleSyrup: values.mapleSyrup,
    };

    // 4. Send this data to the serverless function when they check out
    const res = await fetch(`/.netlify/functions/contactBealth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValuesDto),
    });

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      console.log("It didn't work..");
      setSent(false);
      setError(true);
    } else {
      console.log("It worked..");
      setSent(true);
    }
  }

  return {
    sent,
    error,
    submitContact,
  };
}
