import React, { useState } from "react";
import "./InfoUser.css";
import { Button, Form, Input, Modal } from "antd";
import { useSelector } from "react-redux";
export default function InfoUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {};

  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload(true);
  };

  const user = useSelector((state) => state.auth.login?.currentUser);
  return (
    <div>
      <div className="infoUser">
        <h2>THÔNG TIN NGƯỜI DÙNG</h2>
        <Form
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal"
          style={{
            minWidth: 600,
          }}
        >
          <Form.Item label="Họ Tên">
            <Input
              placeholder="Họ Tên"
              id="fullName"
              name="fullName"
              value={user?.name}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              placeholder="Email"
              id="email"
              name="email"
              disabled
              value={user?.email}
            />
          </Form.Item>
          <Form.Item label="SĐT">
            <Input
              placeholder="SĐT"
              id="phone"
              name="phone"
              value={user?.phone}
            />
          </Form.Item>
          <div className="button">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={showModal}>
                Đổi Mật Khẩu
              </Button>
              <Modal
                title="Thay đổi mật khẩu"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form
                  className="form_addfilm"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 8,
                  }}
                  layout="horizontal"
                  style={{
                    minWidth: 600,
                  }}
                >
                  <Form.Item label="Mật khẩu hiện tại">
                    <Input
                      placeholder="Mật khẩu hiện tại"
                      id="nameRoom"
                      name="nameRoom"
                    />
                  </Form.Item>
                  <Form.Item label="Mật khẩu mới">
                    <Input
                      placeholder="Mật khẩu mới"
                      id="columns"
                      name="columns"
                    />
                  </Form.Item>
                  <Form.Item label="Xác nhận mật khẩu mới">
                    <Input
                      placeholder="Xác nhận mật khẩu mới"
                      id="rows"
                      name="rows"
                    />
                  </Form.Item>
                </Form>
              </Modal>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
