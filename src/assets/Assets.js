import axios from "axios";
import React, { useState, useEffect } from "react";
import clarusLogo from "../assets/cw.svg";
import "./Assets.css";

const Assets = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    setCard(data.results);
  };

  return (
    <div>
      <span>
        <img src={clarusLogo} alt="claruswayLogo" />
      </span>
      {card.length > 0 && (
        <div className="card-container">
          <nav>
            <img src={card[0].picture.large} alt="" />
          </nav>
        </div>
      )}
    </div>
  );
};

export default Assets;
