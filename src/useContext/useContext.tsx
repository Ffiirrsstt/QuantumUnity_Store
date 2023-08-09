import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Dataflower, styletypedata } from "./Dataflower";
import { DataReducer } from "./DataReducer";

export interface typedatashop {
  Dataflower: styletypedata[];
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
      Dataflower,
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
