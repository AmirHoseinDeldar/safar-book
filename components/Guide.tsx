import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="regular-18 -mt-1 mb-3 text-green-50">
          ما اینجام برای شما ❤️
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[490px]">
            شما را به مسیر آسان راهنمایی میکنیم
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            فقط با برنامه safar-book دیگر گم نمی‌شوید و دوباره گم نمی‌شوید، زیرا
            ما از قبل از نقشه‌های آفلاین پشتیبانی می‌کنیم که اتصال اینترنتی در
            این زمینه وجود نداشته باشد. دوستان، اقوام و دوستان خود را به تفریح
            در بیابان از طریق دره و رسیدن به بالای کوه دعوت کنید.
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image src="/boat.png" alt="boat" width={1440} height={580} />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">مسیر</p>
                <p className="bold-16 to-green-50 ">48 دقیقه</p>
              </div>
              <p className="bold-20 mt-2">جنگل مازندران</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">شروع مسیر</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">جنگل دالخانی</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
