import "./App.css";
import Forum from "./Forum";
import Header from "./Header";
import Login from "./Login";
import SchedulePrivate from "./SchedulePrivate";

function App() {
  const user = "brian";

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <Forum />
        </>
      )}
    </div>
  );
}

export default App;
