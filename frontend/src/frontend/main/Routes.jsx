import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";
import FormUser from "../components/user/FormUser";
import NewUser from "../components/user/NewUser";

export default (props) => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/users" element={<UserCrud />} />
      <Route exact path="/newuser" element={<NewUser />} />
      <Route exact path="/form" element={<FormUser />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
};
