import { styletypedata } from "../useContext/Dataipad";
import { useData } from "../useContext/useContext";
import { useState, useEffect } from "react";

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
  } = props;

  const [valuenumber, setValuenumber] = useState<string>("1");
  const [forpay, setPaymentAmoun] = useState<number>(1);

  useEffect(() => {
    setValuenumber(quantitybuy);
  }, []);

  useEffect(() => {
    const result = +valuenumber * price[selected[0]];
    setPaymentAmoun(result);
  }, [valuenumber]);

  useEffect(() => {
    updatePay(forpay, id);
  }, [forpay]);

  function funDelete(forid: number) {
    updateCart(0, forid);
    updatetotalamount();
    updatenew(forid);
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
      updateanred(false, forid);
      if (inputNumber === 0) {
        updateCart(0, forid);
        updatenew(forid);
      }
      updatetotalamount();
    } else {
      setValuenumber(e.target.value);
      updateanred(true, forid);
      updatevalueItem(inputNumber, forid);
      updatetotalamount();
    }
  }

  return (
    <>
      <div className="box-shadow box-itemcart w bg-two txt-color flex-forcol-smaller">
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
            <div className="flex1 h flex w j-between">
              <div className="flex-forcol-small">
                <h3 className="font-s font-wl ">There are a total of{tab()}</h3>
                <div className="font-s font-wl  flex">
                  <span className="font-m">
                    {quantitysell[selected[1]][selected[0]]}
                    {tab()}
                  </span>
                  <span className="flex font-s fontwl">items in stock.</span>
                </div>
              </div>
              <h3 className="flex-forcol-small font-m font-wl ">
                <span className="w flex j-end">Price :</span>
                <div>
                  <span className="font-l font-wb">
                    {tab()}
                    {price[selected[0]]}
                  </span>
                  {tab()}baht.
                </div>
              </h3>
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
                    Only {quantitysell[selected[1]][selected[0]]} items
                    available.
                  </>
                )}
              </h4>
            </div>
            <h3 className="flex-forcol font-m font-wl txt-colorbg">
              Payment amount:{tab()}
              <div>
                <span className="font-l font-wb">{forpay}</span>
                {tab()}baht.
              </div>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
