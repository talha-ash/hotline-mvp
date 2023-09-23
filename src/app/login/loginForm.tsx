"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() =>
          signIn("credentials", {
            username: "lala",
            password: "password1",
            redirect: false,
          }).then((resp: any) => {
            if (resp.error) {
              alert("Wrong Credentials");
            } else {
              router.push("/");
            }
          })
        }
      >
        Sign in
      </button>
    </>
  );
}
