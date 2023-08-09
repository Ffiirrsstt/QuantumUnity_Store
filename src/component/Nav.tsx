import { useData } from "../useContext/useContext";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineContacts } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";

export default function Nav() {
  const { totalamount, tab } = useData();
  return (
    <>
      <div className="flex box-nav w bg-two">
        <div className="w flex1 flex">
          <div className="box-brand">
            <Link to="/" className="none-link">
              <h1 className="font-l none-link for-brand">Floral Haven</h1>
            </Link>
          </div>
        </div>
        <div className="flex flex3 w h bg j-around">
          <Link to="/contact" className="flex none-link box-icon">
            <h2 className="font-xl txt-color">Contact :{tab()}</h2>
            <AiOutlineContacts className="icon-nav " />
          </Link>
          <Link to="/" className="flex none-link box-icon">
            <h2 className="font-xl txt-color">Shop :{tab()}</h2>
            <FiShoppingBag className="icon-nav " />
          </Link>
          <Link to="/cart" className="flex none-link box-icon">
            <div className="flex w">
              <h2 className="font-xl txt-color">Cart :{tab()}</h2>
              <AiOutlineShoppingCart className="icon-nav" />
              <div className="box-totalNav h flex cursor ml10px">
                <h3 className="font-m">{totalamount}</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
