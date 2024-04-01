import React from "react";

import { TaskCard } from "../taskCard/taskCard.component";
import { useOutletContext } from "react-router-dom";
import { TaskModel } from "../../../core/models/tasks/task-model";
import { Row } from "antd";

export function TaskList(): JSX.Element {
  const { data, isLoading } = useOutletContext<{
    data: TaskModel[];
    isLoading: boolean;
  }>();
  console.log("result", data);
  return (
    <div className="bg-zinc-50 p-10 flex gap-6 flex-wrap flex-1 overflow-auto">
      {!isLoading ?data.map((item) => (
        <Row wrap={true} gutter={[16, 16]}>
        <TaskCard data={item} />
        </Row>
      )):<div>loading...!</div>}
    </div>
  );
}
