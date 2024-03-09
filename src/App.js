import "./App.scss";
import "@fontsource/poppins"; // Defaults to weight 400
import { HashRouter, Routes, Route } from "react-router-dom";
import FilmPage from "./pages/FilmPage/FilmPage";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import English from "./lang/en.json";
import Spanish from "./lang/es.json";
import { IntlProvider } from "react-intl";
import { createContext, useEffect, useState } from "react";

export const LanguageSelector = createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);

  return (
    <div className="app">
      <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/film/:filmId" element={<FilmPage></FilmPage>}></Route>
              <Route path="/quiz" element={<QuizPage></QuizPage>}></Route>
            </Routes>
          </HashRouter>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div>
  );
}

export default App;
