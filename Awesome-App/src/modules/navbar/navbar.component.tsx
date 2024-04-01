import React from "react";

import { Avatar, ConfigProvider, Input, Select } from "antd";

import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { VueSaxIcon } from "../../shared-component/icons/Vuesax";
import { SortIcon } from "../../shared-component/icons/SortIcon";

export function NavBar(): JSX.Element {
  return (
    <div className="h-48 w-full p-8 flex flex-col gap-5 ">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl">Explore Task</h2>
        <div className="flex gap-4">
          <BellOutlined />
          <Avatar icon={<UserOutlined />} />
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <ConfigProvider
          theme={{
            components: {
              Select: {
                controlHeight: 52,
                borderRadius: 10,
                paddingSM: 8,
              },
              Input: {
                controlHeight: 52,
                borderRadius: 10,
              },
            },
          }}
        >
          <div className="flex-0 w-[40%]">
            <Input placeholder="Search  Task" addonAfter={<SearchOutlined />} />
          </div>
          <div className="flex items-center gap-5">
            <Select
              suffixIcon={<></>}
              placeholder={
                <div className="flex items-center gap-2">
                  <VueSaxIcon /> <span className="text-stone-800">Category</span>
                </div>
              }
           
            />
            <Select
              suffixIcon={<></>}
              placeholder={
                <div className="flex items-center gap-2">
                  <SortIcon /> <span className="text-stone-800">Sort By : Deadline</span>
                </div>
              }
              
            />
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}
