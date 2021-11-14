import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiData } from "../redux/actions/action";
import { Line } from "react-chartjs-2";
import createConfig from "../auxFunctions/chartConfig";

const Dashboard = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.datos);

  useEffect(() => {
    dispatch(apiData());
  }, [dispatch]);

  const config = createConfig(state);

  return (
    <>
      <Line data={config.data} options={config.options} />
    </>
  );
};

export default Dashboard;
