import { StaticImageData } from "next/image";

export default function Header(props: { image: StaticImageData }) {
  return (
    <header
      className="masthead"
      style={{ backgroundImage: `url(${props.image.src})` }}
    >
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
              <h1>Simon&apos;s Awesome Blog</h1>
              <span className="subheading">
                A simple developer with simple ambitions
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
