import { Blog } from "../blogs/[id]/page";

export default async function BlogHeader(props: { blog: Blog }) {
  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url(http://localhost:3001/${props.blog.image})`,
      }}
    >
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="post-heading">
              <h1>{props.blog.title}</h1>
              <h2 className="subheading">{props.blog.subtitle}</h2>
              <span className="meta">
                Posted by
                <a href="#!">{props.blog.userId}</a>
                on August 24, 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
