import React from "react";

import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { TaskList } from "../modules/task/task-list/taskList.component";
import { Layout } from "../modules/layout/layout.component";
import { TaskDetail } from "../modules/task/task-detail/taskDetail.component";



export function AppRouter() {
  const routes = (
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate  to="tasks" />} />
      <Route path="tasks" element={<TaskList />} />
      <Route path="task/:taskId" element={<TaskDetail />} />
      <Route path="*" element={<TaskList />} />
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={router} />;
}
