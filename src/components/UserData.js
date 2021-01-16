import Male from "../assets/male.png";
import Female from "../assets/female.png";
import Neutral from "../assets/neutral.png";

function UserData(props) {
  let image =
    props.Gender === "Male"
      ? Male
      : props.Gender === "Female"
      ? Female
      : Neutral;
  return (
    <div className="border-gray-900 border-2 p-2">
      <img className="w-1/12 ml-auto mr-2" src={image} alt={props.Gender} />
      <div className="data-sub">
        <div className="sub">{props.FirstName}</div>
        <div className="sub">{props.LastName}</div>
      </div>
      <div className="data-sub">
        <div className="sub">{props.Email}</div>
        <div className="sub">{props.UserName}</div>
      </div>
      <div className="data-sub">
        <div className="sub">{props.URL}</div>
        <div className="sub">{props.DomainName}</div>
      </div>
      <div className="data-sub">
        <div className="sub">{props.MacAddress}</div>
        <div className="sub">{props.PhoneNumber}</div>
      </div>
      <div className="data-sub">
        <div className="sub">{props.LastLogin}</div>
        <div className="sub">{props.PaymentMethod}</div>
      </div>
      <div className="data-sub">
        <div className="sub">{props.CreditCardNumber}</div>
        <div className="sub">{props.CreditCardType}</div>
      </div>
      <div className="data-sub">
        <div className="sub">{props.Longitude}</div>
        <div className="sub">{props.Latitude}</div>
      </div>
      <button className="print-button" onClick={window.print}>
        print
      </button>
    </div>
  );
}

export default UserData;
