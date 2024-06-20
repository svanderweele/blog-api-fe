import React from "react";
import Background from "../../assets/img/about-bg.jpg";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import BlogHeader from "@/app/components/blog-header";
import { StaticImageData } from "next/image";

export interface Blog {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  userId: string;
  image: string | null;
  deletedAt: Date | null;
}

async function getBlogData(blogId: string): Promise<Blog> {
  const res = await fetch(`http://localhost:3001/blogs/${blogId}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmYzFmZGE3MS0zZDBmLTQxMDItOWNlYy01OGM0OWE0OTMyZGEiLCJ1c2VybmFtZSI6InZhbmRlcndlZWxlc2ltb24rMUBnbWFpbC5jb20iLCJpYXQiOjE3MTg5MDg2NTUsImV4cCI6MTcxODkxMjI1NX0.tot0acbAUbGVk8IwCpBbNCQCX0IOrEhUCpa3IcVeS0Q",
    },
  });

  console.log(res.status);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getBlogData(params.id);
  const html = { __html: data.content };

  return (
    <div className="App">
      <Navbar />
      <BlogHeader blog={data} />

      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div
              className="col-md-10 col-lg-8 col-xl-7"
              dangerouslySetInnerHTML={html}
            ></div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
