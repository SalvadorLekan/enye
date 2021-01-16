import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import Result from "../components/Result";
import Searchbar from "../components/Searchbar";

function Landing() {
  return (
    <>
      <Searchbar />
      <Filter />
      <Pagination />
      <Result />
      <Pagination />
    </>
  );
}
export default Landing;
