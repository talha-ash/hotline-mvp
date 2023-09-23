import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SignUpForm from "./signUpForm";
import { authOptions } from "../authOptions";
import Link from "next/link";

export default async function Login() {
  const session = await getServerSession(authOptions as unknown as any);

  if (session) {
    redirect("/");
  }

  return (
    <div>
      <SignUpForm />
      <Link href={"/login"}>
        <h1>Login</h1>
      </Link>
    </div>
  );
}
