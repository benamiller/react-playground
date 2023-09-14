import logo from "./logo.svg";
import avatar from "./baseline_perm_identity_black_48dp.png";
import "./App.css";

function App() {
  return (
    <figure className="w-56 flex flex-col items-center bg-gray-50 rounded-xl p-8 space-y-2 shadow-xl">
      <div>
        <img src={avatar} />
      </div>
      <h1 className="text-lg font-semibold">Leroy Brown</h1>
      <p className="font-light text-gray-800">(123)-456-7890</p>
      <p className="font-light text-gray-800">LB35@yahoo.com</p>
    </figure>
  );
}

export default App;
