import { useState, Fragment, useCallback, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { signOut } from "next-auth/react";
import UserInfoBox from "./UserInfoBox";
import HamburgerMenu from "@components/dashboard/ui/HamburgerMenu";
import DashboardContent from "../dashboards/DashboardContent";
import DashboardHeader from "@components/layout/DashboardHeader";
import ExitIcon from "@components/ui/ExitIcon";
import SettingIcon from "@components/ui/SettingIcon";
import SubscriptionContent from "../subscriptions/SubscriptionContent";
import PaymentContent from "../payments/PaymentContent";
import ProfileContent from "../profile/ProfileContent";
import SelectContentBox from "./SelectContentBox";
import { ObjectId } from "mongodb";
import persianDate from "helper/persianDate";
import { Session } from "next-auth";
import { useSubContext } from "store/subContext";
const menuItems = [
  { label: "صفحه نخست", href: "/" },
  { label: "دانلود رایگان", href: "/downloads" },
  { label: "محصولات", href: "/products" },
  { label: "تماس با ما", href: "/contact-us" },
  { label: "درباره ما", href: "/about-us" },
];

const Dashboard: React.FC<{ session: Session }> = ({ session }) => {
  const subCtx = useSubContext();
  const userId = new ObjectId(session.user.id);
  const Dummy_user_info = {
    id: userId,
    name: "",
    family: "",
    email: session.user.email,
    isSpecialUser: false,
    image: "/images/dashboard-user-image.png",
  };
  const [content, setContent] = useState("dashboard");
  const [loadedUser, setLoadedUser] = useState<{
    _id: ObjectId;
    firstName: string;
    lastName: string;
    gender: boolean;
    email: string;
    phone: number;
    image: string;
    password: string;
    isActive: boolean;
    isSpecialUser: boolean;
  }>(null);
  const [payments, setPayments] = useState<
    {
      _id: ObjectId;
      subId: string;
      userId: string;
      amount: number;
      paid: number;
      discount: number;
      description: string;
      active: boolean;
      payStatus: string;
      startAt: Date;
      endAt: Date;
    }[]
  >([]);
  const [faExpireDate, setFaExpireDate] = useState<string[]>([]);
  const [expireDate, setExpireDate] = useState<Date>(null);

  const [subscriptions, setSubscriptions] = useState<
    {
      _id: ObjectId;
      month: number;
      price: number;
      discountedPrice?: number;
      description: string;
      isActive: boolean;
    }[]
  >(null);

  const changeContentHandler = (state: string) => {
    setContent(state);
  };
  const changeLodedUserHandler = (newUserInfo) => {
    setLoadedUser({ ...loadedUser, ...newUserInfo });
  };
  const logOutHandler = () => {
    signOut({ callbackUrl: "/" });
    subCtx.removeSubHandler();
  };
  const discountHandler = async (code: string) => {
    try {
      const userDiscount = await axios(
        `/api/discounts/userDiscounts/${userId}/${code}`
      );
      if (
        userDiscount.status === 201 &&
        userDiscount.data.hasDiscountUsed === true
      ) {
        Swal.fire({
          title: "خطا",
          text: "شما قبلا از این کد تخفیف استفاده کرده اید!",
          icon: "error",
          confirmButtonText: "فهمیدم!",
        });

        return;
      } else if (
        userDiscount.status === 201 &&
        userDiscount.data.hasDiscountUsed === false
      ) {
        const result = await axios(`/api/discounts/${code}`);
        if (result.status === 201) {
          setSubscriptions((prevSubs) => {
            return prevSubs.map((sub) => {
              return {
                ...sub,
                discountedPrice:
                  sub.price - (result.data.discount.percent * sub.price) / 100,
              };
            });
          });
        }
      }
    } catch (err) {
      if (err.response.status === 404) {
        Swal.fire({
          title: "خطا",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "فهمیدم!",
        });
      } else
        Swal.fire({
          title: "خطا",
          text: err.message || "خطایی بوجود آمده است.",
          icon: "error",
          confirmButtonText: "فهمیدم!",
        });
    }
  };
  const getPaymentsHandler = useCallback(async () => {
    try {
      const result = await axios(`/api/payments/${userId}`);
      setPayments(result.data.payments);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const getUserHandler = useCallback(async () => {
    try {
      const result = await axios("/api/user/get-user");
      setLoadedUser({ ...result.data.user, isSpecialUser: subCtx.hasSub });
    } catch (err) {
      console.log(err);
    }
  }, []);
  const getSubscriptionsHandler = useCallback(async () => {
    try {
      const result = await axios("/api/subscriptions");
      setSubscriptions(result.data.subscriptions);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const getUserSubscriptionHandler = useCallback(async () => {
    try {
      let result = await axios(`/api/payments/get-active-payment/${userId}`);
      setExpireDate(result.data.payment.endAt);
      setFaExpireDate(
        persianDate(result.data.payment.endAt).toString().split("/")
      );
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    getUserHandler();
    getUserSubscriptionHandler();
    getSubscriptionsHandler();
    getPaymentsHandler();
  }, [
    getUserHandler,
    getSubscriptionsHandler,
    getPaymentsHandler,
    getUserSubscriptionHandler,
  ]);
  return (
    <Fragment>
      <div className="z-0 w-screen  h-max bg-abi  relative overflow-hidden flex justify-center ">
        {/* start background linear gradients divs */}
        <div className="z-10 absolute rounded-full w-[759px] h-[752px] lg:w-[591px] lg:h-[667px] xl:w-[951px] xl:h-[1073px] left-[52px] -top-[409px] lg:left-[836px] lg:-top-[285] xl:left-[1345px] xl:-top-[458px] bg-[#1A1538] blur-[121px] lg:blur-[113px] xl:blur-[182px]"></div>
        <div
          className="z-10 absolute rounded-[31px] w-[636px] h-[718px] lg:w-[622px] lg:h-[702px] xl:w-[1000px] xl:h-[1129px] left-[249px] top-[193px] lg:left-[912px] lg:top-[462px] xl:left-[1467px] xl:top-[743px] blur-[95px] lg:blur-[93px] xl:blur-[150px] xl:rounded-[50px]"
          style={{
            background:
              "linear-gradient(145.48deg, #6D3FFF 30.62%, #9878FF 102.3%)",
          }}
        ></div>

        <div className="z-10 absolute w-[605px] h-[595px] lg:w-[591px] lg:h-[667px] xl:w-[951px] xl:h-[1073px] -left-[417px] top-[558px] lg:left-[7px] lg:top-[543px] xl:left-[11px] xl:top-[873px] bg-[#1A1538] blur-[115px]  lg:blur-[113px] xl:blur-[182px] rounded-full "></div>
        {/* end background linear gradients divs */}

        <div className="z-20 w-screen xl:w-[1920px] h-max md:h-screen lg:h-full py-4 lg:py-2  relative flex flex-col lg:flex-row flex-nowrap justify-start items-center lg:items-start gap-6 lg:gap-2 ">
          <div className="relative lg:hidden w-full flex flex-row items-center justify-start h-10 pr-[22px]">
            {/* <!-- hamburgur menu --> */}
            <HamburgerMenu
              className="h-full w-full flex flex-row justify-start "
              menuItems={menuItems}
              logOutHandler={logOutHandler}
            />
          </div>
          <div className="flex flex-col flex-nowrap justify-center items-center w-full h-max lg:w-[300px] xl:w-[484px] lg:mx-5 lg:mt-14 xl:mt-[103px]">
            {/* user info box */}
            <UserInfoBox
              userInfo={
                !loadedUser
                  ? Dummy_user_info
                  : {
                      id: loadedUser._id,
                      name: loadedUser.firstName,
                      family: loadedUser.lastName,
                      email: loadedUser.email,
                      isSpecialUser: loadedUser.isSpecialUser,
                      image: loadedUser.image,
                    }
              }
            />
            {/* select content box */}
            <SelectContentBox
              changeContentHandler={changeContentHandler}
              content={content}
            />
            <div className="z-40 hidden lg:flex flex-row flex-nowrap justify-center items-center gap-2 lg:mt-[26px] lg:mb-[140px] xl:mt-[42px]  xl:mb-56">
              <DashboardButton logOutHandler={logOutHandler}>
                <ExitIcon />
              </DashboardButton>
              <DashboardButton>
                <SettingIcon />
              </DashboardButton>
            </div>
          </div>

          {/* main content box */}
          {/* lg:h-[755px] xl:h-[1215px] */}
          <div className="w-11/12 lg:w-10/12 h-full px-5 lg:pb-[90px] lg:ml-4 lg:mr-0  py-[22px]  xl:pb-36 xl:my-[18px] bg-[#F6F8FB] rounded-2xl xl:rounded-3xl">
            <div className="w-full hidden lg:flex mb-8 mt-6 xl:mt-10 xl:mb-16 ">
              <DashboardHeader />
            </div>
            <div className=" relative bg-white rounded-lg xl:rounded-2xl lg:mx-6 xl:mx-12 m-auto h-max  px-6 py-[22px] lg:px-[68px] xl:py-9 xl:px-28 flex flex-col flex-nowrap justify-center items-center gap-5 lg:gap-8 shadow-[0_6px_29px_rgba(38,78,118,0.08)]">
              {content == "dashboard" && (
                <DashboardContent
                  faExpireDate={faExpireDate}
                  expireDate={expireDate}
                  changeContentHandler={changeContentHandler}
                />
              )}
              {content == "subscription" && (
                <SubscriptionContent
                  subscriptions={subscriptions}
                  discountHandler={discountHandler}
                />
              )}
              {content == "payments" && <PaymentContent payments={payments} />}
              {content == "profile" && (
                <ProfileContent
                  userInfo={loadedUser}
                  changeLodedUserHandler={changeLodedUserHandler}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const DashboardButton = (props) => {
  return (
    <button
      className="w-9 h-9 xl:w-14 xl:h-14 rounded-xl xl:rounded-[20px] flex flex-row justify-center items-center "
      style={{
        background:
          "linear-gradient(126deg, rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0) 100%)",
      }}
      onClick={props.logOutHandler}
    >
      {props.children}
    </button>
  );
};
export default Dashboard;
