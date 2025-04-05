import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Sider } = Layout;

function getItem(label, key, children) {
  return {
    key,
    children,
    label,
  };
}
const items = [getItem('설문조사 관리', <PieChartOutlined />)];

function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        />{' '}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />{' '}
      </Sider>{' '}
      <Layout>
        <Header /> <Content> {children} </Content>{' '}
      </Layout>{' '}
    </Layout>
  );
}

export default MainLayout;
