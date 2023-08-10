import { typedatashop } from "./useContext";
import { styletypedata } from "./Dataipad";

interface typeaction {
  type: string;
  payload: {
    value: number | number[] | boolean | boolean[];
    id: number | number[];
  };
}

export const DataReducer = (state: typedatashop, action: typeaction) => {
  switch (action.type) {
    case "UPDATEPAY": {
      let Dataipad: styletypedata[] = state.Dataipad;
      if (typeof action.payload.value === "number") {
        Dataipad = Dataipad.map((dataitem: styletypedata, index: number) => {
          return index === (action.payload.id as number) - 1
            ? { ...dataitem, pay: action.payload.value as number }
            : dataitem;
        });
      }
      return {
        ...state,
        Dataipad,
      };
    }
    case "UPDATEAMOUNT": {
      let Dataipad: styletypedata[] = state.Dataipad;
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, quantitybuy: action.payload.value.toString() }
          : dataitem
      );
      return { ...state, Dataipad };
    }
    case "UPDATETOTALPAY":
      return { ...state, totalpay: action.payload.value };
    case "UPDATECART": {
      let Dataipad: styletypedata[] = state.Dataipad;
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, cart: action.payload.value as number }
          : dataitem
      );
      return { ...state, Dataipad };
    }
    case "UPDATENEW": {
      let Dataipad: styletypedata[] = state.Dataipad;
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === (action.payload.id as number) - 1
          ? // ? { ...dataitem, pay: dataitem.price, quantitybuy: "1" }
            { ...dataitem, quantitybuy: "1" }
          : dataitem
      );
      return { ...state, Dataipad };
    }
    case "UPDATERED": {
      let Dataipad: styletypedata[] = state.Dataipad;
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, forboolean: action.payload.value as boolean }
          : dataitem
      );
      return { ...state, Dataipad };
    }

    case "UPDATETOTALAMOUNT": {
      const result = state.Dataipad.filter(
        (dataitem: styletypedata) => dataitem.cart === 1
      );

      const totalamount = result.reduce(
        (cur: number, value: styletypedata) =>
          cur + parseInt(value.quantitybuy),
        0
      );

      return { ...state, totalamount };
    }
    case "UPDATESELECT": {
      let Dataipad: styletypedata[] = state.Dataipad;
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, selected: action.payload.value as number[] }
          : dataitem
      );
      return { ...state, Dataipad };
    }
    case "UPDATESELECTCOLOR": {
      const forid = action.payload.id as number[];
      let Dataipad: styletypedata[] = state.Dataipad;
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === forid[0] - 1
          ? forid[1] == 0
            ? {
                ...dataitem,
                selectedcolor: {
                  ...dataitem.selectedcolor,
                  gb: action.payload.value as boolean[],
                },
              }
            : {
                ...dataitem,
                selectedcolor: {
                  ...dataitem.selectedcolor,
                  color: action.payload.value as boolean[],
                },
              }
          : dataitem
      );
      return { ...state, Dataipad };
    }
    default:
      return state;
  }
};
