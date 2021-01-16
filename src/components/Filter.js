import { connect } from "react-redux";
import { changeApprovedGender, changePaymentMethod } from "../redux/redux";

function Filter({ changeApprovedGender, changePaymentMethod }) {
  return (
    <details>
      <summary>filter</summary>
      <label className="flex flex-col items-center py-3">
        <p>Gender</p>
        <p className="hidden md:block">
          Hold down the CTRL or Command button then click to select multiple
          options
        </p>
        <select
          multiple
          name="gg"
          id="gg"
          onChange={(e) => {
            const [a, b, c] = [...e.target.selectedOptions];
            changeApprovedGender(
              [a?.value, b?.value, c?.value].filter(Boolean)
            );
          }}
        >
          <option value="Male" selected>
            Male
          </option>
          <option value="Female" selected>
            Female
          </option>
          <option value="Prefer to skip" selected>
            Prefer to skip
          </option>
        </select>
      </label>

      <label className="flex flex-col items-center py-3">
        <p>Payment Method</p>
        <p className="hidden md:block">
          Hold down the CTRL or Command button then click to select multiple
          options
        </p>
        <select
          multiple
          name="gg"
          id="gg"
          onChange={(e) => {
            const [a, b, c, d] = [...e.target.selectedOptions];
            changePaymentMethod(
              [a?.value, b?.value, c?.value, d?.value].filter(Boolean)
            );
          }}
        >
          <option value="cc" selected>
            CC
          </option>
          <option value="check" selected>
            Check
          </option>
          <option value="money order" selected>
            Money Order
          </option>
          <option value="paypal" selected>
            Paypal
          </option>
        </select>
      </label>
    </details>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    changeApprovedGender: (data) => dispatch(changeApprovedGender(data)),
    changePaymentMethod: (data) => dispatch(changePaymentMethod(data)),
  };
}

export default connect(null, mapDispatchToProps)(Filter);
