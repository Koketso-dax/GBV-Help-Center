import "./App.css";
import Forum from "./pages/Forum";
import Header from "./pages/Header";
import Login from "./pages/Login";
import SchedulePrivate from "./pages/SchedulePrivate";

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
