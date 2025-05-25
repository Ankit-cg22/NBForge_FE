import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Text } = Typography;

const TopBar: React.FC = () => (
  <Header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#fff",
      padding: "0 24px",
      boxShadow: "0 2px 8px #f0f1f2",
      height: 64,
    }}
  >
    <Text style={{ fontSize: 20, fontWeight: 700, letterSpacing: 1 }}>NBForge</Text>
    <Text strong>MadeByAnkit</Text>
  </Header>
);

export default TopBar;