import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header3 = () => {
  return (
    <div>
      <header
        className="max-[1024px]:hidden"
        style={{
          background: "linear-gradient(84deg, #F2D5CF 0%, #E2EEFE 100%)",
        }}
      >
        <div className="container flex justify-between">
          <div className="">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="Ramaiah Memorial Hospital"
                className="min-[1200px]:w-[170px] h-[70px]"
                width={197}
                height={70}
              />
            </Link>
          </div>
          <div className="">
            <Image
              src="/assets/headermainlogo.svg"
              alt="header-thaumbnail"
              width={320}
              height={40}
            //   className="w-[555px]"
            />
          </div>
          <div>
            <h2 className="text-[42px] font-bold Text-color2">#LifeGetsBetter</h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header3;
