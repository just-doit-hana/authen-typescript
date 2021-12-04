/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { getUserBoard } from "../services/user.service";
import { useState } from "react";

const BoardUser: React.FC = () => {
  const [content, setContent] = useState<string>("");
  useEffect(() => {
    getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div>
      <h1>{content}</h1>{" "}
    </div>
  );
};

export default BoardUser;
