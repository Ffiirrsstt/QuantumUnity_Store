import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

import { MdSearchOff } from "react-icons/md";

import { FiShoppingBag } from "react-icons/fi";
import { TfiAnnouncement } from "react-icons/tfi";
import { useData } from "../useContext/useContext";
import { useState } from "react";

interface typeforprops {
  data: number;
  //1 = cart //2 = search
  eye: boolean;
}

export default function Notresult(props: typeforprops) {
  const { tab } = useData();
  const { data, eye } = props;

  const [detail, setDetail] = useState<boolean>(false);
  const [instructions, setInstructions] = useState<boolean>(false);

  let txthead, txtdetail;
  if (data === 1) {
    txthead = "No items found in the shopping cart.";
    txtdetail = `To add items to your shopping cart :`;
  } else if (data === 2) {
    txthead =
      "I apologize, but the system did not locate the item you are searching for.";
    txtdetail =
      "Please modify the text or keywords for searching the item of your interest.";
  } else {
    txthead = "Welcome to QuantumUnity.";
    txtdetail = `This page cannot be found. Error 404.`;
  }

  return (
    <div className={`w flex box-noneitem ${!eye && "m-h100"}`}>
      <div className="flex-col flex box-none box-shadow">
        <h1 className="plr20px font-xl w h flex1 head-none bg txt-color flex bor-top">
          {txthead}
          {tab()}
          <TfiAnnouncement
            className="txt-colorred font-wb icon-announcement"
            title={txthead}
          />
        </h1>
        <h2 className="plr20px flex3 font-xl font-wl h w txt-bg flex flex-col bor-bottom ">
          <span className="flex w">
            {txtdetail}
            <span>{tab()}</span>
            <Link to="/">
              {data === 1 ? (
                <FiShoppingBag className="icon-nav icon-hideeye " />
              ) : data === 2 ? (
                <FiSearch
                  onClick={() => setInstructions(!instructions)}
                  className="icon-nav icon-hideeye "
                  title="View search instructions."
                />
              ) : (
                <MdSearchOff
                  className="icon-nav icon-hideeye "
                  title={txtdetail}
                />
              )}
            </Link>
          </span>
          {instructions && (
            <div className="w flex flex-col plr20px mt15px">
              <div className="">
                <div className="flex w j-between">
                  <h4
                    className={`font-wb ${!detail ? "font-m" : "font-ex-xl"}`}
                  >
                    Specifying Search:
                  </h4>
                  <button
                    onClick={() => setDetail(!detail)}
                    className="btn-fontIncrease bor5px bg-two "
                    title="Increase font size."
                  >
                    {/* btn-fontIncrease อยู่ Allproduct.css*/}
                    Increase font size.
                  </button>
                </div>
                <ul className="flex flex-col j-between w">
                  <li
                    className={`mt15px pl20px w ${
                      !detail ? "font-m" : "font-ex-xl"
                    }`}
                  >
                    Specify by the product name or model of the iPad you are
                    interested in.
                  </li>
                  <li
                    className={`pl20px w ${!detail ? "font-m" : "font-ex-xl"}`}
                  >
                    Search using the numerical model for easy retrieval.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </h2>
      </div>
    </div>
  );
}
