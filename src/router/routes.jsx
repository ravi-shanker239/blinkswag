import { DashHome,Product } from "../pages";
export const dashBoard = [
    {
      path: "/",
      component: <DashHome />,
      layout: true,
    },
    {
      path: "/products",
      component: <Product />,
      layout: true,
    },
    // {
    //   path: "/user/profile",
    //   component: <Profile />,
    //   layout: true,
    // },
    
    // {
    //   path: "/transactions",
    //   component: <Transaction />,
    //   layout: true,
    // },
    // {
    //   path: "/users",
    //   component: <User />,
    //   layout: true,
    // },
  ];