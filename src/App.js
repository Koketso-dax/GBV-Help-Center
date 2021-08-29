import "./App.css";
import Forum from "./pages/Forum";
import Header from "./pages/Header";
import Login from "./pages/Login";
import SchedulePrivate from "./pages/SchedulePrivate";

import {BrowserRouter,
  Switch,
  Route} from "react-router-dom"

function App() {
  const user = "brian";

  return (

    <div className="container">
    <Header/>
    <BrowserRouter>
        <Switch>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/scheduleprivate">
            <SchedulePrivate />
          </Route>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
