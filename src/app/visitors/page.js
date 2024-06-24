"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../Components/Layouts/DashboardLayout";
import DynamicTable from "../Components/Table/DynamicTable";

const Page = () => {
  const [visitorData, setVisitorData] = useState([]);

  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const response = await axios.get(
          "https://api.aksharenterprise.net/visitor"
        );
        setVisitorData(response.data);
      } catch (error) {
        console.error("Error fetching visitor data:", error);
      }
    };

    fetchVisitorData();
  }, []);

  const columns = [
    { title: "Order ID", key: "orderId" },
    { title: "User ID", key: "userId" },
    { title: "Phone No", key: "phoneNo" },
    { title: "Email", key: "emailId" },
    { title: "Name", key: "name" },
    { title: "Address Line 1", key: "address.line1" },
    { title: "Address Line 2", key: "address.line2" },
    { title: "Address Line 3", key: "address.line3" },
    { title: "Date of Birth", key: "dob" },
    { title: "Anniversary Date", key: "anniversaryDate" },
    { title: "Game", key: "game" },
    { title: "Table", key: "table" },
    { title: "Agreed to Terms", key: "agreeToTerms" },
  ];

  return (
    <DashboardLayout>
      <h1>Members:</h1>
      <DynamicTable columns={columns} data={visitorData} />
    </DashboardLayout>
  );
};

export default Page;
