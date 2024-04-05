import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { SideBar } from "../sidebar/sidebar.component";
import { NavBar } from "../navbar/navbar.component";
import { useLoadTasks } from "../task/state/task-query";
import { getTasks } from "../../core/services/task.service";

export function Layout(): JSX.Element {
  const { data, isLoading } = useLoadTasks(
    () => getTasks(),
    ["LoadTasks", ["tasks"]]
  );

  const [list, setList] = useState(data);
  useEffect(() => {
    setList(data);
  }, [data]);

  function onChangeFilter(value: string) {
    setList(
      data?.filter((item) =>
        item.title.toUpperCase().includes(value.toUpperCase())
      ) || []
    );
  }
  return (
    <div className="flex w-full h-full">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <NavBar onChangeFilter={onChangeFilter} />
        <Outlet context={{ list, isLoading }} />
      </div>
    </div>
  );
}
