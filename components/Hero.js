import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero px-4 py-5 bg-dark text-white d-flex align-items-center"
      id="home"
    >
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Welcome to <span className="text-primary"> NextJS Auth </span>
            </h1>
            <p className="lead my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
              velit maximus, feugiat turpis a, facilisis nisl. Nunc dignissim,
              libero.
            </p>
            <Link href="/contact" passHref>
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Contact Us
              </button>
            </Link>
          </div>
          <Image
            className="d-block mx-auto mb-4 img-fluid"
            src="/images/world_map.png"
            width="500px"
            height="313px"
            alt="NextJS Auth"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
