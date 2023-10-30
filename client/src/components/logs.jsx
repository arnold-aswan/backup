import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function AuthComponent() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  //   const onSubmit = async (actions, values) => {
  //     console.log("Submitted", values, actions);
  //   };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      username: "",
      signupEmail: "",
      signupPassword: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup.string().required("Password is required"),
      firstName: yup.string().required("First Name is required"),
      username: yup.string().required("Username is required"),
      signupEmail: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
      signupPassword: yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      if (values.email && values.password) {
        // alert("Login successful! Redirecting to the main page...");
        console.log(values.email);
        formik.resetForm();
      } else if (
        values.firstName &&
        values.username &&
        values.signupEmail &&
        values.signupPassword
      ) {
        console.log(values);
        formik.resetForm();
        // alert("Account registered successfully. You can now log in.");
      }
    },
  });

  const toggleForm = () => {
    formik.resetForm(); // Reset form when switching between login and signup
    formik.values.email = "";
    formik.values.password = "";
    formik.values.firstName = "";
    formik.values.username = "";
    formik.values.signupEmail = "";
    formik.values.signupPassword = "";

    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="min-h-screen w-screen bg-gray-300 flex justify-center items-center md:p-4">
      <div className="bg-gray-700 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-1/2 p-4 rounded-lg">
        <h1 className="text-2xl font-semibold text-blue-600">
          {isLoginForm ? "Login" : "Sign Up"}
        </h1>
        {isLoginForm ? (
          <form className="text-left" onSubmit={formik.handleSubmit}>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full p-2 border rounded border-blue-200 mb-2 ${
                  formik.errors.email && "border-red-500"
                }`}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Password"
                required
                className={`w-full p-2 border rounded border-blue-200 mb-2 ${
                  formik.errors.password && "border-red-500"
                }`}
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-md py-2 px-4 text-lg font-semibold mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="text-left" onSubmit={formik.handleSubmit}>
            <div className="input-container">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="First Name"
                required
                className={`w-full p-2 border rounded border-blue-200 mb-2 ${
                  formik.errors.firstName && "border-red-500"
                }`}
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="text-red-500">{formik.errors.firstName}</div>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Username"
                required
                className={`w-full p-2 border rounded border-blue-200 mb-2 ${
                  formik.errors.username && "border-red-500"
                }`}
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="text-red-500">{formik.errors.username}</div>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="signup-email">Email</label>
              <input
                type="text"
                name="signup-email"
                value={formik.values.signupEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
                required
                className={`w-full p-2 border rounded border-blue-200 mb-2 ${
                  formik.errors.signupEmail && "border-red-500"
                }`}
                {...formik.getFieldProps("signupEmail")}
              />
              {formik.touched.signupEmail && formik.errors.signupEmail && (
                <div className="text-red-500">{formik.errors.signupEmail}</div>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                name="signup-password"
                value={formik.values.signupPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Password"
                required
                className={`w-full p-2 border rounded border-blue-200 mb-2 ${
                  formik.errors.signupPassword && "border-red-500"
                }`}
                {...formik.getFieldProps("signupPassword")}
              />
              {formik.touched.signupPassword &&
                formik.errors.signupPassword && (
                  <div className="text-red-500">
                    {formik.errors.signupPassword}
                  </div>
                )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-md py-2 px-4 text-lg font-semibold mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Sign Up
            </button>
          </form>
        )}
        <p>
          {isLoginForm
            ? "Don't have an account? "
            : "Already have an account? "}
          <span className="text-blue-600 cursor-pointer" onClick={toggleForm}>
            Sign
            {isLoginForm ? "up" : "in"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthComponent;
