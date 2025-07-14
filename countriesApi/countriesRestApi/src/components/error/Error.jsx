import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong.....please try again</h1>
      <p>Error:{error.status}</p>
    </div>
  );
};

export default Error;
