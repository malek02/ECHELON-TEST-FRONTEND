import { useQuery } from "react-query";
import { TaskModel } from "../../../core/models/tasks/task-model";
import { notification } from "antd";

export type QueryKeyT = [string, object | undefined];

export const useLoadTasks = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryFn: (params: any) => Promise<TaskModel[]>,
  queryKey: QueryKeyT
) => {
  return useQuery(queryKey, queryFn, {
    onError: () => {
      notification.error({
        message: "Get Tasks Error",
        description: "Something went wrong. Please try again!",
      });
    },
  });
};
