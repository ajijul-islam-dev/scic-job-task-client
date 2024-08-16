import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { signOut, updateProfile } from "firebase/auth";
import Auth from "../../firebase/firebase.config";

export default function Register() {
  const { createUserWithEmail } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    await createUserWithEmail(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => {
            signOut(Auth)
              .then((result) => {
                toast.success("Account created successfully");
              })
              .catch((error) => {
                toast.error(error.message);
              });
            navigate("/login");
          })
          .catch((error) => {
            toast.error(error.message); // Fixed typo here
          });
      })
      .catch((error) => {
        toast.error(error.message); // Fixed typo here
      });
  };

  return (
    <Card
      className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
      color="transparent"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Register Account
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form onSubmit={(e) => handleRegister(e)}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            name="name"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            name="email"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            name="password"
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type="submit" className="mt-6" fullWidth>
          Register Account
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-gray-900">
            Login
          </Link>
          <GoogleLogin />
        </Typography>
      </form>
    </Card>
  );
}
