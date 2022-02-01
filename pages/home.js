import Image from "next/image";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import HeaderLink from "../components/HeaderLink";
import Link from "next/link";

const home = () => {
  return (
    <div className="sm:space-y-10 relative">
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10 cursor-pointer">
          <Link href="/home">
            <Image
              src="https://rb.gy/vtbzlp"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </div>

        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink Icon={GroupIcon} text="People" />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" />
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" />
          </div>

          <div className="pl-4">
            <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
              Sigin in
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto -space-y-16">
        {/* Left section  */}
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            Welcome to your Professional Community
          </h1>

          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Find a person you know</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
          </div>
        </div>

        {/* Right section  */}
        <div className="relative xl:absolute w-80 h-80 xl:w-[500px] xl:h-[500px] top-24 -right-8 md:right-10">
          <Image src="https://rb.gy/vkzpzt" layout="fill" priority />
        </div>
      </main>
    </div>
  );
};

export default home;
