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
  let Dataipad: styletypedata[] = state.Dataipad;
  switch (action.type) {
    case "UPDATEPAY": {
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
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, cart: action.payload.value as number }
          : dataitem
      );
      return { ...state, Dataipad };
    }
    case "UPDATENEW": {
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === (action.payload.id as number) - 1
          ? {
              ...dataitem,
              quantitybuy: "1",
              selected: [0, 0],
              selectedcolor: {
                gb: dataitem.selectedcolor.gb.map((_, forindex: number) =>
                  forindex === 0 ? true : false
                ),
                color: dataitem.selectedcolor.color.map((_, forindex: number) =>
                  forindex === 0 ? true : false
                ),
              },
            }
          : dataitem
      );

      return { ...state, Dataipad };
    }
    case "UPDATERED": {
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, forboolean: action.payload.value as boolean }
          : dataitem
      );
      return { ...state, Dataipad };
    }

    case "UPDATETOTALAMOUNT": {
      const result = Dataipad.filter(
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
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, selected: action.payload.value as number[] }
          : dataitem
      );
      return { ...state, Dataipad };
    }
    case "UPDATESELECTCOLOR": {
      const forid = action.payload.id as number[];
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
    case "UPDATEBTNGB": {
      const forIdIndex = action.payload.id as number[];
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === forIdIndex[0] - 1
          ? {
              ...dataitem,
              selected: [forIdIndex[1], dataitem.selected[1]],
              selectedcolor: {
                gb: dataitem.selectedcolor.gb.map((_, forindex: number) =>
                  forindex === forIdIndex[1] ? true : false
                ),
                color: dataitem.selectedcolor.color,
              },
            }
          : dataitem
      );
      return { ...state, Dataipad };
    }
    case "UPDATEBTNCOLOR": {
      const forIdIndex = action.payload.id as number[];
      Dataipad = Dataipad.map((dataitem: styletypedata, index: number) =>
        index === forIdIndex[0] - 1
          ? {
              ...dataitem,
              selected: [dataitem.selected[0], forIdIndex[1]],
              selectedcolor: {
                gb: dataitem.selectedcolor.gb,
                color: dataitem.selectedcolor.color.map((_, forindex: number) =>
                  forindex === forIdIndex[1] ? true : false
                ),
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
