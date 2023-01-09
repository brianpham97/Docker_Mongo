import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getFriends = async () => {
    let data = await axios.get("http://localhost:8080/friends");
    setFriends(data.data);
    setLoaded(true);
  };

  const loadFriends = () => {
    if (loaded === false) {
      console.log("clicked");
      axios.post("http://localhost:8080/friends", {}).then(() => {
        getFriends();
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={loadFriends}>Load Friends</p>
        {friends.map((friend) => (
          <p>{friend.name}</p>
        ))}
      </header>
    </div>
  );
};

export default App;
