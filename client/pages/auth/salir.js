import React, { useEffect } from "react";
import { useRequest } from "../../src/hooks";
import { useRouter } from "next/router";

const Signout = () => {
  const router = useRouter();
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    onSuccess: () => router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Saliendo...</div>;
};

export default Signout;
