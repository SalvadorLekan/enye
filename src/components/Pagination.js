import { connect } from "react-redux";
import { changePageIndex } from "../redux/redux";

function Pagination({
  changePageIndex,
  pageIndex,
  result,
  inputText,
  approvedGender,
  paymentMethod,
}) {
  let pagination = [];
  for (
    let i = 1;
    i <=
    Math.ceil(
      result.filter((el) => {
        return (
          (el.FirstName + el.LastName).includes(inputText) &&
          approvedGender.includes(el.Gender) &&
          paymentMethod.includes(el.PaymentMethod)
        );
      }).length / 20
    );
    i++
  ) {
    let styling =
      pageIndex === i
        ? "bg-blue-900 text-blue-400"
        : " bg-blue-400 text-blue-900";
    pagination.push(
      <a
        className={`${styling} py-2 px-4 mx-1.5 border-gray-400`}
        href="/#"
        key={i}
        onClick={() => changePageIndex(i)}
      >
        {i}
      </a>
    );
  }
  return (
    <div className="flex flex-wrap justify-center items-center">
      {pagination}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    result: state.result,
    pageIndex: state.pageIndex,
    inputText: state.inputText,
    approvedGender: state.approvedGender,
    paymentMethod: state.paymentMethod,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePageIndex: (data) => dispatch(changePageIndex(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
