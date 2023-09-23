"use client";

import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <>
      <button
        onClick={() =>
          signIn("credentials", {
            username: "lala",
            password: "password",
          })
        }>
        Sign in
      </button>
    </>
  );
}
