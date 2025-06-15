import { Form, Input, Modal } from "antd";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { fetchAddCategory } from "~/redux/category/categorySlice";

const AddCategory = ({ addCategory, setAddCategory }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const hanldeSubmit = (values) => {
    toast.promise(dispatch(fetchAddCategory(values)), {
      pending: "Đang thêm...",
    });
  };

  return (
    <div className="add-category">
      <Modal
        className="modal"
        open={addCategory}
        onCancel={() => setAddCategory(false)}
        okText="Thêm"
        cancelText="Hủy"
        onOk={() => form.submit()}
      >
        <div className="modal__header">
          <h2 className="modal__header--title">Thêm loại</h2>
        </div>

        <div className="modal__body">
          <Form form={form} layout="vertical" onFinish={hanldeSubmit}>
            <Form.Item
              label="Tên loại"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên loại",
                },

                {
                  pattern: /^\D+$/,
                  message: "Tên loại không được chứa số",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default AddCategory;
