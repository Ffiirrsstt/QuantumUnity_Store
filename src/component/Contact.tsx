import { useData } from "../useContext/useContext";
import Nav from "./Nav";
import "./Contact.css";

import { AiOutlinePhone } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiLineFill } from "react-icons/ri";

export default function Contact() {
  const { tab } = useData();
  const data = {
    phone: "095-965-1579",
    fac: "Saetae Ananya",
    line: "zeroyaoi",
  };
  return (
    <div className="m-h100 w two">
      <Nav />
      <div className="flex w">
        <div className="w80 flex bg-w h90">
          <div className="flex flex-col box-contactmain bg-two bor-bottom bor-top">
            <div className="flex flex-col bg txt-color h w flex1 p20px bor-top">
              <h1 className="font-xl mb10px">Welcome to Floral Haven.</h1>
              <h2 className="font-m">
                You can contact us through the following channels{tab()}:
              </h2>
            </div>
            <div className=" flex3 w h p20px txt-color">
              <h3 className="font-wn">
                <AiOutlinePhone className="icon-nav " />
                {tab()}
                <span className="icon-nav">:</span>
                {tab()}
                <span className="font-wl font-xl">{data.phone}</span>
              </h3>
              <h3 className="font-wn">
                <BsFacebook className="icon-nav" />
                {tab()}
                <span className="icon-nav">:</span>
                {tab()}
                <span className="font-wl font-xl">{data.fac}</span>
              </h3>
              <h3 className="font-wn">
                <RiLineFill className="icon-nav " />
                {tab()}
                <span className="icon-nav">:</span>
                {tab()}
                <span className="font-wl font-xl">{data.line}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
