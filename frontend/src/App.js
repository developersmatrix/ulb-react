import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    // <Router>
    //   <div className={styles.App}>
    //     <Navbar />
    //     {/* <h1>hello</h1>
    //     <Routes>
    //       <Route path="/">home</Route>
    //       <Route path="/misc">misc</Route>
    //     </Routes> */}
    //   </div>
    // </Router>
    <Navbar />
  );
}

export default App;
