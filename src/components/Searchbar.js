import { connect } from "react-redux";
import { changeInputText } from "../redux/redux";

function SearchBar({ changeInputText }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        <p>Search User</p>
        <input
          className="px-3 py-2 mr-3"
          type="search"
          name="search"
          id="search"
          onChange={(e) => changeInputText(e.target.value)}
        />
      </label>
      <button className="py-2 px-3 bg-blue-900 text-white" type="submit">
        search user
      </button>
    </form>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    changeInputText: (data) => dispatch(changeInputText(data)),
  };
}
export default connect(null, mapDispatchToProps)(SearchBar);
