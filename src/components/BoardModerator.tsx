/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { getModeratorBoard } from "../services/user.service";

const BoardModerator: React.FC = () => {
  const [content, setContent] = useState<string>("");
  useEffect(() => {
    getModeratorBoard().then(
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
  });
  return (
    <div>
      <h1>{content}</h1>{" "}
    </div>
  );
};

export default BoardModerator;
