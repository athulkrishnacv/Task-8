import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Place from "./components/screens/includes/Place";
import Header from "./components/screens/includes/Header";
import Places from "./components/screens/includes/Places";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Places />} />
                <Route element={<Place />} path="/Place/:id" />
            </Routes>
        </Router>
    );
}

export default App;
