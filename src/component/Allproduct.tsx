import { useData } from "../useContext/useContext";
import Item from "./Item";
import { Link } from "react-router-dom";
import { styletypedata } from "../useContext/Dataipad";
import "./Allproduct.css";
import img from "../assets/RedRose.jpg";
import Notresult from "./Notresult";
import Nav from "./Nav";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

export default function Allproduct(): JSX.Element {
  const { Dataipad, tab } = useData();

  const [data, setData] = useState<styletypedata[]>([]);
  const [nonesearch, setNonesearch] = useState<boolean>(false);

  useEffect(() => {
    setData(Dataipad);
  }, []);

  function inputsearch(e: React.ChangeEvent<HTMLInputElement>) {
    const result = Dataipad.filter((dataitem: styletypedata) =>
      dataitem.name
        .toLocaleLowerCase()
        .replace(/ /g, "")
        .includes(e.target.value.toLocaleLowerCase().replace(/ /g, ""))
    );

    setData(result);
    result.length === 0 ? setNonesearch(true) : setNonesearch(false);
  }

  return (
    <>
      <Nav />
      <div className="w j-start j-between flex flex-col bg-w m-h100">
        <input
          onChange={(e) => inputsearch(e)}
          type="text"
          placeholder="Please specify what you are looking for."
          className="w80 box-shadow box-inputsearch bor5px font-m"
        />
        <div className="flex j-between box-resultSearch bg-two bor5px w80">
          <h3 className="font-m w">
            Search results for{tab()}
            <span className="box-Searchnumber bg">{data.length}</span>
            {tab()}items.
          </h3>
        </div>
        <div className="flex flex-col w80 boxproduct-margin">
          <div className="w grid-template ">
            {data.map((dataitem: styletypedata) => {
              return (
                <Link to={`product/${dataitem.id}`} key={uuidv4()}>
                  <div className=" fil-12 scale-p box-shadow">
                    <div className=" relative box-item ">
                      <img
                        src={
                          (typeof dataitem.src[0][0] === "string"
                            ? dataitem.src[0][0]
                            : undefined) ||
                          (typeof dataitem.src[0] === "string"
                            ? dataitem.src[0]
                            : undefined)
                        }
                        className=" absolute forimg w h"
                        alt={dataitem.name}
                      />
                    </div>
                    <div className="bor-bottom10 flex flex-col w product-des ">
                      <h3 className="w font-m">
                        {dataitem.name.slice(0, 20)}
                        {dataitem.name.length > 20 && (
                          <span className="">...</span>
                        )}
                      </h3>
                      <div className="w font-s flex j-between ">
                        <h5 className="font-wl font-m">Price : {tab()}</h5>
                        <h3>฿{dataitem.price[0].toLocaleString()}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {nonesearch && <Notresult data={2} eye={true} />}
        </div>
      </div>
    </>
  );
}
