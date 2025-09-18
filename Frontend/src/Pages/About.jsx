import React, { useEffect, useState } from "react";

const About = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hello`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data from backend", error);
      });
    console.log(message);
  }, []);

  return (
    <>
      <div className="pt-30 text-center">
        <h1 className="text-2xl ">This message is coming from the backend </h1>
        <div>Backend says : {message}</div>
      </div>
    </>
  );
};

export default About;
