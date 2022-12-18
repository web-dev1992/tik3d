import { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";
import Home from "@components/Home";
const HomePage: NextPage = () => {
  // const router = useRouter();
  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.replace("/user-account/login");
  //   },
  // });
  return (
    <Fragment>
      <Head>
        <title>Tik3d</title>
        <meta name="description" content="tik3d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   if (session) {
//     return { props: session };
//   } else return { props: {} };
// }
export default HomePage;
