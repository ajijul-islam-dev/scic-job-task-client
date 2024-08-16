import {IconButton } from "@material-tailwind/react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result => {
            console.log(result);
            toast("Logged In")
        })
        .catch(error=>{
          toast.error(error.message)
        })
    }
  return (
    <div className="text-center my-5">
      <IconButton onClick={()=> handleGoogleLogin()} className="rounded bg-white text-2xl shadow- w-full text-center" variant="outlined">
        <FcGoogle />
      </IconButton>
    </div>
  );
};

export default GoogleLogin;
