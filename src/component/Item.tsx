import { styletypedata } from "../useContext/Dataipad";
import { useParams } from "react-router-dom";
import "./Item.css";
import { useData } from "../useContext/useContext";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import { RiH1 } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

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
  } = useData();
  const { id } = useParams();
  const [dataproductthis, setDataproductthis] = useState<styletypedata[]>();
  const [paymentAmoun, setPaymentAmoun] = useState<number>(0);
  const [valuenumber, setValuenumber] = useState<string>("1");
  const [cart, setCart] = useState<number>(0);
  const [forboolean, setforBoolean] = useState<boolean>();
  const [colorSelected, setColorSelected] = useState<boolean[]>();
  const [gbSelected, setGBSelected] = useState<boolean[]>();
  const [selectindex, setSelectindex] = useState<number[]>();

  useEffect(() => {
    if (id !== undefined) {
      const dataitem: styletypedata[] = Dataipad.filter(
        (dataitem: styletypedata) => dataitem.id === parseInt(id)
      );
      setDataproductthis(dataitem);
      updatevalueItem(dataitem[0].quantitybuy, id);
      setCart(dataitem[0].cart);
      updatetotalamount();
    }
  }, []);

  useEffect(() => {
    updatetotalamount();
  }, [cart]);

  useEffect(() => {
    if (dataproductthis !== undefined) {
      console.log(dataproductthis[0].src[0]);
      setValuenumber(dataproductthis[0].quantitybuy);
      setGBSelected(dataproductthis[0].selectedcolor.gb);
      setColorSelected(dataproductthis[0].selectedcolor.color);
      setSelectindex(dataproductthis[0].selected);
    }
  }, [dataproductthis]);

  useEffect(() => {
    if (dataproductthis !== undefined && selectindex !== undefined) {
      forUpdatePay();
      forfunBool();
      updateselect(selectindex, id);
    }
  }, [selectindex]);

  useEffect(() => {
    updateselectcolor(gbSelected, [id, 0]);
  }, [gbSelected]);

  useEffect(() => {
    updateselectcolor(colorSelected, [id, 1]);
  }, [colorSelected]);

  useEffect(() => {
    forUpdatePay();
  }, [valuenumber]);

  function forUpdatePay() {
    if (dataproductthis !== undefined && selectindex !== undefined) {
      const result = +valuenumber * dataproductthis[0].price[selectindex[0]];
      setPaymentAmoun(result);
      updatePay(result, dataproductthis[0].id);
    }
  }

  function inputchange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    setforBoolean(false);
    updateanred(false, id);
    if (dataproductthis !== undefined && selectindex !== undefined) {
      const inputNumber = parseInt(e.target.value);
      if (!isNaN(inputNumber)) {
        setValuenumber(e.target.value);
        updatevalueItem(inputNumber, id);
        setPaymentAmoun(dataproductthis[0].price[selectindex[0]] * inputNumber);
        updatetotalamount();
        if (
          !(
            inputNumber <=
            dataproductthis[0].quantitysell[selectindex[1]][selectindex[0]]
          )
        ) {
          updateanred(true, id);
          setforBoolean(true);
        }
      } else {
        setPaymentAmoun(dataproductthis[0].price[selectindex[0]]);
      }
    }
  }

  function forcart() {
    setCart(1);
    if (dataproductthis !== undefined) {
      updateCart(1, dataproductthis[0].id);
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
    if (
      dataproductthis !== undefined &&
      id !== undefined &&
      selectindex != undefined
    ) {
      if (
        !(
          +valuenumber <=
          dataproductthis[0].quantitysell[selectindex[1]][selectindex[0]]
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
    <div className="">
      <Nav />
      <div className="flex flex-col w ">
        <div className="flex h w">
          {dataproductthis !== undefined && (
            <div className="w flex flex-col ">
              <div className="flex w boximg-item absolute">
                {selectindex &&
                  dataproductthis[0].src[selectindex[1]].map((dataitem) => (
                    <img
                      src={dataitem}
                      className="h w50"
                      key={uuidv4()}
                      alt={dataproductthis[0].name}
                    />
                  ))}
              </div>
              <div className=" flex flex-col w box-description absolute ">
                <div className=" flex flex-col box-itemproduct pb30px w txt-black">
                  <div className=" flex flex-col h w box-shadow">
                    <h1 className="font-xl txt-color w flex bg box-headitem">
                      {dataproductthis[0].name}
                    </h1>
                    <h3 className=" font-wn font-m box-itemproduct">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: dataproductthis[0].description,
                        }}
                        className="font-m"
                      />
                    </h3>
                    <div className="w h box-shadow bg txt-color box-cartANDbuy ">
                      <div className="flex w h between">
                        <h3 className="font-wl font-s flex j-start w h ">
                          The quantity of items in stock is{" "}
                          {selectindex !== undefined &&
                            dataproductthis[0].quantitysell[selectindex[1]][
                              selectindex[0]
                            ]}{" "}
                          pieces.
                        </h3>
                        <div className="flex w h j-end">
                          <h3 className="font-wl font-m">Price :{tab()}</h3>
                          <h1 className="font-xl">
                            {selectindex &&
                              dataproductthis[0].price[selectindex[0]]}
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
                            onChange={(e) =>
                              inputchange(e, dataproductthis[0].id)
                            }
                            type="number"
                            defaultValue={dataproductthis[0].quantitybuy}
                            min={1}
                            className="box-shadow font-s txt-center input-changeamout"
                          />
                          {forboolean && (
                            <h4 className="font-s flex txt-colorred font-wl ml10px">
                              Only{" "}
                              {selectindex !== undefined &&
                                dataproductthis[0].quantitysell[selectindex[1]][
                                  selectindex[0]
                                ]}{" "}
                              items available.
                            </h4>
                          )}
                        </div>
                        <div className="flex flex-col w h a-end">
                          <h3 className="font-wl font-m flex j-end">
                            The payment amount :{tab()}
                            <span className="font-xl font-wb">
                              {paymentAmoun}
                            </span>
                            {tab()}baht.
                          </h3>
                        </div>
                      </div>
                      <div className="btn-select w h">
                        {dataproductthis[0].select.gb.map((dataitem, index) => (
                          <button
                            key={uuidv4()}
                            title={`${dataitem} GB`}
                            className={`${
                              gbSelected !== undefined && gbSelected[index]
                                ? "btn-selected"
                                : "bg-two"
                            } txt-shadow txt-color box-shadow font-m btn-forselect font-wn btn-filterBright p10`}
                            onClick={() => forGB(index)}
                          >
                            <h4 className="font-wl">{dataitem} GB</h4>
                          </button>
                        ))}
                      </div>
                      <div className=" btn-select w h">
                        {dataproductthis[0].select.color.map(
                          (dataitem: string, index: number) => (
                            <button
                              title={dataproductthis[0].select.desColor[index]}
                              key={uuidv4()}
                              className={`${
                                colorSelected !== undefined &&
                                colorSelected[index]
                                  ? "btn-selected"
                                  : "bg-two"
                              } flex j-between p10 txt-color box-shadow font-m btn-forselect font-wn btn-filterBright`}
                              onClick={() => forColor(index)}
                            >
                              <h4 className="font-wl">
                                {dataproductthis[0].select.desColor[index]}
                              </h4>
                              <div
                                className="fill-color h box-shadowW"
                                style={{ backgroundColor: dataitem }}
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
          )}
        </div>
      </div>
    </div>
  );
}
