import "./App.css";
import Forum from "./Forum";
import Login from "./Login";

function App() {
  const user = null;

  return (
    <div className="app">
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
