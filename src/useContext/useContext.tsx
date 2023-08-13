import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Dataipad, styletypedata } from "./Dataipad";
import { DataReducer } from "./DataReducer";

export interface typedatashop {
  Dataipad: styletypedata[];
  totalamount: number;
  totalpay: number;
}

const DataContext = createContext<any>(undefined);

const tab = () => {
  return <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
};

let dataShop: typedatashop;

const valuelocaldata = localStorage.getItem("dataShop");
valuelocaldata !== undefined && valuelocaldata !== null
  ? (dataShop = JSON.parse(valuelocaldata))
  : (dataShop = {
      Dataipad,
      totalamount: 0,
      totalpay: 0,
    });

interface DataProviderProps {
  children: ReactNode;
}

export const Dataprovider: React.FC<DataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, dataShop);

  useEffect(() => {
    localStorage.setItem("dataShop", JSON.stringify(state));
  }, [state]);

  function creatcArray(size: number) {
    return Array.from({ length: size }, () => false);
  }

  function callcomma(
    total: number,
    setnumchange: number,
    commanumchange: number,
    txt: string
  ) {
    return total >= setnumchange
      ? txt
      : total < commanumchange
      ? total.toLocaleString()
      : Intl.NumberFormat("en", {
          notation: "compact",
        }).format(total);
  }

  const updatePay = (value: number, id: number) => {
    dispatch({ type: "UPDATEPAY", payload: { value, id } });
  };
  const updatevalueItem = (value: number, id: number) => {
    dispatch({ type: "UPDATEAMOUNT", payload: { value, id } });
  };
  const updateCart = (value: number, id: number) => {
    dispatch({ type: "UPDATECART", payload: { value, id } });
  };
  const updatetotalamount = () => {
    dispatch({ type: "UPDATETOTALAMOUNT", payload: { value: 0, id: 0 } });
  };
  const updatetotalpay = (value: number) => {
    dispatch({ type: "UPDATETOTALPAY", payload: { value, id: 0 } });
  };
  const updatenew = (id: number) => {
    dispatch({ type: "UPDATENEW", payload: { value: 1, id } });
  };
  const updateanred = (value: boolean, id: number) => {
    dispatch({ type: "UPDATERED", payload: { value, id } });
  };
  const updateselect = (value: boolean, id: number) => {
    dispatch({ type: "UPDATESELECT", payload: { value, id } });
  };
  const updateselectcolor = (value: boolean[], id: number[]) => {
    dispatch({ type: "UPDATESELECTCOLOR", payload: { value, id } });
  };
  const updatebtnGb = (id: number[]) => {
    dispatch({ type: "UPDATEBTNGB", payload: { value: 1, id } });
  };
  const updatebtnColor = (id: number[]) => {
    dispatch({ type: "UPDATEBTNCOLOR", payload: { value: 1, id } });
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        tab,
        updatePay,
        updatevalueItem,
        updateCart,
        updatetotalamount,
        updatetotalpay,
        updatenew,
        updateanred,
        creatcArray,
        updateselect,
        updateselectcolor,
        updatebtnGb,
        updatebtnColor,
        callcomma,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
