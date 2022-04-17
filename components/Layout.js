import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ title, children, sidebar }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title ? `${title} - Nextjs Auth` : "Nextjs Auth"}</title>
      </Head>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main role="main" className={`${sidebar ? `withSidebar` : ``}`}>
          {sidebar && <Sidebar />}
          {children}
          {sidebar && <Footer />}
        </main>

        {!sidebar && <Footer />}
      </div>
    </>
  );
};

export default Layout;
