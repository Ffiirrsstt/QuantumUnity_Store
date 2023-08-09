import { useData } from "../useContext/useContext";
import Item from "./Item";
import { Link } from "react-router-dom";
import { styletypedata } from "../useContext/Dataflower";
import "./Allproduct.css";
import img from "../assets/RedRose.jpg";
import Nav from "./Nav";
import { v4 as uuidv4 } from "uuid";

export default function Allproduct(): JSX.Element {
  const { Dataflower, tab } = useData();

  return (
    <div className="m-h100 over">
      <Nav />
      <div className="w flex bg-w h90-allproduct absolute">
        <div className="flex w80">
          <div className="w grid grid-template">
            {Dataflower.map((dataitem: styletypedata) => {
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
                        className="absolute forimg w h"
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
        </div>
      </div>
    </div>
  );
}
