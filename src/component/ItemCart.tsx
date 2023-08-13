import { styletypedata } from "../useContext/Dataipad";
import { useData } from "../useContext/useContext";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { FaDeleteLeft } from "react-icons/fa6";

export default function ItemCart(props: styletypedata) {
  const {
    tab,
    updatenew,
    updateCart,
    updatetotalamount,
    updatevalueItem,
    updateanred,
    updatePay,
    updatebtnGb,
    updatebtnColor,
    callcomma,
  } = useData();

  const {
    id,
    name,
    src,
    price,
    quantitysell,
    quantitybuy,
    forboolean,
    selected,
    select,
    selectedcolor,
  } = props;

  const [valuenumber, setValuenumber] = useState<string>("1");
  const [forpay, setPaymentAmoun] = useState<number>(1);

  useEffect(() => {
    setValuenumber(quantitybuy);
  }, []);

  useEffect(() => {
    const result = +valuenumber * price[selected[0]];
    setPaymentAmoun(result);
  }, [valuenumber, selected]);

  useEffect(() => {
    updatePay(forpay, id);
  }, [forpay]);

  useEffect(() => {
    checkforboolean();
  }, [selected, valuenumber]);

  function funDelete(forid: number) {
    updateCart(0, forid);
    updatetotalamount();
    updatenew(forid);
  }

  function checkforboolean() {
    if (!(+valuenumber <= quantitysell[selected[1]][selected[0]])) {
      updateanred(true, id);
    } else {
      updateanred(false, id);
    }
  }

  function inputchangeCart(
    e: React.ChangeEvent<HTMLInputElement>,
    forid: number
  ) {
    const inputNumber = parseInt(e.target.value);
    if (isNaN(inputNumber)) {
      setPaymentAmoun(price[selected[0]]);
    } else if (inputNumber <= quantitysell[selected[1]][selected[0]]) {
      setValuenumber(e.target.value);
      updatevalueItem(inputNumber, forid);
      if (inputNumber === 0) {
        updateCart(0, forid);
        updatenew(forid);
      }
      updatetotalamount();
    } else {
      setValuenumber(e.target.value);
      updatevalueItem(inputNumber, forid);
      updatetotalamount();
    }
  }

  return (
    <>
      <div className="over-x box-itemcart w bg-two txt-color flex-forcol-smaller">
        <img className="img-itemcart" src={src[selected[1]][0]} alt={name} />
        <div className="box-detailcart flex flex-col w">
          <div className="flex3 flex h flex-col w">
            <div className="flex1 h w flex j-between font-xl">
              <h2>{name}</h2>
              <FaDeleteLeft
                onClick={() => funDelete(id)}
                className="icont-delete"
              />
            </div>
            <div className="flex1 h flex flex-detailamount w j-between">
              <div className="flex flex-head">
                <h3 className="font-s font-wl ">There are a total of{tab()}</h3>
                <div className="font-s font-wl  flex">
                  <span className="font-m">
                    {quantitysell[selected[1]][selected[0]].toLocaleString()}
                    {tab()}
                  </span>
                  <span className="flex font-s fontwl">items in stock.</span>
                </div>
              </div>
              <h3 className="flex flex-head font-m font-wl">
                <span className="w flex j-end">Price :</span>
                <div>
                  <span className="font-l font-wb">
                    {tab()}
                    {price[selected[0]].toLocaleString()}
                  </span>
                  {tab()}baht.
                </div>
              </h3>
            </div>
            <div className="a-end h flex flex-warp w j-start">
              {select.gb.map((dataitem: number, index: number) => (
                <button
                  key={uuidv4()}
                  onClick={() => updatebtnGb([id, index])}
                  className={`${
                    selectedcolor.gb[index] && "forbg-w"
                  } btnselectcart bg-three font-m`}
                >
                  {dataitem}
                </button>
              ))}
            </div>
            <div className=" h flex flex-warp w j-start">
              {select.desColor.map((dataitem: string, index: number) => (
                <button
                  key={uuidv4()}
                  onClick={() => updatebtnColor([id, index])}
                  className={`${
                    selectedcolor.color[index] && "forbg-w"
                  } btnselectcart bg-three font-m `}
                >
                  {dataitem}
                </button>
              ))}
            </div>
          </div>
          <div className="box-shadow box-totalitem flex1 h flex-forcol-small bg-three  w j-between">
            <div className="flex for-w flex-forcol-small">
              <input
                onChange={(e) => inputchangeCart(e, id)}
                className=" input-cart txt-center font-m bg-w box-shadow"
                type="number"
                defaultValue={quantitybuy}
                max={quantitysell[selected[1]][selected[0]]}
              />
              <h4 className="font-s flex box-fored txt-colorred font-wl ml10px">
                {forboolean && (
                  <>
                    Only{" "}
                    {quantitysell[selected[1]][selected[0]].toLocaleString()}{" "}
                    items available.
                  </>
                )}
              </h4>
            </div>
            <h3 className="flex-forcol font-m font-wl txt-colorbg">
              Payment amount:{tab()}
              <div>
                <span className="font-l font-wb">
                  {callcomma(forpay, 1000000000, 1000000, "1,000M+")}
                </span>
                {tab()}baht.
              </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
