import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Avatar";
const homerProfile = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2375-hand-sticker.png",
  firstName: "Homer",
  lastName: "Simpson",
};
const lisaProfile = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Lisa",
  lastName: "Simpson",
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar {...homerProfile} />
        <Avatar {...lisaProfile} />
      </header>
    </div>
  );
}

export default App;
