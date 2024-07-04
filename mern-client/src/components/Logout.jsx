import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const Logout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Sign-out successful");
        navigate(from, { replace: true });
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-700 px-4 py-2 text-white rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
      Logout
    </div>
  );
};

export default Logout;
