import Male from "../assets/male.png";
import Female from "../assets/female.png";
import Neutral from "../assets/neutral.png";
import jcb from "../assets/jcb.png";
import { useHistory, Link } from "react-router-dom";
export default function Card({
  FirstName,
  LastName,
  Gender,
  UserName,
  CreditCardNumber,
}) {
  const history = useHistory();
  let image = Gender === "Male" ? Male : Gender === "Female" ? Female : Neutral;
  return (
    <div
      className="bg-opacity-20 shadow-xl p-7 m-7 bg-blue-600 rounded-3xl max-w-xl mx-auto cursor-pointer"
      onClick={() => history.push(`/user/${UserName}`)}
    >
      <div className="flex justify-between items-center">
        <img src={jcb} alt="jcb" className="w-1/6" />
        <img className="w-1/6" src={image} alt={Gender} />
      </div>
      <div className="w-10/12 p-4 mx-auto text-center font-mono sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {CreditCardNumber.split("").map((el, id) =>
          (id + 1) % 4 ? el : el + " "
        )}
      </div>
      <div className="flex items-center">
        <div className="flex-grow md:text-lg lg:text-xl xl:text-2xl text-left">
          {LastName + " " + FirstName}
        </div>
        <Link to={`/user/${UserName}`} onClick={(e) => e.stopPropagation()}>
          See full details
        </Link>
      </div>
    </div>
  );
}
