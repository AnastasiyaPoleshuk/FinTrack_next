"use client";

import { Flex, Typography } from "antd";
import { ReactElement, ReactNode } from "react";

const { Title } = Typography;

type LabelWithIconProps = {
  icon: ReactNode;
  title: string;
};

export const LabelWithIcon = ({
  icon,
  title,
}: LabelWithIconProps): ReactElement => {
  return (
    <Flex gap={"small"} align={"center"}>
      {icon}
      <Title level={5}>{title}</Title>
    </Flex>
  );
};
