import React, { useEffect } from "react";
import Layout from "../components/dashboard/Layout";


const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout />
    </>
  );
};


export default Dashboard;