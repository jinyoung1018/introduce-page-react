import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark />
      {/* <img src="img/handuLogo.png"></img> */}
    </Link>
  );
};

export default Logo;
