import React from "react";
import buildClient from "../api/buildClient";

const Index = ({ currentUser }) => {
  return currentUser ? (
    <div>You're Signed in</div>
  ) : (
    <div>You're not signed in</div>
  );
};

Index.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default Index;
