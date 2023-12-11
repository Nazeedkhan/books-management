import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    logout().then(() => {
      alert("Logout Successful!");
      navigate(from, { replace: true });
    // eslint-disable-next-line no-unused-vars
    }).catch((error)=>{
        //An error occurred
    });
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-700 px-8 py-2 text-white rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
