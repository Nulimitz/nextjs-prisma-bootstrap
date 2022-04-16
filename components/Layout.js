import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title ? `${title} - Nextjs Auth` : "Nextjs Auth"}</title>
      </Head>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main role="main" className="flex-fill pt-3 mt-3">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Layout;
