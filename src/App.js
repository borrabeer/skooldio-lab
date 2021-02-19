import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { useDispatch, useSelector } from "react-redux";
import { getDatas } from "./actions/actions";
//components
import Card from "./components/Card";
const App = () => {
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const getDatasHandler = () => {
    dispatch(getDatas());
  };
  useEffect(() => {
    getDatasHandler();
  }, []);
  const dataList = () => {
    if (data) {
      return data.map((d) => {
        return <Card />;
      });
    }
  };
  return (
    <Provider store={store}>
      <React.Fragment>{dataList()}</React.Fragment>
    </Provider>
  );
};

export default App;
