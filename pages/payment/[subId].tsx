import Payment from "@components/payment/Payment";
import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";
import axios from "axios";
import Head from "next/head";
import { ObjectId } from "mongodb";
interface PaymentPageProps {
  subscription?: {
    _id: ObjectId;
    month: number;
    price: number;
    description: string;
    isActive: boolean;
  };
  session: Session;
}
const PaymentPage: NextPage = (props: PaymentPageProps) => {
  const { subscription, session } = props;
  return (
    <div>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Payment subscription={subscription ?? null} userId={session.user.id} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/user-account/login",
        permanent: false,
      },
    };
  }
  const subId = context.query.subId;
  let paymentProps;
  let apiSubscriptionRes;

  try {
    apiSubscriptionRes = await axios(
      `${process.env.domain}/api/subscriptions/${subId}`
    );
    paymentProps = {
      subscription:
        apiSubscriptionRes.data.subscription.length !== 0
          ? apiSubscriptionRes.data.subscription
          : null,
    };
  } catch (err) {
    console.error("err.response.status=====>", err.response.status);
    paymentProps = { subscription: null };
  }

  return { props: { session, ...paymentProps } };
};
export default PaymentPage;
