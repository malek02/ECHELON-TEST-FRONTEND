import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { TaskList } from "../modules/task/task-list/taskList.component";
import { Layout } from "../modules/layout/layout.component";



export function AppRouter() {
  const routes = (
    <Route path="/" element={<Layout />}>
      <Route path="" element={<TaskList />} />
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}
