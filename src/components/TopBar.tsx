import React from "react";
import { Layout, Typography, Switch } from "antd";
import { BulbOutlined, BulbFilled, GithubOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;

interface TopBarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ darkMode, toggleDarkMode }) => (
    <Header
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: darkMode ? "#1f1f1f" : "#fff",
            padding: "0 24px",
            boxShadow: "0 2px 8px #f0f1f2",
            height: 64,
        }}
    >
        <Text style={{ fontSize: 20, fontWeight: 700, letterSpacing: 1, color: darkMode ? "#fff" : undefined }}>
            NBForge
        </Text>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Switch
                checked={darkMode}
                onChange={toggleDarkMode}
                checkedChildren={<BulbFilled />}
                unCheckedChildren={<BulbOutlined />}
                style={{ marginLeft: 16 }}
            />
            <a
                href="https://github.com/Ankit-cg22/NBForge"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: darkMode ? "#fff" : undefined, fontSize: 22 }}
            >
                <GithubOutlined />
            </a>

        </div>
    </Header>
);

export default TopBar;