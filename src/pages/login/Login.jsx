import "./login.scss";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import api from "../../api/posts";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("etibarlı e-poçt ünvanını daxil edin")
    .required("e-poçt qeyd olunmalıdır"),
  password: yup.string().required("şifrə qeyd olunmalıdır"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { setUser } = useAuth();

  const form = useRef();

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (values) => {
    try {
      const response = await api.post("login", values);
      setUser(response?.data);
      if (response) {
        setUser(response?.data);
        navigate("/");
      }
    } catch (error) {
      toast.error("E-poçt və ya parol səhvdir");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: basicSchema,
    onSubmit,
  });

  const { handleSubmit, errors, handleChange, touched, handleBlur, values } =
    formik;

  let pathName = window.location.pathname;

  window.addEventListener("popstate", function () {
    if (pathName == "/account") {
      console.log("asd");
    } else {
      console.log("pomidor");
    }
  });

  return (
    <div className="mainLogin">
      <div className="login">
        <div className="intoLogin">
          <h3>Saraleasing idarə paneli </h3>
          <form noValidate ref={form} onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="email"
                id="email"
                placeholder="E-mail ünvan"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "inputError" : ""}
              />
              {errors.email && touched.email && <small>{errors.email}</small>}
            </div>
            <div className="inputBox">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Şifrə"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "inputError" : ""
                }
              />
              {errors.password && touched.password && (
                <small>{errors.password}</small>
              )}
              <div className="inputEyes" onClick={handleTogglePassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <button type="submit">Daxil ol</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
