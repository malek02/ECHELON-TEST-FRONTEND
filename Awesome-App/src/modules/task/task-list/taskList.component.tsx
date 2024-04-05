import React from "react";

import { TaskCard } from "../taskCard/taskCard.component";
import { useOutletContext } from "react-router-dom";
import { TaskModel } from "../../../core/models/tasks/task-model";
import { Card, Row } from "antd";

export function TaskList(): JSX.Element {
  const { list, isLoading } = useOutletContext<{
    list: TaskModel[];
    isLoading: boolean;
  }>();

  return (
    <div className="bg-zinc-50 p-10 flex gap-6 flex-wrap flex-1 overflow-auto">
      {!isLoading
        ? list?.map((item) => (
            <Row key={item.id} wrap={true} gutter={[16, 16]}>
              <TaskCard data={item} />
            </Row>
          ))
        : Array.from({ length: 8 }, (_, i) => (
            <Row key={i} wrap={true} gutter={[16, 16]}>
              <Card loading style={{ width: "328px", height: "315" }}>
                Whatever content
              </Card>
            </Row>
          ))}
    </div>
  );
}
