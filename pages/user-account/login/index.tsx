import Login from "@components/userAccounts/login/Login";
import { NextPage } from "next";
import Head from "next/head";
const SignupPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
};
export default SignupPage;
