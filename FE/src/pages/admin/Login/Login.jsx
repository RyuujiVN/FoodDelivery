import { Button, Flex, Form, Input, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import "~/pages/admin/Login/Login.scss";

const Login = () => {
  const { Title, Text } = Typography;

  return (
    <>
      <div className="login">
        <div className="login__container">
          {/* Login Left */}
          <div className="login__introduce">
            <div className="login__introduce--content">
              <h2 className="login__introduce--title">
                Chào mừng đến với trang admin Food Delivery
              </h2>
              <p className="login__introduce--description">
                Vui lòng đăng nhập vào.
              </p>
            </div>
          </div>

          {/* Login Right */}
          <div className="login__form">
            <h2
              className="login__form--title"
            >
              Đăng nhập
            </h2>
            <Form gutter={24} layout="vertical">
              <Form.Item
                className="login__form--item"
                label="Tài khoản:"
                name="account"
                layout="vertical"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tài khoản",
                  },
                ]}
              >
                <Input
                  placeholder="Tài khoản đăng nhập..."
                  variant="outlined"
                  className="login__form--input"
                />
              </Form.Item>

              <Form.Item
                className="login__form--item"
                label="Mật khẩu:"
                name="password"
                layout="vertical"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Mật khẩu..."
                  variant="outlined"
                  className="login__form--input"
                />
              </Form.Item>

              <Link to="/admin/forgot-password"><Text>Quên mật khẩu?</Text></Link>

              <Form.Item className="login__form--button" >
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                  >
                    Đăng nhập
                  </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
