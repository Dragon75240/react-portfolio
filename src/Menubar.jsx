import { DownOutlined } from "@ant-design/icons";
import "./styles/Menubar.css";
import { Menu, ConfigProvider, theme } from "antd";
import { Link } from 'react-router-dom';

const Menubar = () => {
  const menuItems = [
    {
      key: "home",
      label: "Stevyn Shawcroft",
      link: ""
    },
    {
      type: "divider",
      style: { flexGrow: 1, order: 1 },
    },
    {
      key: "cover",
      label: "Cover",
      link: "home"
    },
    {
      key: "aboutme",
      label: "About Me",
      link: "about",
    },
    {
      key: "hobbies",
      label: "Hobbies",
      link: "hobbies"
    },
    {
      key: "links",
      label: "Links",
      link: "links"
    },
    {
      key: "path",
      label: "Pathways",
      link: "pathways"
    },
    {
      key: "career",
      icon: <DownOutlined/>,
      label: "School Career",
      link: "",
      children: [
        { key: "six", label: "6th Grade", link: "sixth-grade" },
        { key: "seven", label: "7th Grade", link: "seventh-grade" },
        { key: "eight", label: "8th Grade", link: "eight-grade" },
        { key: "nine", label: "9th Grade", link: "ninth-grade" }
      ],
    },
    {
      key: "skill",
      label: "Skills",
      link: "skills"
    },
  ];

  const renderMenuItem = (item) => {
    if (item.type === "divider") {
      return <Menu.Divider key={item.key} style={item.style} />;
    }

    if (item.children) {
      return (
        <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
          {item.children.map(renderMenuItem)}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={`/${item.link}`}>{item.label}</Link>
      </Menu.Item>
    );
  };


  return (<ConfigProvider
    theme={{ algorithm: theme.darkAlgorithm }}>
    <Menu mode="horizontal" className="menubar backdrop:inset-10">
      {menuItems.map(renderMenuItem)}
    </Menu></ConfigProvider>
  );
};

export default Menubar;
