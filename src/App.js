import logo from "./logo.svg";
import "./App.css";

function App() {
  const user = null;

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Forum />
        </>
      )}
    </div>
  );
}

export default App;
