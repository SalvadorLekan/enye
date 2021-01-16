import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import UserData from "../components/UserData";

function Page({ result }) {
  let history = useHistory();
  let username = history.location.pathname.split("/")[2];
  let [userDetails] = result.filter((user) => user.UserName === username);
  return <section>{<UserData {...userDetails} />}</section>;
}

function mapStateToProps(state) {
  return { result: state.result };
}

export default connect(mapStateToProps)(Page);
