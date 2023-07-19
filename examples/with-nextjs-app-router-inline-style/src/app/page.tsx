import {
  Button,
  Space,
  Divider,
} from 'antd';

const Home = function Home() {
  return (
    <>
      <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: 100 }}>
        <Space align='start'>
          <img
            style={{ width: 40, height: 40 }}
            src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            alt='Ant Design'
          />
          <h2 style={{ marginBottom: 0 }}>
            Ant Design (Without Sub Components)
          </h2>
        </Space>
        <Divider style={{ marginBottom: 60 }}>Divider</Divider>
        <Button type='primary' block href='/with-sub-components'>With Sub Components</Button>
      </section>
    </>
  );
}

export default Home;
