import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

const notFound = () => {
  return (
    <>
      <Layout title="Not Found">
        <div className="page-wrap d-flex flex-row align-items-center pt-3 mt-3">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <Image
                  className="d-block mx-auto mb-4 img-fluid"
                  src="/images/world_map.png"
                  width="300px"
                  height="188px"
                  alt="NextJS Auth"
                />
                <span className="display-1 d-block">404</span>
                <div className="mb-4 lead">
                  The page you are looking for was not found.
                </div>
                <Link href="/" passHref>
                  <a className="btn btn-link">Back to Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default notFound;
