import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import "./App.css";
import Home from "./Home";
import About from "./About";

// languages
import it from "./locales/it.json";
import en from "./locales/en.json";
import es from "./locales/es.json";

// messages
const messages = {
  it,
  en,
  es
};

class App extends Component {
  state = {
    lang: "en",
    locale: "en"
  };

  // switch locales
  handleChangeLanguage = lang => this.setState({ lang });

  render() {
    const { lang, locale } = this.state;

    return (
      <IntlProvider messages={messages[lang]} locale={locale}>
        <div className="App">
          <header>
            <button onClick={() => this.handleChangeLanguage("it")}>IT</button>
            <button onClick={() => this.handleChangeLanguage("en")}>EN</button>
            <button onClick={() => this.handleChangeLanguage("es")}>ES</button>
          </header>
          <Home />
          <About />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
