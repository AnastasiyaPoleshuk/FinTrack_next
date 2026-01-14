"use client";

import { LabelWithIcon } from "@components/common/LabelWithIcon";
import { categoriesIconsMapping } from "@config/categoriesIconsMapping";
import { Table } from "antd";
import { ReactElement, useMemo } from "react";

const columns = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];

export const TransactionsTable = (): ReactElement => {
  const dataSource = useMemo(() => {
    return [
      {
        key: "1",
        category: (
          <LabelWithIcon icon={categoriesIconsMapping.house} title={"House"} />
        ),
        date: "10.04.2025",
        amount: "120",
      },
      {
        key: "2",
        category: (
          <LabelWithIcon icon={categoriesIconsMapping.eat} title={"Eat"} />
        ),
        date: "15.09.2025",
        amount: "10",
      },
      {
        key: "3",
        category: (
          <LabelWithIcon
            icon={categoriesIconsMapping.health}
            title={"Health"}
          />
        ),
        date: "24.06.2025",
        amount: "340",
      },
      {
        key: "4",
        category: (
          <LabelWithIcon icon={categoriesIconsMapping.eat} title={"Eat"} />
        ),
        date: "31.12.2025",
        amount: "12",
      },
      {
        key: "5",
        category: (
          <LabelWithIcon icon={categoriesIconsMapping.car} title={"Car"} />
        ),
        date: "16.12.2025",
        amount: "95",
      },
    ];
  }, []);
  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};
