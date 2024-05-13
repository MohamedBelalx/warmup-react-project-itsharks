import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function Logout() {
  const navigate = useNavigate();
  const handleClick = () => {
    Cookies.remove("access_token");
    navigate("/login");
  };
  return (
    <>
      <Button label="Logout" onClick={handleClick} />
    </>
  );
}

export default Logout;
