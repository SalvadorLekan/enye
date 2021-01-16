import { createStore } from "redux";
export const storeResult = (data) => ({
  type: "STORE_RESULT",
  data,
});
export const changeInputText = (data) => ({
  type: "CHANGE_INPUT_TEXT",
  data,
});
export const changePageIndex = (data) => ({
  type: "CHANGE_PAGE_INDEX",
  data,
});
export const changeApprovedGender = (data) => ({
  type: "CHANGE_APPROVED_GENDER",
  data,
});
export const changePaymentMethod = (data) => ({
  type: "CHANGE_PAYMENT_METHOD",
  data,
});

const initialState = {
  result: [],
  inputText: "",
  pageIndex: 1,
  approvedGender: ["Male", "Female", "Prefer to skip"],
  paymentMethod: ["cc", "check", "money order", "paypal"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_RESULT":
      return { ...state, result: action.data };
    case "CHANGE_INPUT_TEXT":
      return { ...state, inputText: action.data };
    case "CHANGE_PAGE_INDEX":
      return { ...state, pageIndex: action.data };
    case "CHANGE_APPROVED_GENDER":
      return { ...state, approvedGender: action.data };
    case "CHANGE_PAYMENT_METHOD":
      return { ...state, paymentMethod: action.data };
    default:
      return state;
  }
};

export const store = createStore(reducer);
