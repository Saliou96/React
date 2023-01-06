import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import { Sidebar } from "flowbite-react";
import { HiChartPie,HiViewBoards,HiInbox,HiUser,HiShoppingBag,HiArrowSmRight,HiTable } from "react-icons/hi";


const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Abdoul Aziz Gueye</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              icon={HiChartPie}
            >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiViewBoards}
              label="Pro"
              labelColor="alternative"
            >
              Kanban
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiInbox}
              label="3"
            >
              Inbox
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiUser}
            >
              Users
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiShoppingBag}
            >
              Products
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiArrowSmRight}
            >
              Sign In
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiTable}
            >
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default ProfileCard;
