import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import ContactIcon from "../components/ContactIcon";
import Socialicon from "../components/Socialicon";
import Form from "../components/Form";
import Title from "../components/Title";

export default function Contact() {
  return (
    <div className="py-16">
      <Title title="Contact" span="Me" />
      <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 mx-auto w-[90%] md:w-[80%] lg:w-[70%]">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with me to see if I can help
          </h1>
          <p
            className="text-gray-400 mt-6
            text-base sm:text-lg"
          >
            Reach out to me today and let’s discuss how I can help you achieve
            your goals.
          </p>
          <div className="mt-7">
            <ContactIcon icon={BiPhone} txt="01941465600" />
            <ContactIcon icon={BiEnvelope} txt="farzanaashif10@gmail.com" />
            <ContactIcon icon={BiMap} txt="Uttara,Dhaka" />
          </div>

          <div className="flex items-center mt-8 space-x-3">
            <Socialicon icon={FaFacebookF} />
            <Socialicon icon={FaYoutube} />
            <Socialicon icon={FaTwitter} />
            <Socialicon icon={FaInstagram} />
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
}
