"use client";

import { graphQLClient } from "@/configs/graphQlRequest";
import { useSession } from "next-auth/react";
// import { RefreshTokenHandler } from "../components/refreshTokenHandler";

const SetTokenComponent = () => {
  const session = useSession();
  console.log(session);

  if (session.status === "authenticated") {
    graphQLClient.setHeader(
      `authorization`,
      `Bearer ${session.data.accessToken}`
    );
  } else {
    graphQLClient.setHeader("authorization", "");
  }
  return null;
};

export default SetTokenComponent;
