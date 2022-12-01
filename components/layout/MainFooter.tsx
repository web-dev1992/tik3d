import InstaIcon from "@components/ui/SocialMedia/InstaIcon";
import Image from "next/image";
import Link from "next/link";
const MainFooter = () => {
  return (
    <div className="w-10/12 lg:w-9/12 xl:w-[1350px] m-auto flex flex-col lg:flex-row flex-nowrap justify-center items-center lg:items-end xl:justify-start  gap-6  mt-24 mb-0 lg:mb-[76px] xl:mb-28 relative">
      <div className="w-full flex justify-center md:hidden">
        <Image
          alt="contact-us"
          src="/images/footer-contactus.png"
          width={277}
          height={306}
        />
      </div>
      <div className="w-full hidden md:flex justify-center xl:hidden">
        <Image
          alt="contact-us"
          src="/images/footer-contactus.png"
          width={388}
          height={447}
        />
      </div>
      <div className="w-full hidden xl:flex justify-center ">
        <Image
          alt="contact-us"
          src="/images/footer-contactus.png"
          width={625}
          height={719}
        />
      </div>
      <div className="w-full lg:7/10 flex flex-col justify-end items-start font-IRANSans mt-8 pb-10 lg:pb-0 ">
        <h1 className="text-4xl lg:text-3xl xl:text-5xl text-right tracking-[-1.5px] leading-[60px] font-bold text-navyBluee">
          با ما در ارتباط باشید
        </h1>
        <p className="font-normal text-xxs  xl:text-[17px]  lg:leading-9 leading-[22px] text-right  text-[#343D48]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <div className="w-full h-max flex flex-col lg:flex-row flex-nowrap justify-center items-center gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center flex-nowrap text-white gap-2">
            <div className="flex flex-row flex-nowrap gap-2 ">
              <div className="h-[36px] w-[102px] lg:w-[111px] lg:h-[39px] xl:w-[180px] xl:h-16 text-xxs xl:text-lg flex flex-row justify-center items-center bg-gradient-to-l from-[#E08C44] to-[#FE5B84] gap-2 rounded-sm  font-medium shadow-[0_3px_26px_rgba(249,95,126,0.3)] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 xl:w-7 xl:h-7 cursor-pointer"
                >
                  <path
                    d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                    fill="#fff"
                  />
                </svg>
                <span>اینستاگرام</span>
              </div>
              <div className="h-[36px] w-[102px] lg:w-[111px] lg:h-[39px] xl:w-[180px] xl:h-16 flex flex-row justify-center items-center gap-2 rounded-sm text-xxs xl:text-lg font-medium text-[#535353] shadow-[0_3px_26px_rgba(132,132,132,0.25)]">
                <svg
                  viewBox="0 0 19 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 xl:w-5 xl:h-6 cursor-pointer"
                >
                  <path
                    d="M16.3994 22.926L15.2064 23.584C8.22742 27.205 -3.87558 6.09 2.92742 2.1L4.07242 1.463L7.78642 7.93L6.64742 8.562C4.58042 9.807 9.40742 18.269 11.5264 17.107L12.6884 16.465L16.3994 22.926ZM6.59142 0L4.91142 0.975L8.62542 7.441L10.3064 6.466L6.59142 0ZM15.2044 14.997L13.5244 15.972L17.2384 22.439L18.9194 21.464L15.2044 14.997Z"
                    fill="#535353"
                  />
                </svg>
                <span>09127330814</span>
              </div>
            </div>
            <div className="flex flex-row flex-nowrap gap-2 ">
              <div className="h-[36px] w-[102px] lg:w-[111px] lg:h-[39px] xl:w-[180px] xl:h-16 flex flex-row justify-center items-center gap-2 rounded-sm text-xxs xl:text-lg font-medium shadow-[0_3px_26px_rgba(103,201,245,0.3)] bg-[#67C9F5]">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-4 h-4 xl:w-7 xl:h-7 cursor-pointer"
                >
                  <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                </svg>
                <span>کانال تلگرام</span>
              </div>
              <div className="h-[36px] w-[102px] lg:w-[111px] lg:h-[39px] xl:w-[180px] xl:h-16 flex flex-row justify-center items-center gap-2 rounded-sm text-xxs xl:text-lg font-medium shadow-[0_3px_26px_rgba(103,201,245,0.3)] bg-[#67C9F5]">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-4 h-4 xl:w-7 xl:h-7 cursor-pointer"
                >
                  <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                </svg>
                <span>گروه تلگرام</span>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden flex-row flex-nowrap justify-center items-center">
            <Link href="#">
              <Image
                src="/images/samandehi-logo.png"
                alt="samandehi"
                width={76}
                height={76}
                objectFit="contain"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/enamadLogo.png"
                alt="samandehi"
                width={63}
                height={69}
                objectFit="contain"
              />
            </Link>
          </div>
          <div className="hidden lg:flex xl:hidden flex-row flex-nowrap justify-center items-center">
            <Link href="#">
              <Image
                src="/images/samandehi-logo.png"
                alt="samandehi"
                width={93}
                height={93}
                objectFit="contain"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/enamadLogo.png"
                alt="samandehi"
                width={78}
                height={84}
                objectFit="contain"
              />
            </Link>
          </div>
          <div className="hidden xl:flex flex-row flex-nowrap justify-center items-center">
            <Link href="#">
              <Image
                src="/images/samandehi-logo.png"
                alt="samandehi"
                width={150}
                height={150}
                objectFit="contain"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/enamadLogo.png"
                alt="samandehi"
                width={125}
                height={136}
                objectFit="contain"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden xl:inline-block absolute -left-[124px] -bottom-2 h-[75px] w-[75px]">
        <Image
          src="/images/message.png"
          alt="message"
          width={75}
          height={75}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default MainFooter;
