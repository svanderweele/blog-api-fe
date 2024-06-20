import React from "react";
import Background from "../assets/img/about-bg.jpg";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";

export interface Blog {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  userId: string;
  image: string | null;
  deletedAt: Date | null;
}

async function getData(): Promise<Blog[]> {
  const res = await fetch("http://localhost:3001/blogs", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYzFmZGE3MS0zZDBmLTQxMDItOWNlYy01OGM0OWE0OTMyZGEiLCJ1c2VybmFtZSI6InZhbmRlcndlZWxlc2ltb24rMUBnbWFpbC5jb20iLCJpYXQiOjE3MTg5MDg2NTUsImV4cCI6MTcxODkxMjI1NX0.tot0acbAUbGVk8IwCpBbNCQCX0IOrEhUCpa3IcVeS0Q",
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  function BlogList() {
    return data.map((blog) => {
      return (
        <React.Fragment key={blog.id}>
          <PostPreview blog={blog} />
          <hr className="my-4" />
        </React.Fragment>
      );
    });
  }

  return (
    <div className="App">
      <Navbar />
      <Header image={Background} />

      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <BlogList />
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const PostPreview = (props: { blog: Blog }) => {
  return (
    <div className="post-preview">
      <a href={`blogs/${props.blog.id}`}>
        <h2 className="post-title">{props.blog.title}</h2>
        <h3 className="post-subtitle">{props.blog.subtitle}</h3>
      </a>
      <p className="post-meta">
        Posted by&nbsp;
        <a href="#!">Start Bootstrap</a>
        &nbsp;on July 8, 2023
      </p>
    </div>
  );
};
