import { NextPage } from "next";
import { Fragment } from "react";
import { GetServerSideProps } from "next/types";
import Head from "next/head";
import VerificationForm from "@components/userAccounts/signup/VerificationForm";

interface UserVerificationPageProps {
  signupMethod: string;
  destination: string | number;
}
const UserVerificationPage: NextPage = (props: UserVerificationPageProps) => {
  const { signupMethod, destination } = props;
  return (
    <Fragment>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VerificationForm signupMethod={signupMethod} destination={destination} />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let destination = context.query.destination;

  let signupMethod = "email";

  if (!destination.includes("@")) {
    signupMethod = "phone";
  }

  return {
    props: {
      signupMethod,
      destination,
    },
  };
};
export default UserVerificationPage;
