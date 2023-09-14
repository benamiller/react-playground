import logo from "./logo.svg";
import avatar from "./baseline_perm_identity_black_48dp.png";
import "./App.css";

function App() {
  return (
    <figure>
      <div>
        <img src={avatar} />
      </div>
      <h1>Leroy Brown</h1>
      <p>(123)-456-7890</p>
      <p>LB35@yahoo.com</p>
    </figure>
  );
}

export default App;
