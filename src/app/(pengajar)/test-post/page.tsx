"use client";

import React, { useState } from "react";

// Define simplePostFetch outside the component
function simplePostFetch(url: string | URL | Request, data: { topic: string }) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
      throw error;
    });
}

export default function CreateDiscussionForm() {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // URL to your backend endpoint
    const url = "https://thinkmate-backend-production.up.railway.app/v1/quiz";

    // Call the simplePostFetch function with the URL and data
    simplePostFetch(url, { topic })
      .then((data) => {
        console.log("Success:", data);
        // Handle success (e.g., showing a success message, clearing the form, etc.)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (e.g., showing an error message)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="topic">Topic:</label>
      <input type="text" id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
}
