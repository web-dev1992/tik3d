import Dashboard from "@components/dashboard/Dashboard";
import { NextPage } from "next";
import Head from "next/head";
const DashboardPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>     
      <Dashboard/>
    </div>
  );
};
export default DashboardPage;