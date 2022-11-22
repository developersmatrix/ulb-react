import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Nav from "./Components/Nav/Nav";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Nav />

        {/* <h1>hello</h1>
    //     <Routes>
    //       <Route path="/">home</Route>
    //       <Route path="/misc">misc</Route>
    //     </Routes> */}
      </div>
    </Router>
  );
}

export default App;
