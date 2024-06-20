"use client";
import { useCallback, useEffect } from "react";

type Route = {
  name: string;
  href: string;
};

export default function Navbar() {
  let scrollPos = 0;
  const onScroll = useCallback(() => {
    const mainNav = document.getElementById("mainNav");

    if (!mainNav) {
      return;
    }

    let headerHeight = mainNav.clientHeight;

    const currentTop = document.body.getBoundingClientRect().top * -1;
    if (currentTop < scrollPos) {
      // Scrolling Up
      if (currentTop > 0 && mainNav?.classList.contains("is-fixed")) {
        mainNav?.classList.add("is-visible");
      } else {
        mainNav?.classList.remove("is-visible", "is-fixed");
      }
    } else {
      // Scrolling Down
      mainNav?.classList.remove("is-visible");
      if (
        currentTop > headerHeight &&
        !mainNav?.classList.contains("is-fixed")
      ) {
        mainNav?.classList.add("is-fixed");
      }
    }
    scrollPos = currentTop;
  }, []);
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll);
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const routes: Route[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "about",
    },
    {
      name: "Blogs",
      href: "blogs",
    },
    {
      name: "Contact",
      href: "contact",
    },
  ];

  const navItems = routes.map((x) => {
    return <NavItem key={x.name} name={x.name} href={x.href} />;
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="index.html">
          Simon&apos;s Blog Site
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">{navItems}</ul>
        </div>
      </div>
    </nav>
  );
}

function NavItem(props: Route) {
  return (
    <li className="nav-item">
      <a className="nav-link px-lg-3 py-3 py-lg-4" href={props.href}>
        {props.name}
      </a>
    </li>
  );
}
