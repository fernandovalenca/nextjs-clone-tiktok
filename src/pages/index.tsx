import { Layout } from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <Feed posts={{}} />
      <Suggestions users={users} />
    </Layout>
  );
};

export default Index;
