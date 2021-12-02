/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { getCurrentUser } from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
const Profile: React.FC = () => {
  const currentUser = getCurrentUser();
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
        <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>

        <p>
          <strong>Id: </strong>
          {currentUser.id}
        </p>

        <p>
          <strong>Email</strong>
          {currentUser.email}
        </p>

        <strong>Authorities: </strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((index: number, role: string) => {
              <li key={index}>{role}</li>;
            })}
        </ul>
      </header>
      <h1>Chao em </h1>{" "}
    </div>
  );
};

export default Profile;
