import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import TopBar from './components/TopBar';
import DragAndDrop from './components/DragAndDrop';
import ReactMarkdown from 'react-markdown';

function App() {
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    fetch('/src/assets/instructions.md')
      .then(res => res.text())
      .then(setInstructions);
  }, []);

  return (
    <div>
      <TopBar />
      <Row style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Col span={8} style={{ background: '#fafafa', padding: 24, borderRight: '1px solid #f0f0f0' }}>
          <Card style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <ReactMarkdown>{instructions}</ReactMarkdown>
          </Card>
        </Col>
        <Col span={16} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
          <DragAndDrop />
        </Col>
      </Row>
    </div>
  );
}

export default App;