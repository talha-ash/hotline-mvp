import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import LoginForm from "./loginForm";
import { authOptions } from "../authOptions";
import Link from "next/link";

export default async function Login() {
  const session = await getServerSession(authOptions as unknown as any);

  if (session) {
    redirect("/");
  }

  return (
    <div>
      <LoginForm />
      <Link href={"/signUp"}>
        <h1>Sign Up</h1>
      </Link>
    </div>
  );
}
