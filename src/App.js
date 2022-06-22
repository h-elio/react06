import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Manual, Policy, Rule, EtcInfo } from "./pages/FooterMenu";
import Notice from "./components/Notice";
import Event from "./components/Event";
import Form from "./components/Form";
import Detail from "./components/Detail";
import { useEffect, useState } from "react";

function App() {
    const title = "site";
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/data/cardData.json")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    // console.log(data);
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
                    <Route path="/form" element={<Form />} />
                    <Route
                        path="/detail/:id"
                        element={<Detail data={data} />}
                    />
                </Routes>

                <Footer title={title} />
            </BrowserRouter>
        </div>
    );
}

export default App;
/* npm i react-router-dom  */
