import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { useDispatch, useSelector } from "react-redux";
import { getDatas } from "./actions/actions";
import axios from "axios";
//components
import Card from "./components/Card";
import Dashboard from "./components/Dashboard";
const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const datalist = await axios.get(
        "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"
      );
      setData(datalist);
      console.log(datalist);
    }
    fetchData();
  }, []);
  return (
    <Provider store={store}>
      <React.Fragment>
        <Dashboard data={data} />
      </React.Fragment>
    </Provider>
  );
};

export default App;
