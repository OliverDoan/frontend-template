import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { items } from './ItemsNavbar';

export const Header = () => {
  const navigate = useNavigate();
  const handleClickNavbar = (key: string) => {
    if (key === 'signout') {
      //TODO
    } else {
      navigate(key);
    }
  };

  return (
    <Layout className='layout'>
      <Menu
        theme='dark'
        mode='horizontal'
        defaultSelectedKeys={['1']}
        items={items}
        onClick={(e) => handleClickNavbar(e.key)}
      />
    </Layout>
  );
};
