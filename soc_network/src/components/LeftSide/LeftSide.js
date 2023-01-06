import React from 'react'
import { Sidebar } from "flowbite-react";
import { HiChartPie,HiViewBoards,HiInbox,HiUser,HiShoppingBag,HiArrowSmRight,HiTable } from "react-icons/hi";
import './ProfileCard.css';

const LeftSide = () => {
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <div className="ProfileCard">
                <div className="ProfileName">
                    <span>Zendaya MJ</span>
                    <span>Senior UI/UX Designer</span>
                </div>
                <hr />
            </div>
        </div>

        <div className="info">
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
    </div>
  )
}

export default LeftSide