import { Form, InputNumber, Switch, Typography } from "antd";

function Detail(props: { name: string }) {
  return (
    <section style={{ marginTop: 48, marginBottom: 40 }}>
      <Typography.Title style={{textAlign: "center"}}>{props.name}</Typography.Title>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Form.Item label="数字输入框">
          <InputNumber min={1} max={10} defaultValue={3} />
          <span className="ant-form-text"> Machine</span>
          <a href="https://ant.design">Link</a>
        </Form.Item>
        <Form.Item label="Switch">
          <Switch defaultChecked />
        </Form.Item>
      </Form>
    </section>
  );
}

export default Detail;

export const getStaticProps = () => ({
  props: {
    name: "SSG Page",
  },
})
