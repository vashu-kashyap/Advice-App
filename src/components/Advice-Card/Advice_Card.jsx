import React, { useState, useEffect } from "react";
import "./advice_card.css";

const Advice_Card = () => {
  const [advice, setAdvice] = useState("");
  const [adviceid, setAdviceid] = useState("");

  useEffect(() => {
    // Fetch advice when the component first loads
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((result) => {
        const { advice, id } = result.slip;
        setAdvice(advice);
        setAdviceid(`#${id}`);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  const handleAdvice = () => {
    // Fetch advice when the button is clicked
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((result) => {
        const { advice, id } = result.slip;
        setAdvice(advice);
        setAdviceid(`#${id}`);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  return (
    <div className="advice_card">
      <h1 className="advice-heading">
        Advice <span className="advice_no">{adviceid}</span>
      </h1>
      <p className="advice-para">{advice}</p>
      <div className="divider">
        
      </div>
      <button className="advice-btn" onClick={handleAdvice}>
        <img src="./icon-dice.svg" alt="advice-btn" />
      </button>
    </div>
  );
};

export default Advice_Card;
