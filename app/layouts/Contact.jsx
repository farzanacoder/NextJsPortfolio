import React from "react";
import ContactIcon from "../components/ContactIcon";
import Socialicon from "../components/Socialicon";
import Form from "../components/Form";
import Title from "../components/Title";

export default function Contact() {
  return (
    <section className="mt-[177px] mb-[63px]">
        <Title title='Contact' span='Me'/>
      <div className="container flex justify-between">
        <div>
          <p className="text-[48px] font-bold w-[466.97px]">
            Schedule a call with me to see if I can help
          </p>
          <p className="text-[18px] w-[465.03px] mb-7 text-[#99A1AF]">
            Reach out to me today and let’s discuss how I can help you achieve
            your goals.
          </p>

          <ContactIcon/>
          <ContactIcon/>
          <ContactIcon/>

          <div className="flex items-center gap-5 mt-10">
            <Socialicon/>
          <Socialicon/>
          <Socialicon/>
          <Socialicon/>
          </div>
        </div>

        <div className=" ">
         <Form/>
        </div>
      </div>
    </section>
  );
}
