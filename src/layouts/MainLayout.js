import { Layout, Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

function getItem(label, key, path) {
  return {
    key,
    label: path ? <Link to={path}> {label} </Link> : label,
  };
}

const items = [
  getItem('설문조사 목록', 'list', '/list'),
  //   getItem('설문조사 생성', 'builder', '/builder'),
];

function MainLayout({ children }) {
  const location = useLocation();
  const selectedKey = location.pathname === '/' ? 'list' : location.pathname.substring(1);

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
        <Menu
          theme="dark"
          defaultSelectedKeys={['list']}
          selectedKeys={[selectedKey]}
          mode="inline"
          items={items}
        />{' '}
      </Sider>{' '}
      <Layout>
        <Header />
        <Content style={{ margin: '16px' }}> {children} </Content>{' '}
      </Layout>{' '}
    </Layout>
  );
}

export default MainLayout;
