import {
  LoginOutlined,
  SettingOutlined,
  HomeOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem('Home', '/', <HomeOutlined />),
  getItem('Sign in', '/login', <LoginOutlined />),
  getItem('Oliver Doan', 'sub1', <UserOutlined />, [
    getItem('Profile', '3', <SettingOutlined />),
    getItem('Sign out', '4', <LogoutOutlined />),
  ]),
];
