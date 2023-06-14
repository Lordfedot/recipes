import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { useAppSelector, useAppDispatch } from "../Redux/Selectors";
import { login } from "../Redux/Operations";
import { reset } from "../Redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
const initialValues = {
  email: "",
  password: "",
};

interface Values {
  email: string;
  password: string;
}
const Login = () => {
  const dispatch = useAppDispatch();
  const { isSuccess, isLoading } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleSubmit = (values: Values) => {
    dispatch(login(values));
    if (isSuccess) {
      dispatch(reset());
      navigate("/home");
    }
  };
  if (isLoading) {
    return (
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    );
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <ul>
          <li>
            <CustomInput name="email" />
          </li>
          <li>
            <CustomInput name="password" />
          </li>
        </ul>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
