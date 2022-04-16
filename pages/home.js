import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Learn from "../components/Learn";

function Home() {
  return (
    <>
      <Layout title="Home">
        <Hero />
        <Cards />
        <Learn />
      </Layout>
    </>
  );
}

export default Home;
