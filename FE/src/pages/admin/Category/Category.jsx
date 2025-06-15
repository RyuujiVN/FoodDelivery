import { Button, Card, Flex, Input } from "antd";
import { useState } from "react";
import AddCategory from "./AddCategory";

const columns = [
  {
    key: "name",
    title: "Tên loại",
  },

  {
    key: "status",
    title: "Trạng thái",
  },

  {
    key: "action",
    title: "Hành động",
  },
];

const Category = () => {
  const [addCategory, setAddCategory] = useState(false);

  return (
    <div className="category">
      <div className="category__header box-head">
        <h2 className="category__header--title box-head__title">Loại món</h2>
      </div>

      <div className="category__body">
        <Card className="card">
          <div className="card__header">
            <Flex justify="space-between" align="center">
              <Input.Search
                placeholder="Tìm kiếm..."
                className="input__search"
              />
              <Button type="primary" onClick={() => setAddCategory(true)}>
                Thêm loại
              </Button>
            </Flex>
          </div>
        </Card>
      </div>

      {addCategory && (
        <AddCategory
          addCategory={addCategory}
          setAddCategory={setAddCategory}
        />
      )}
    </div>
  );
};

export default Category;
