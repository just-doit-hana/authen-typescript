// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useState } from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { login } from "../services/auth.service";
// import { RouteComponentProps } from "react-router-dom";


// interface RouterProps {
//   history: string;
// }

// type Props = RouteComponentProps<RouterProps>;

// const Login: React.FC<Props> = ({ history }) => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [message, setMessage] = useState<string>("");
//   const initialValues: {
//     username: string;
//     password: string;
//   } = {
//     username: "",
//     password: "",
//   };
//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required("This  field is required"),
//     password: Yup.string().required("This is required"),
//   });
//   const handleLogin = (formValue: { username: string; password: string }) => {
//     const { username, password } = formValue;

//     setMessage("");
//     setLoading(true);

//     login(username, password).then(
//       () => {
//         history.push("/profile");
//         window.location.reload();
//       },
//       (error) => {
//         const resMessage =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         setLoading(false);
//         setMessage(resMessage);
//       }
//     );
//   };
//   return (
//     <div className="col-md-12">
//       <div className="card card-container">
//         <img
//           src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//           alt="profile-img"
//           className="profile-img-card"
//         />
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleLogin}
//         >
//           <Form>
//             <div className="form-group">
//               <label htmlFor="username">UserName</label>
//               <Field name="username" type="text" className="form-control" />
//               <ErrorMessage
//                 name="username"
//                 component="div"
//                 className="alert alert-danger"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="">Password</label>
//               <Field name="password" type="password" className="form-control" />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="alert alert-danger"
//               />
//             </div>
//             <div className="form-group">
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-block"
//                 disabled
//               >
//                 {loading && (
//                   <span className="spinner-border spinner-border-sm"></span>
//                 )}
//                 <span>Login</span>
//               </button>
//             </div>
//             {message && (
//               <div className="form-group">
//                 <div className="alert alert-danger" role="alert">
//                   {message}{" "}
//                 </div>
//               </div>
//             )}
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from "react";

const Login: React.FC = () => {
  return (
    <div>
      <h1>Chao em </h1>{" "}
    </div>
  );
};

export default Login;

