import { createContext, useReducer } from "react";

export const FormContext = createContext();

const initialValues = {
  validated: false,
  imageUrl: "",
  title: "",
  price: 0,
  description: "",
  cardColor: "#ffffff",
};

const carReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_VALUE_BY_NAME":
      return { ...state, [action.payload.name]: action.payload.value };

    case "CHANGE_FORM_VALIDIY":
      return { ...state, validated: action.payload };

    case "RESET_FORM_VALUES":
      return initialValues;

    default:
      return state;
  }
};

export const FormProvider = ({ children }) => {
  const [formValues, dispatch] = useReducer(carReducer, initialValues);

  const changeValue = ({ name, value }) => {
    dispatch({
      type: "CHANGE_VALUE_BY_NAME",
      payload: { name, value },
    });
  };

  const reset = () => {
    dispatch({
      type: "RESET_FORM_VALUES",
    });
  };

  const changeValidity = (validated) => {
    dispatch({
      type: "CHANGE_FORM_VALIDIY",
      payload: validated,
    });
  };

  return (
    <FormContext.Provider
      value={{ formValues, changeValue, reset, changeValidity }}
    >
      {children}
    </FormContext.Provider>
  );
};
