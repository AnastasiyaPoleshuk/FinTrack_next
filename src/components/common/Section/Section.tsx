"use client";

import { Space, Typography } from "antd";
import { ReactElement, ReactNode } from "react";

const { Title } = Typography;

type SectionProps = {
  content: ReactNode;
  title: string;
};

export const Section = ({ content, title }: SectionProps): ReactElement => {
  return (
    <Space size={"large"} vertical className="w-full mb-6">
      <Title>{title}</Title>
      {content}
    </Space>
  );
};
