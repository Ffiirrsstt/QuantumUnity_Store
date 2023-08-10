import { styletypedata } from "../useContext/Dataipad";
import { useData } from "../useContext/useContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import Nav from "./Nav";
import ItemCart from "./ItemCart";

import { FiShoppingBag } from "react-icons/fi";
import { TfiAnnouncement } from "react-icons/tfi";

export default function Cart() {
  const { Dataipad, tab, totalamount, updatetotalpay } = useData();
  const [totalsum, setTotalsum] = useState<number>();
  const [boolean, setBoolean] = useState<boolean>(false);

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
    Dataipad.length === 0 ? setBoolean(true) : setBoolean(false);
  }, [Dataipad]);

  return (
    <div className="flex flex-col w two m-h100 ">
      <Nav />
      <div className="w80 bg-w p10px h90-allproduct">
        <div className="w flex-forcol-boxcart j-between box-totalcart bg-two">
          <h3 className="box-allitem flex bg-three font-wl font-m">
            All items in the shopping cart : {tab()}
            <div className="font-wb boxfocus bg txt-color flex">
              {totalamount}
            </div>
            {tab()}
            <span className="font-wl font-m">pieces.</span>
          </h3>
          <h3 className="ml50px box-allitem bg-three flex font-wl font-m">
            Total payment amount: {tab()}
            <span className="font-wb font-xl">{totalsum}</span>
            {tab()}
            baht.
          </h3>
        </div>
        {boolean && (
          <div className="w flex box-noneitem">
            <div className="flex-col flex box-none">
              <h1 className="font-xl w h flex1 head-none bg txt-color flex bor-top">
                No items found in the shopping cart.{tab()}
                <TfiAnnouncement
                  className="txt-colorred font-wb icon-announcement"
                  title="No items found in the shopping cart."
                />
              </h1>
              <h2 className="flex3 font-xl font-wl h w bg-two txt-color flex bor-bottom ">
                To add items to your shopping cart :{tab()}
                <Link to="/">
                  <FiShoppingBag className="icon-nav " />
                </Link>
              </h2>
            </div>
          </div>
        )}
        {!boolean &&
          Dataipad &&
          // totalsum &&
          Dataipad.map((dataitem: styletypedata) => {
            if (dataitem.cart === 1) {
              return <ItemCart key={dataitem.id} {...dataitem} />;
            }
          })}
        {/* {!boolean &&
          data &&
          totalsum &&
          data.map((dataitem: styletypedata) => {
            return <ItemCart key={dataitem.id} {...dataitem} />;
          })} */}
      </div>
    </div>
  );
}
