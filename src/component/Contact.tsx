import { useData } from "../useContext/useContext";
import Nav from "./Nav";
import "./Contact.css";

import { AiOutlinePhone } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiLineFill } from "react-icons/ri";

export default function Contact() {
  const { tab } = useData();
  const data = {
    phone: "095 - 965 - 1579",
    fac: "Saetae Ananya",
    line: "zeroyaoi",
  };
  return (
    <div className="m-h100 w two">
      <Nav />
      <div className="flex w">
        <div className="w80 flex bg-w h90">
          <div className="box-shadow flex flex-col box-contactmain w bg-two bor-bottom bor-top">
            <div className="flex flex-col bg txt-color h w flex1 p20px bor-top">
              <h1 className="font-xl mb10px">Welcome to QuantumUnity.</h1>
              <h2 className="font-m">
                You can contact us through the following channels{tab()}:
              </h2>
            </div>
            <div className=" flex3 flex flex-col bg-w w h p20px txt-bg">
              <h3 className="flex1 flex w j-between font-wn">
                <span className="">
                  <AiOutlinePhone className="icon-nav icon-contact" />
                  {tab()}
                  <span className="icon-nav icon-contact">:</span>
                  {tab()}
                </span>
                <span className=" font-xl boxcontact-value j-end flex flex7">
                  {data.phone}
                </span>
              </h3>
              <h3 className="flex1 flex w j-between font-wn">
                <span>
                  <BsFacebook className="icon-nav icon-contact contact-facebook" />
                  {tab()}
                  <span className="icon-nav icon-contact contact-facebook">
                    :
                  </span>
                </span>
                {tab()}
                <span className=" font-xl boxcontact-value j-end flex flex7">
                  {data.fac}
                </span>
              </h3>
              <h3 className="flex1 flex w j-between font-wn">
                <span>
                  <RiLineFill className="icon-nav icon-contact contact-line " />
                  {tab()}
                  <span className="icon-nav icon-contact contact-line">:</span>
                  {tab()}
                </span>
                <span className=" font-xl boxcontact-value  j-end flex flex7">
                  {data.line}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
