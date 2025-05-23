import React from "react";
// import { Routes, Route} from "react-router-dom";
// import { useEffect, useState } from "react";
// import Container from "../../pages/Container";
// import Home from "../../pages/Home";
function AppRouter() {
  // const [user, setUser] = useState(false);

  // useEffect(() => {
  //   const isUser = localStorage.getItem("user");
  //   if (isUser) {
  //     setUser(true);
  //   }
  // }, []);
  // console.log("user", user);

  return (
      <Routes>
        <Route path="/" element={ <Container />} />
        <Route path="/collection" element={<Home />} />
      </Routes>
  );
}

export default AppRouter;
