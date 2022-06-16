import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
// import Review from "./components/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Manual, Policy, Rule, EtcInfo } from "./pages/FooterMenu";
import Notice from "./components/Notice";
import Event from "./components/Event";

function App() {
    const title = "site";
    return (
        <div className="App">
            <BrowserRouter>
                <Header title={title} />

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cardList" element={<CardList />} />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/manual" element={<Manual />} />
                    <Route path="/rule" element={<Rule />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="/etcInfo" element={<EtcInfo />} />
                    <Route path="/event" element={<Event />} />
                </Routes>

                <Footer title={title} />
            </BrowserRouter>
        </div>
    );
}

export default App;
/* npm i react-router-dom  */
