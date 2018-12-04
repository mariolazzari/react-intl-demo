import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import "./App.css";
import Home from "./Home";
import messages from "./messages";

class App extends Component {
  state = {
    lang: "en",
    locale: "en"
  };
  handleChangeLanguage = lang => this.setState({ lang });

  render() {
    return (
      <IntlProvider
        messages={messages[this.state.lang]}
        locale={this.state.locale}
      >
        <div className="App">
          <header>
            <button onClick={() => this.handleChangeLanguage("it")}> IT</button>
            <button onClick={() => this.handleChangeLanguage("en")}> EN</button>
            <button onClick={() => this.handleChangeLanguage("es")}>ES</button>
          </header>
          <Home />
        </div>
      </IntlProvider>
    );
  }
}

export default App;
