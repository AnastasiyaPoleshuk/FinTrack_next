import { Section } from "@components/common/Section";
import { TransactionsTable } from "./_components/TransactionsTable";

const Dashboard = () => {
  return (
    <>
      <Section content={<TransactionsTable />} title={"Last transactions"} />
    </>
  );
};

export default Dashboard;
