import axios from "axios";
import { mapFromApi, taskApi, TaskModel } from "../models/tasks/task-model";
import { StudentApi } from "../models/student/create-student";

export async function getTasks(): Promise<TaskModel[]> {
  const { data } = await axios.get<taskApi[]>("/api/tasks");

  return data.map((item) => mapFromApi(item));
}

export async function getTaskById(id: string): Promise<TaskModel> {
  const { data } = await axios.get<taskApi>(`/api/task/${id}`);
  return mapFromApi(data);
}

export async function createStudent(value: StudentApi): Promise<void> {
  {
    const formData = new FormData();
    formData.append("file", value.file);

    await axios.post(
      "/api/create_student",
      { ...value, file: formData },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
}
