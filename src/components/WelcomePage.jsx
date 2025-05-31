import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = ({ setLevelChoice, levelChoice }) => {

  const navigate = useNavigate()

  function handleStartBtn() {
      if(levelChoice === "easy"){
        navigate("/easy-mode");
      } else if(levelChoice === "hard"){
        navigate("/hard-mode")
      } else {
        navigate("/normal-mode");
      };
    };

  return (
    <div className="levels_container">
      <h1>Welcome!</h1>
      <div className="radioBtns">
        <div className="radiobtn">
          <input className="radio-input" type="radio" value="easy" onChange={(e) => setLevelChoice(e.target.value)} name="gamelevel" id="easy" />
          <label htmlFor="easy">Easy</label>
        </div>
        <div className="radiobtn">
          <input className="radio-input" type="radio" value="normal" onChange={(e) => setLevelChoice(e.target.value)} name="gamelevel" id="normal" />
          <label htmlFor="normal">Normal</label>
        </div>
        <div className="radiobtn">
          <input className="radio-input" type="radio" value="hard" onChange={(e) => setLevelChoice(e.target.value)} name="gamelevel" id="hard" />
          <label htmlFor="hard">Hard</label>
        </div>
      </div>
      <button onClick={handleStartBtn} id="startGameBtn">Start Game</button>
    </div>
  );
};

export default WelcomePage;
