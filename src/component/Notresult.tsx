import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";

import { FiShoppingBag } from "react-icons/fi";
import { TfiAnnouncement } from "react-icons/tfi";
import { useData } from "../useContext/useContext";
import { useState } from "react";

interface typeforprops {
  data: number;
  //1 = cart
  eye: boolean;
}

export default function Notresult(props: typeforprops) {
  const { tab } = useData();
  const { data, eye } = props;

  const [detail, setDetail] = useState<boolean>(false);
  const [instructions, setInstructions] = useState<boolean>(false);

  const txthead =
    data === 1
      ? "No items found in the shopping cart."
      : "I apologize, but the system did not locate the item you are searching for.";

  return (
    <div className={`w flex box-noneitem ${!eye && "m-h100"}`}>
      <div className="flex-col flex box-none box-shadow">
        <h1 className="font-xl w h flex1 head-none bg txt-color flex bor-top">
          {txthead}
          {tab()}
          <TfiAnnouncement
            className="txt-colorred font-wb icon-announcement"
            title={txthead}
          />
        </h1>
        <h2 className="flex3 font-xl font-wl h w txt-bg flex flex-col bor-bottom ">
          <span className="flex w">
            {data === 1
              ? `To add items to your shopping cart :`
              : "Please modify the text or keywords for searching the item of your interest."}
            <span>{tab()}</span>
            <Link to="/">
              {data === 1 ? (
                <FiShoppingBag className="icon-nav icon-hideeye " />
              ) : (
                <FiSearch
                  onClick={() => setInstructions(!instructions)}
                  className="icon-nav icon-hideeye "
                  title="View search instructions."
                />
              )}
            </Link>
          </span>
          {instructions && (
            <div className="w flex flex-col pl20px mt15px">
              <div>
                <ul className="flex j-between w">
                  <h4 className={`font-wb ${!detail ? "font-m" : "font-xl"}`}>
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
                </ul>
                <li
                  className={`mt15px pl20px ${!detail ? "font-m" : "font-xl"}`}
                >
                  Specify by the product name or model of the iPad you are
                  interested in.
                </li>
                <li className={`pl20px ${!detail ? "font-m" : "font-xl"}`}>
                  Search using the numerical model for easy retrieval.
                </li>
              </div>
            </div>
          )}
        </h2>
      </div>
    </div>
  );
}
