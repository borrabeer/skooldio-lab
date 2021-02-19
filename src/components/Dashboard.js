import React, { useEffect, useState } from "react";

//components
import Card from "./Card";

const Dashboard = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(props.data);
  }, []);
  return <React.Fragment></React.Fragment>;
};

export default Dashboard;
