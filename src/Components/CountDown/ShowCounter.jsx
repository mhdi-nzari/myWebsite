import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <>

      <div className="flex flex-col py-5 w-full">
        <p className="text-center text-red-400 font-medium text-3xl">
          مانده تا اتمام تخفیف
        </p>
        <div className="flex w-full gap-x-10 justify-center  pt-10">

           {/* seconds */}
           <DateTimeDisplay value={seconds} type={'ثانیه'} isDanger={false} />
          {/* Minutes */}
          <DateTimeDisplay value={minutes} type={'دقیقه'} isDanger={false} />

     
    {/* hours */}
    <DateTimeDisplay value={hours} type={'ساعت'} isDanger={hours <= 3} />

        {/* month */}
        <DateTimeDisplay value={days} type={'روز'} isDanger={days <= 3} />
        </div>
      </div>
    </>
  );
};

export default ShowCounter;
