import React from "react";
import * as Yup from "yup";
import { useParams } from "react-router";

import { useCreateStudent, useGetTaskById } from "../state/task-query";
import { getTaskById } from "../../../core/services/task.service";
import { CheckCircleFilled, UsergroupDeleteOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useFormik } from "formik";
import { FolderIcon } from "../../../shared-component/icons/Folder";
export function TaskDetail(): JSX.Element {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    file: Yup.mixed().required("File is required"),
  });
  const { taskId } = useParams();

  const { data } = useGetTaskById(() => {
    return getTaskById(taskId as string);
  }, [taskId || "", ["task"]]);

  const createStudent = useCreateStudent();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      file: {} as File,
    },
    validationSchema,
    onSubmit: (values) => {
      createStudent.mutate(values);
    },
  });

  return (
    <div className=" p-8 bg-zinc-50 flex gap-6  flex-1 overflow-auto">
      <div className=" bg-white rounded-[10px] flex flex-col gap-5 flex-[1.7]">
        <img
          className="h-[360px] w-full rounded-[10px]"
          src={data?.image}
          alt=""
        />
        <div className="p-4 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-3xl">{data?.title}</span>
            <span className="text-slate-400 text-sm">
              UI UX Design . Apps Design
            </span>
            <span className=" text-xs flex gap-2">
              <UsergroupDeleteOutlined size={10} /> 200 Students Involved
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-2xl">Description</span>

            <span className=" text-xs ">{data?.description}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl">Essence of Assessment</span>
            <div className="flex flex-col gap-2">
              {data?.essenceOfAssessment.map((item) => (
                <div key={item} className="flex gap-2 text-sm">
                  <CheckCircleFilled style={{ color: "#546FFF" }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="bg-white rounded-[10px] p-5 flex flex-col gap-8 flex-1">
          <span className="text-sm">Assigned Assignments</span>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Creating Awesome App</span>
            <span className="text-slate-400 text-xs">{data?.title}</span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xl">Detail Student</span>
            <>
              <span className="text-slate-400 text-sm">First Name</span>
              <Input
                id={"firstName"}
                name={"firstName"}
                placeholder={"First Name"}
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </>
            <>
              <span className="text-slate-400 text-sm">Last Name</span>
              <Input
                id={"lastName"}
                placeholder={"Last Name"}
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </>

            <span className="text-xl">File Task</span>
            <span className="text-slate-400 text-sm">File submissions</span>
            <Dragger
              maxCount={1}
              multiple={false}
              height={160}
              name="file"
              onChange={(info) => {
                formik.setFieldValue("file", info.file.originFileObj);
              }}
            >
              <div className="flex flex-col items-center ">
                <FolderIcon color="#546FFF" />
              </div>
            </Dragger>
            <span className="text-slate-400 text-xs">
              *drag or browser from device
            </span>
          </div>

          <Button
            loading={createStudent.isLoading}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
