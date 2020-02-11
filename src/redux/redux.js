import { createStore } from "redux";
import axios from "axios";

const initialState = {
  view: "top",
  inputData: {
    milk: false,
    aroma: 2,
    body: 2,
    sweet: 2,
    bitter: 2,
    color: 2
  },
  resultData: []
};

export const changeView = (view) => {
  return {
    type: "CHANGE_VIEW",
    view
  };
};
export const setMilk = (milk) => {
  return {
    type: "SET_MILK",
    milk
  };
};
export const setFlavour = (name, value) => {
  return {
    type: "SET_FLAVOUR",
    name,
    value
  };
};
export const setResult = (result) => {
  return {
    type: "SET_RESULT",
    result
  };
};

async function query(query, variables = {}) {
  return (await axios.post("/api", { query, variables })).data.data;
}
export const findByMilk = async (milk) => {
  const data = await query(
    `query ($input:Milk) {
        teas(input:$input){
          name
          season
          aroma
          body
          sweet
          bitter
          color
          kind
          recommend
          milk
        }
      }`,
    { input:  {milk:milk}}
  );
  return data.teas;
}

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "CHANGE_VIEW": {
      return { ...state, view: action.view};
    }
    case "SET_MILK": {
      let tempData = {...state.inputData, milk : action.milk}
      return { ...state, inputData: tempData};
    }
    case "SET_RESULT": {
      return { ...state, resultData: action.result};
    }
    case "SET_FLAVOUR": {
      let tempData = {...state.inputData, [action.name] : action.value}
      return { ...state, inputData: tempData};
    }
  }
  return state;
};

export const store = createStore(reducer);
