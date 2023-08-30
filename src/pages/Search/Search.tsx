import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Select, Button } from "antd";
import { difficultyLevels, muscleGroups, types } from "@/consts";
import styles from "./Search.module.scss";
import { getCleanedValues } from "@/utils";

const { useForm, Item } = Form;
const { Option } = Select;

export const Search = () => {
  const [form] = useForm();
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const onFinish = (values: Record<string, string>) => {
    const notEmptyValues = getCleanedValues(values);
    const searchParams = new URLSearchParams(notEmptyValues);
    navigate(`/searchResult?${searchParams.toString()}`);
  };

  const handleFieldChange = () => {
    const values = Object.values(form.getFieldsValue());
    const isDisabled = values.every((value) => !value);
    setDisabled(isDisabled);
  };

  const Selectors = () => (
    <>
      <Item label="Тип" name="type">
        <Select placeholder="Виберіть тип">
          {types.map((type) => (
            <Option key={type.value} value={type.value}>
              {type.label}
            </Option>
          ))}
        </Select>
      </Item>
      <Item label="М'яз" name="muscle">
        <Select placeholder="Виберіть м'яз">
          {muscleGroups.map((muscle) => (
            <Option key={muscle.value} value={muscle.value}>
              {muscle.label}
            </Option>
          ))}
        </Select>
      </Item>
      <Item label="Складність" name="difficulty">
        <Select placeholder="Виберіть складність">
          {difficultyLevels.map((difficulty) => (
            <Option key={difficulty.value} value={difficulty.value}>
              {difficulty.label}
            </Option>
          ))}
        </Select>
      </Item>
    </>
  );

  return (
    <Form
      onFieldsChange={handleFieldChange}
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className={styles.root}
    >
      <Item label="Назва" name="name">
        <Input placeholder="Введіть назву" />
      </Item>
      <Selectors />
      <Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={disabled}
          className={styles.button}
        >
          Пошук
        </Button>
      </Item>
    </Form>
  );
};
