import Signup from "@components/userAccounts/signup/Signup";
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
      <Signup />
    </div>
  );
};
export default SignupPage;
