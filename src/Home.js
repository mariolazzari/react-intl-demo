import React from "react";
import { FormattedMessage } from "react-intl";

const Home = () => (
  <div>
    <h1>
      <FormattedMessage id="home.greeting" defaultMessage="Hello World!" />
    </h1>
  </div>
);

export default Home;
