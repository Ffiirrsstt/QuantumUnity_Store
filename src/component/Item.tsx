import { styletypedata } from "../useContext/Dataipad";
import { useParams } from "react-router-dom";
import "./Item.css";
import { useData } from "../useContext/useContext";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import { RiH1 } from "react-icons/ri";

export default function Item() {
  // export default function Item() :JSX.Element{
  const {
    Dataipad,
    tab,
    updatePay,
    updatevalueItem,
    updateCart,
    updatetotalamount,
    updateanred,
    updateselect,
    updateselectcolor,
    callcomma,
  } = useData();
  const { id } = useParams();
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [valuenumber, setValuenumber] = useState<string>("1");
  const [forboolean, setforBoolean] = useState<boolean>();
  const [colorSelected, setColorSelected] = useState<boolean[]>();
  const [gbSelected, setGBSelected] = useState<boolean[]>();
  const [selectindex, setSelectindex] = useState<number[]>();

  useEffect(() => {
    forsetDefult();
  }, []);

  function forsetDefult() {
    if (id !== undefined) {
      setValuenumber(Dataipad[+id - 1].quantitybuy);
      setGBSelected(Dataipad[+id - 1].selectedcolor.gb);
      setColorSelected(Dataipad[+id - 1].selectedcolor.color);
      setSelectindex(Dataipad[+id - 1].selected);
    }
  }

  useEffect(() => {
    if (id !== undefined && selectindex !== undefined) {
      forUpdatePay();
      forfunBool();
    }
  }, [selectindex]);

  useEffect(() => {
    forUpdatePay();
  }, [valuenumber]);

  function forUpdatePay() {
    if (id !== undefined && selectindex !== undefined) {
      const result = +valuenumber * Dataipad[+id - 1].price[selectindex[0]];
      setPaymentAmount(result);
    }
  }

  function inputchange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    setforBoolean(false);
    if (selectindex !== undefined) {
      const inputNumber = parseInt(e.target.value);
      if (!isNaN(inputNumber)) {
        setValuenumber(e.target.value);
        setPaymentAmount(Dataipad[id - 1].price[selectindex[0]] * inputNumber);

        if (
          !(
            inputNumber <=
            Dataipad[id - 1].quantitysell[selectindex[1]][selectindex[0]]
          )
        ) {
          setforBoolean(true);
        }
      } else {
        setPaymentAmount(Dataipad[id - 1].price[selectindex[0]]);
      }
    }
  }

  function forcart() {
    if (id !== undefined && +valuenumber !== 0) {
      updateCart(1, Dataipad[+id - 1].id);
      forfunBool();
      updatevalueItem(valuenumber, id);
      updatePay(paymentAmount, id);
      updateselectcolor(colorSelected, [id, 1]);
      updateselectcolor(gbSelected, [id, 0]);
      updateselect(selectindex, id);
      updatetotalamount();
    }
  }

  function selectedColor(forData: boolean[], index: number) {
    return Object.keys(forData).map((dataitem, indexdata) =>
      indexdata === index ? true : false
    );
  }

  function forSetSelect(gbOrColor: string, indexvalue: number) {
    if (selectindex !== undefined) {
      return selectindex.map((dataitem, indexdata) => {
        if (gbOrColor === "GB") {
          return indexdata === 0 ? indexvalue : dataitem;
        } else {
          return indexdata === 1 ? indexvalue : dataitem;
        }
      });
    }
  }

  function forGB(index: number) {
    if (gbSelected !== undefined && selectindex !== undefined) {
      setGBSelected(selectedColor(gbSelected, index));
      setSelectindex(forSetSelect("GB", index));
    }
  }

  function forColor(index: number) {
    if (colorSelected !== undefined && selectindex !== undefined) {
      setColorSelected(selectedColor(colorSelected, index));
      setSelectindex(forSetSelect("COLOR", index));
      forfunBool();
    }
  }

  function forfunBool() {
    if (id !== undefined && selectindex != undefined) {
      if (
        !(
          +valuenumber <=
          Dataipad[+id - 1].quantitysell[selectindex[1]][selectindex[0]]
        )
      ) {
        updateanred(true, id);
        setforBoolean(true);
      } else {
        updateanred(false, id);
        setforBoolean(false);
      }
    }
  }

  return (
    <>
      <Nav />
      <div className="flex flex-col w ">
        <div className="flex h w">
          {id !== undefined &&
            Dataipad.map((dataitem: styletypedata, index: number) =>
              index === +id - 1 ? (
                <div className="w flex flex-col " key={dataitem.id}>
                  <div className="flex w boximg-item">
                    {selectindex &&
                      dataitem.src[selectindex[1]].map((data: string) => (
                        <img
                          src={data}
                          className="h w50"
                          key={data}
                          alt={dataitem.name}
                        />
                      ))}
                  </div>
                  <div className=" flex flex-col w box-description ">
                    <div className=" flex flex-col box-itemproduct pb30px w txt-black">
                      <div className=" flex flex-col h w box-shadow">
                        <h1 className="font-xl txt-color w flex bg box-headitem">
                          {dataitem.name}
                        </h1>
                        <h3 className=" font-wn font-m box-itemproduct">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: dataitem.description,
                            }}
                            className="font-m"
                          />
                        </h3>
                        <div className="w h box-shadow bg txt-color box-cartANDbuy ">
                          <div className="flex w h between">
                            <h3 className="font-wl font-s flex j-start w h ">
                              The quantity of items in stock is{" "}
                              {selectindex !== undefined &&
                                dataitem.quantitysell[selectindex[1]][
                                  selectindex[0]
                                ]}{" "}
                              pieces.
                            </h3>
                            <div className="flex w h j-end">
                              <h3 className="font-wl font-m">Price :{tab()}</h3>
                              <h1 className="font-xl">
                                {selectindex &&
                                  dataitem.price[
                                    selectindex[0]
                                  ].toLocaleString()}
                              </h1>
                              <h3 className="font-wl font-m">{tab()}baht.</h3>
                            </div>
                          </div>
                          <div className="flex w h between ">
                            <div className="flex j-start w h">
                              <h3 className="font-wl bg-btn box-shadow font-m txt-quantity txt-shadow flex txt-center">
                                Quantity of items desired{tab()}
                              </h3>
                              <input
                                onChange={(e) => inputchange(e, dataitem.id)}
                                type="number"
                                defaultValue={dataitem.quantitybuy}
                                min={1}
                                className="box-shadow font-s txt-center input-changeamout"
                              />
                              {forboolean && (
                                <h4 className="font-s flex txt-colorred font-wl ml10px">
                                  Only{" "}
                                  {selectindex !== undefined &&
                                    dataitem.quantitysell[selectindex[1]][
                                      selectindex[0]
                                    ]}{" "}
                                  items available.
                                </h4>
                              )}
                            </div>
                            <div className="flex flex-col w h a-end">
                              <div className="font-ex-m flex j-end">
                                <span className="flex">
                                  <h4 className="font-wl font-ex-m">
                                    The payment amount
                                  </h4>
                                  <span className="none-650">:{tab()}</span>
                                </span>
                                <span className="font-xl font-wb">
                                  <span className="open-650">:{tab()}</span>
                                  {callcomma(
                                    paymentAmount,
                                    1000000000,
                                    1000000,
                                    "1,000M+"
                                  )}
                                  <span className="open-650">{tab()}baht.</span>
                                </span>
                                <span className="none-650">{tab()}baht.</span>
                              </div>
                            </div>
                          </div>
                          <div className="btn-select w h">
                            {dataitem.select.gb.map(
                              (data: number, forindex: number) => (
                                <button
                                  key={forindex}
                                  title={`${data} GB`}
                                  className={`${
                                    gbSelected !== undefined &&
                                    gbSelected[forindex]
                                      ? "btn-selected"
                                      : "bg-two"
                                  } txt-shadow txt-color box-shadow font-m btn-forselect font-wn btn-filterBright p10`}
                                  onClick={() => forGB(forindex)}
                                >
                                  <h4 className="font-wl">{data} GB</h4>
                                </button>
                              )
                            )}
                          </div>
                          <div className=" btn-select w h">
                            {dataitem.select.color.map(
                              (data: string, forindex: number) => (
                                <button
                                  title={dataitem.select.desColor[forindex]}
                                  key={forindex}
                                  className={`${
                                    colorSelected !== undefined &&
                                    colorSelected[forindex]
                                      ? "btn-selected"
                                      : "bg-two"
                                  } flex j-between p10 txt-color box-shadow font-m btn-forselect font-wn btn-filterBright`}
                                  onClick={() => forColor(forindex)}
                                >
                                  <h4 className="font-wl">
                                    {dataitem.select.desColor[forindex]}
                                  </h4>
                                  <div
                                    className="fill-color h box-shadowW"
                                    style={{ backgroundColor: data }}
                                  ></div>
                                </button>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex w h flex1">
                        <button
                          onClick={() => forcart()}
                          className="txt-shadow btn-itemproduct btn-filterBright bg-three txt-color box-shadow font-xl p10 h font-wn"
                        >
                          Cart
                        </button>
                        <button className="txt-shadow btn-itemproduct btn-filterBright bg-btn box-shadow txt-color font-xl h p10 font-wn">
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </>
  );
}
