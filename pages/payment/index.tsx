import Payment from "@components/payment/Payment";
import { NextPage } from "next";
import Head from "next/head";
const PaymentPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>     
      <Payment/>
    </div>
  );
};
export default PaymentPage;