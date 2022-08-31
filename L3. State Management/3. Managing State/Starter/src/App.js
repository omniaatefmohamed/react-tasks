import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [likes, setlikes] = useState(0)
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <button onClick={() => setlikes(likes + 1)}> Like image</button>
      <p>Amount of likes: {likes}</p>
    </div>
  );
};

export default App;
