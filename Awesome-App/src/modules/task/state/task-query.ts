import { useMutation, useQuery } from "react-query";
import { notification } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { TaskModel } from "../../../core/models/tasks/task-model";
import { createStudent } from "../../../core/services/task.service";
import { StudentModel } from "../../../core/models/student/create-student";

export type QueryKeyT = [string, object | undefined];

export const useLoadTasks = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryFn: (params: any) => Promise<TaskModel[]>,
  queryKey: QueryKeyT
) => {
  const location = useLocation();
  return useQuery(queryKey, queryFn, {
    enabled: location.pathname.includes("tasks"),
    onError: () => {
      notification.error({
        message: "Get Tasks Error",
        description: "Something went wrong. Please try again!",
      });
    },
  });
};

export const useGetTaskById = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryFn: (params: any) => Promise<TaskModel>,
  queryKey: QueryKeyT
) => {
  const navigate = useNavigate();
  return useQuery(queryKey, queryFn, {
    onError: () => {
      navigate(`/tasks`)
      notification.error({
        message: "Get Task Detail Error",
        description: "Something went wrong. Please try again!",
        placement:"bottomRight"
      });
    },
  });
};

export const useCreateStudent = () => {
  return useMutation((params: StudentModel) => createStudent(params), {
    onError: () => {
      notification.error({
        message: "Create Student  Error",
        description: "Something went wrong. Please try again!",
        placement:"bottomRight"
      });
    },

    onSuccess: (data) => {
      console.log("data",data)
      notification.success({
        message: "Success",
        description: "Create a new student success",
        placement:"bottomRight"
        
      });
    },
  });
};
