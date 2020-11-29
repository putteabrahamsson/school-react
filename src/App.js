import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Routes from "./navigation/routes";
import Navigation from "./navigation/index";

function App() {
  const NavigationController = () => {
    return (
      <Router>
        <div className="noMargin">
          <nav className="nav">
            <ul>
              <li>
                <Link to={Routes.HOME}>HOME</Link>
              </li>
              <li>
                <Link to={Routes.ABOUT}>ABOUT</Link>
              </li>
            </ul>
          </nav>
          <Navigation />
        </div>
      </Router>
    );
  };

  return <NavigationController />;
}

export default App;
