import { styletypedata } from "../useContext/Dataipad";
import { useData } from "../useContext/useContext";
import { useState, useEffect } from "react";
import "./Cart.css";
import Nav from "./Nav";
import Notresult from "./Notresult";
import ItemCart from "./ItemCart";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export default function Cart() {
  const { Dataipad, tab, totalamount, updatetotalpay, callcomma } = useData();
  const [totalsum, setTotalsum] = useState<number>();
  const [boolean, setBoolean] = useState<boolean>(false);
  const [eye, setEye] = useState<boolean>(true);

  useEffect(() => {
    const total = Dataipad.filter(
      (dataitem: styletypedata) => dataitem.cart === 1
    ).reduce((cur: number, value: styletypedata) => {
      const totalForItem: number =
        +value.quantitybuy * value.price[value.selected[0]];
      return cur + totalForItem;
    }, 0);
    setTotalsum(total);
    updatetotalpay(total);
    Dataipad.filter((dataitem: styletypedata) => dataitem.cart === 1).length ===
    0
      ? setBoolean(true)
      : setBoolean(false);
  }, [Dataipad]);

  return (
    <div>
      <Nav />
      <div className="j-start flex flex-col w m-h100 ">
        <div className="w80 bg-w">
          {eye && (
            <div className="flex bg-w w boxframe-w pt20px">
              <div className="w bg-two flex j-between box-totalcart">
                <div className="flex7 w flex-forcol-boxcart j-between box-totalcart">
                  <h3 className="box-allitem flex bg-three font-wl font-m">
                    All items in the shopping cart : {tab()}
                    <div className="font-wb boxfocus bg txt-color flex">
                      {callcomma(
                        totalamount,
                        999999999999,
                        1000000,
                        "999,999M+"
                      )}
                    </div>
                    {tab()}
                    <span className="font-wl font-m">pieces.</span>
                  </h3>
                  <h3 className="ml50px box-allitem bg-three flex font-wl font-m">
                    Total payment amount: {tab()}
                    <span className="font-wb font-xl">
                      {callcomma(
                        totalsum,
                        1000000000000000000000,
                        1000000000000000,
                        "1,000,000,000, 000,000M+"
                      )}
                    </span>
                    {tab()}
                    baht.
                  </h3>
                </div>

                <h2 className="font-xl flex1 flex">
                  <AiOutlineEyeInvisible
                    onClick={() => setEye(!eye)}
                    className="icon-nav"
                  />
                </h2>
              </div>
            </div>
          )}
          {boolean && eye && <Notresult data={1} eye={true} />}
          {boolean && !eye && <Notresult data={1} eye={false} />}
          {!boolean && Dataipad && totalsum && (
            <div className={`${!eye && "pt20px"}`}>
              {Dataipad.map((dataitem: styletypedata) => {
                if (dataitem.cart === 1) {
                  return <ItemCart key={dataitem.id} {...dataitem} />;
                }
              })}
            </div>
          )}
          {!eye && (
            <div className="eye-hide">
              <AiOutlineEye
                onClick={() => setEye(!eye)}
                className="icon-nav icon-hideeye icon-colorbtn"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
