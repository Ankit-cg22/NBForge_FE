import { useEffect, useState } from 'react';
import { Row, Col, Card, ConfigProvider, theme as antdTheme } from 'antd';
import TopBar from './components/TopBar';
import DragAndDrop from './components/DragAndDrop';
import ReactMarkdown from 'react-markdown';
import "./App.css";
function App() {
  const [instructions, setInstructions] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch('/instructions.md') // Fetch from the public directory
      .then(res => res.text())
      .then(setInstructions)
      .catch((err) => console.error("Failed to fetch instructions:", err));
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ConfigProvider
      theme={{        
        algorithm: darkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      }}
    >
      <div style={{ background: darkMode ? "#141414" : "#fff", minHeight: "100vh" }}>
        <TopBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Row style={{ minHeight: 'calc(100vh - 64px)' }}>
          <Col span={8} style={{ background: darkMode ? "#181818" : "#fafafa", padding: 24, borderRight: darkMode ? "1px solid #222" : "1px solid #f0f0f0" }}>
            <Card style={{ maxHeight: '90vh', overflowY: 'auto', background: darkMode ? "#232323" : "#fff", color: darkMode ? "#fff" : "#222" }} bodyStyle={{ color: darkMode ? "#fff" : "#222" }}>
              <ReactMarkdown>{instructions}</ReactMarkdown>
            </Card>
          </Col>
          <Col span={16} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: darkMode ? "#141414" : "#fff" }}>
            <DragAndDrop />
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default App;