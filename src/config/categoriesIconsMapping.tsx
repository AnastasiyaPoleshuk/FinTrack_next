import {
  ShoppingCartOutlined,
  HeartOutlined,
  CarOutlined,
  BankOutlined,
} from "@ant-design/icons";

const defaultIconSize = 28;

export const categoriesIconsMapping = {
  eat: (
    <ShoppingCartOutlined
      style={{ fontSize: defaultIconSize, color: "rgb(64, 156, 3)" }}
    />
  ),
  health: (
    <HeartOutlined
      style={{ fontSize: defaultIconSize, color: "rgb(238, 113, 113)" }}
    />
  ),
  car: (
    <CarOutlined
      style={{ fontSize: defaultIconSize, color: "rgb(3, 51, 156)" }}
    />
  ),
  house: (
    <BankOutlined
      style={{ fontSize: defaultIconSize, color: "rgba(96, 67, 165, 1)" }}
    />
  ),
};
