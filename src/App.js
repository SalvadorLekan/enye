import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { storeResult } from "./redux/redux";

import "./App.css";
import Pages from "./routes/Page";
import Landing from "./routes/Landing";

function App({ storeResult }) {
  fetch(
    "https://thingproxy.freeboard.io/fetch/http://api.enye.tech/v1/challenge/records"
  )
    .then((data) => data.json())
    .then((data) => storeResult(data.records.profiles));
  return (
    <div className="container mx-auto p-4 text-center">
      <BrowserRouter>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/user/:name" component={Pages} />
      </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  storeResult: (data) => dispatch(storeResult(data)),
});

export default connect(null, mapDispatchToProps)(App);
