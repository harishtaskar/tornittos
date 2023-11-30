import React from "react";
import Image from "next/image";

const ReservationCard = ({ item }) => {
  return (
    <div className="card p-4 rounded-md border border-slate-200 min-w-full md:min-w-[30rem] overflow-hidden">
      <Image
        src={"/assets/images/logo.png"}
        width={200}
        height={200}
        alt="TornittosLogo"
        className="absolute bottom-[-40px] right-[-50px] w-[18rem] h-[18rem] opacity-10 md:opacity-60"
      />
      <div className="flex justify-between items-center md:px-4">
        <div className="sm:flex text-xl md:text-3xl md:flex lg:flex font-bold flex mt-1 text-background-blue">
          TORNITTO'S
          <span className="sm:grid md:grid lg:grid xl:grid ml-[0.5rem]">
            PIZZA
          </span>
        </div>
      </div>

      <div class="p-2 md:p-4 text-md md:text-xl flex items-start flex-col">
        <p>
          <span class="font-semibold text-xl md:text-3xl my-2 capitalize">
            {item.firstName} {item.lastName}
          </span>
        </p>
        <p>
          <span class="font-semibold">Date:</span> {item.date}
        </p>
        <p>
          <span class="font-semibold">Time:</span> {item.time} {item.arial}
        </p>
        <p>
          <span class="font-semibold">Email:</span> {item.email}
        </p>

        <p>
          <span class="font-semibold">Mobile:</span> {item.mobile}
        </p>
        <p>
          <span class="font-semibold">Notes:</span> {item.notes}
        </p>
        <p>
          <span class="font-semibold">
            Table Reserved for {item.tableFor} peoples
          </span>
        </p>
      </div>
    </div>
  );
};

export default ReservationCard;
