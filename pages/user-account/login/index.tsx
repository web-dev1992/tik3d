import Login from "@components/userAccounts/login/Login";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { NextPage } from "next";
import Head from "next/head";
const LoginPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);
  if (!isLoading) {
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
  }
};
export default LoginPage;
