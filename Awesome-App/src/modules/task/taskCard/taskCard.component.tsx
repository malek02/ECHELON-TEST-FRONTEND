import React from "react";

import { Avatar, Progress } from "antd";
import { TimeIcon } from "../../../shared-component/icons/TimerIcon";
import { TaskModel } from "../../../core/models/tasks/task-model";
import { useNavigate } from "react-router";


export interface TaskCardProps {
  data: TaskModel;
}
export function TaskCard(props: TaskCardProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      className="flex bg-white flex-col gap-2 cursor-pointer rounded-[12px] p-6 max-h-[315px] w-[328px] "
      onClick={() => navigate(`/task/${props.data.id}`)}
    >
      <img
        className="h-[110px] w-[280px] rounded-[10px]"
        src={props.data.image}
        alt=""
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-lg">{props.data.title}</h3>
        <h5 className="text-l text-neutral-500 ">{props.data.domain}</h5>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg">Progress</h3>
          <span className=" text-[#546FFF]">{`${props.data.progression} %`}</span>
        </div>
        <Progress
          percent={props.data.progression}
          strokeColor={"#546FFF"}
          trailColor={"#BAC8FF"}
          showInfo={false}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1">
          <TimeIcon />
          {props.data.timeNumber}
        </span>

        <Avatar.Group>
          {props.data.participants.map((item) => (
            <Avatar key={item} size="small">
              {item}
            </Avatar>
          ))}
        </Avatar.Group>
      </div>
    </div>
  );
}
