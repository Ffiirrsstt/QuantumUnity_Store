import { typedatashop } from "./useContext";
import { styletypedata } from "./Dataflower";

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
      let Dataflower: styletypedata[] = state.Dataflower;
      if (typeof action.payload.value === "number") {
        Dataflower = Dataflower.map((dataitem, index) => {
          return index === (action.payload.id as number) - 1
            ? { ...dataitem, pay: action.payload.value as number }
            : dataitem;
        });
      }
      return {
        ...state,
        Dataflower,
      };
    }
    case "UPDATEAMOUNT": {
      let Dataflower: styletypedata[] = state.Dataflower;
      Dataflower = Dataflower.map((dataitem, index) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, quantitybuy: action.payload.value.toString() }
          : dataitem
      );
      return { ...state, Dataflower };
    }
    case "UPDATETOTALPAY":
      return { ...state, totalpay: action.payload.value };
    case "UPDATECART": {
      let Dataflower: styletypedata[] = state.Dataflower;
      Dataflower = Dataflower.map((dataitem, index) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, cart: action.payload.value as number }
          : dataitem
      );
      return { ...state, Dataflower };
    }
    case "UPDATENEW": {
      let Dataflower: styletypedata[] = state.Dataflower;
      Dataflower = Dataflower.map((dataitem, index) =>
        index === (action.payload.id as number) - 1
          ? // ? { ...dataitem, pay: dataitem.price, quantitybuy: "1" }
            { ...dataitem, quantitybuy: "1" }
          : dataitem
      );
      return { ...state, Dataflower };
    }
    case "UPDATERED": {
      let Dataflower: styletypedata[] = state.Dataflower;
      Dataflower = Dataflower.map((dataitem, index) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, forboolean: action.payload.value as boolean }
          : dataitem
      );
      return { ...state, Dataflower };
    }

    case "UPDATETOTALAMOUNT": {
      const result = state.Dataflower.filter((dataitem) => dataitem.cart === 1);

      const totalamount = result.reduce(
        (cur, value) => cur + parseInt(value.quantitybuy),
        0
      );

      const totalpay = result.reduce((cur, value) => cur + value.pay, 0);

      return { ...state, totalamount, totalpay };
    }
    case "UPDATESELECT": {
      let Dataflower: styletypedata[] = state.Dataflower;
      Dataflower = Dataflower.map((dataitem, index) =>
        index === (action.payload.id as number) - 1
          ? { ...dataitem, selected: action.payload.value as number[] }
          : dataitem
      );
      return { ...state, Dataflower };
    }
    case "UPDATESELECTCOLOR": {
      const forid = action.payload.id as number[];
      let Dataflower: styletypedata[] = state.Dataflower;
      Dataflower = Dataflower.map((dataitem, index) =>
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
      return { ...state, Dataflower };
    }
    default:
      return state;
  }
};
