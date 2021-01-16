import Card from "./Card";
import { connect } from "react-redux";

function Result({
  result,
  inputText,
  pageIndex,
  approvedGender,
  paymentMethod,
}) {
  return (
    <>
      {result
        .filter((el) => {
          return (
            (el.FirstName + el.LastName).includes(inputText) &&
            approvedGender.includes(el.Gender) &&
            paymentMethod.includes(el.PaymentMethod)
          );
        })
        .slice((pageIndex - 1) * 20, 20 * pageIndex)
        .map((el) => (
          <Card
            CreditCardNumber={el.CreditCardNumber}
            key={el.UserName}
            UserName={el.UserName}
            FirstName={el.FirstName}
            LastName={el.LastName}
            Gender={el.Gender}
          />
        ))}
    </>
  );
}
export default connect(
  ({ result, inputText, pageIndex, approvedGender, paymentMethod }) => ({
    result,
    inputText,
    pageIndex,
    approvedGender,
    paymentMethod,
  })
)(Result);
