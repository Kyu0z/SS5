import { useState } from "react";
import {
  Layout,
  Typography,
  Col,
  Row,
  Select,
  Button,
  Form,
  Input,
} from "antd";
import HeaderMain from "../Dashboard/HeaderMain";
import SidebarMain from "../Dashboard/SidebarMain";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";

const { Title } = Typography;

const { Option } = Select;

const layout = {
  labelCol: { span: 24, color: "#7C7E8A" },
  wrapperCol: { span: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 18, span: 6 },
};

const Services = () => {
  const [form] = Form.useForm();

  const [editor, setEditor] = useState("");

  const notification = () => {
    const type = form.getFieldValue("type");
    const roomId = form.getFieldValue("roomId");
    const htmlNotify = `
      <p>Loại dịch vụ: ${type}</p>
      <p>Số phòng: ${roomId}</p>
      ${editor}
    `;
    toast.warning(<div dangerouslySetInnerHTML={{ __html: htmlNotify }} />, {
      autoClose: 3000,
      closeOnClick: false,
      closeButton: true,
      hideProgressBar: true,
    });
  };

  const handleNotify = () => {
    notification();
    form.resetFields();
  };

  return (
    <div>
      <Layout>
        <HeaderMain />
      </Layout>
      <Row style={{ margin: "2rem 1rem" }}>
        <Col span={20} push={4}>
          <div className="services max-w-[626px] mx-auto my-0">
            <Title level={3} className="!font-bold">
              Đặt dịch vụ
            </Title>
            <Form
              {...layout}
              form={form}
              onFinish={handleNotify}
              name="control-hooks"
              style={{ maxWidth: 600 }}
            >
              <Form.Item
                name="type"
                label="Loại"
                rules={[{ required: true, message: "Hãy chọn yêu cầu" }]}
              >
                <Select
                  size="large"
                  placeholder="Select a option.."
                  allowClear
                  style={{
                    background: "#FFFFFF",
                    border: "2px solid #DEDEE0",
                    borderRadius: "8px",
                  }}
                >
                  <Option value="Repair">Sửa chữa</Option>
                  <Option value="Service">Dịch vụ</Option>
                  <Option value="Utilities">Tiện ích</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="roomId"
                label="Số phòng"
                rules={[{ required: true, message: "Hãy chọn số phòng" }]}
              >
                <Input
                  size="large"
                  defaultValue="R-"
                  style={{
                    background: "#FFFFFF",
                    border: "2px solid #DEDEE0",
                    borderRadius: "8px",
                  }}
                />
              </Form.Item>
              <Title level={3} className="!font-bold">
                Nội dung
              </Title>
              <Form.Item
                name="content"
                rules={[{ required: true, message: "Hãy nhập nội dung" }]}
              >
                <Editor
                  apiKey="bbgcjf3wub8tp920nmmvpenzept1801yb7d741hjpw3zog91"
                  value={editor}
                  onEditorChange={setEditor}
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                  }}
                />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    background: "#ED712E",
                    borderRadius: "8px",
                    width: "160px",
                    height: "50px",
                    color: "#fff",
                    fontSize: "1rem",
                  }}
                >
                  Gửi
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={4} pull={20}>
          <SidebarMain />
        </Col>
      </Row>
    </div>
  );
};

export default Services;
