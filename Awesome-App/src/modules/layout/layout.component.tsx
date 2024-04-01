import React from "react";
import { Outlet } from "react-router-dom";

import { SideBar } from "../sidebar/sidebar.component";
import { NavBar } from "../navbar/navbar.component";
import { useLoadTasks } from "../task/satate/task-query";
import { getTasks } from "../../core/services/task.service";

export function Layout(): JSX.Element {
  const {data, isLoading} = useLoadTasks(
    () => getTasks("https://echelon-io-test.onrender.com/tasks"),
    ["LoadTasks", ["tasks"]]
  );
  console.log(data);
  return (
    <div className="flex w-full h-full">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <NavBar />
        <Outlet context={{ data ,isLoading}}  />
      </div>
    </div>
  );
}
