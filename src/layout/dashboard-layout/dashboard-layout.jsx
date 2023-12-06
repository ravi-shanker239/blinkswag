import React from "react";
import DashboardHeader from "../../components/dash-header";
import SideBar from "../../components/sidebar";
// import { AdminDrawer, AdminHeader } from "../../component";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <SideBar />
        <main
          style={{
            width: "100%",
            background: "var(--primary-nero-shade-3, #F2F4F7)"
          }}
        >
          <DashboardHeader />
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
