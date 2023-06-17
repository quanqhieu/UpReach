import { Button, Checkbox, Form, Input } from "antd";
import HeaderHomepage from "../../Components/Layouts/Header/HeaderHomepage";

const SingUp = () => {
  return (
    <>
      <HeaderHomepage />
      <Form
        name="signup"
        className="signUpForm"
        initialValues={{ remember: true }}
        style={{ marginTop: "80px" }}
      >
        <Button type="primary" htmlType="submit" className="signUpGoogle">
          Đăng ký bằng Google
        </Button>
        <Form.Item
          name="entername"
          rules={[{ required: true, message: "Please input your Full Name!" }]}
        >
          <Input placeholder="Enter full name" />
        </Form.Item>
        <Form.Item
          name="enteremail"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Youremail@example.com" />
        </Form.Item>
        <Form.Item
          name="enterpassword"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            type="password"
            placeholder="Enter your password at least 8 characters"
          />
        </Form.Item>
        <Form.Item
          name="confirmpassword"
          rules={[
            { required: true, message: "Please input confirm Password!" },
          ]}
        >
          <Input type="password" placeholder="Enter confirm password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="signUpBtn">
            Sign Up
          </Button>
          <a href="">Already have an account?</a>
          <p>Login</p>
        </Form.Item>
      </Form>
    </>
  );
};
export default SingUp;
