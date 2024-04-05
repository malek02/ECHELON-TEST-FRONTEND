import React from "react";

import { ConfigProvider, Menu } from "antd";
import { VectorIcon } from "../../shared-component/icons/Vector";
import type { MenuProps } from "antd";
import { CategoryIcon } from "../../shared-component/icons/Category";
import { UserIcon } from "../../shared-component/icons/User";
import { MentorsIcon } from "../../shared-component/icons/Mentores";
import { MessageIcon } from "../../shared-component/icons/Message";
import { SettingIcon } from "../../shared-component/icons/Settings";
import { useLocation, useNavigate } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];
export function SideBar(): JSX.Element {
  const location = useLocation();
  const currentVIew = location.pathname.split("/").pop() || "";
  const navigate = useNavigate()
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const items: MenuProps["items"] = [
    getItem("Overview", "1", <CategoryIcon />),
    getItem("Task", "tasks", <UserIcon />),
    getItem("Mentors", "3", <MentorsIcon />),
    getItem("Message", "4", <MessageIcon />),
    getItem("Settings", "5", <SettingIcon />),
  ];

  return (
    <div className="flex flex-col gap-12 w-64 p-8">
      <div className="flex items-center gap-2">
        <VectorIcon />
        <h1 className="text-3xl">App</h1>
      </div>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              lineWidth: 0,
            },
          },
        }}
      >
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[currentVIew]}
          items={items}
          onClick={() => navigate(`/tasks`)}
        />
      </ConfigProvider>
    </div>
  );
}
