import React from "react";
import { Link } from "react-router-dom";
import Header from "../Share/Header/Header";

const Notfound = () => {
  return (
    <div>
      <Header />
      <h1>This is 404 not found</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Notfound;
