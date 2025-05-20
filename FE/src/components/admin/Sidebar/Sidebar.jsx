import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { MdOutlineDashboardCustomize, MdOutlineFastfood } from "react-icons/md";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const items = [
  {
    key: "dashboard",
    label: (
      <Link to="/admin/dashboard" className="sidebar__menu--item">
        <MdOutlineDashboardCustomize className="sidebar__menu--item-icon" />{" "}
        Thống kê
      </Link>
    ),
  },

  {
    key: "foods",
    label: (
      <Link to="/admin/foods" className="sidebar__menu--item">
        <MdOutlineFastfood className="sidebar__menu--item-icon" /> Món ăn
      </Link>
    ),
  },

  {
    key: "orders",
    label: (
      <Link to="/admin/orders" className="sidebar__menu--item">
        <MdOutlineFastfood className="sidebar__menu--item-icon" /> Đơn hàng
      </Link>
    ),
  },
];

const Sidebar = () => {
  return (
    <>
      <Sider theme="light" className="sidebar">
        <Menu
          items={items}
          className="sidebar__menu"
          defaultSelectedKeys={["dashboard"]}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
