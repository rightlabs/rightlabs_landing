import Nav from "@/components/Nav";
import Header from "@/containers/homepage/Header";
import Services from "@/containers/homepage/Services";
import Work from "../containers/homepage/Work";
import Testimonial from "@/containers/homepage/Testimonial";
import Cta from "@/containers/homepage/Cta";
import Footer from "../components/Footer";

import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
    window.scrollTo(0, 0);
    window.addEventListener("scroll", function () {
      let nav = document.querySelector(".nav__wrap");
      nav?.classList.toggle("nav--scrolled", window.scrollY > 0);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Rightlabs </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graphs Tag */}
        <meta property="og:url" content="https://rightlabs.co" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rightlabs | Crafting Innovative Solutions for a Digital World"
        />
        <meta
          property="og:description"
          content="Ready to take your business to the next level? Let's work together to create digital solutions that work for you."
        />
        {/* <meta
          property="og:image"
          content="http://content.drisk.io/misc/markup_prediction.png"
        /> */}
      </Head>

      <main>
        <div className="nav__wrap">
          <Nav sideNav={sideNav} setSideNav={setSideNav} />
        </div>
        <Header setSideNav={setSideNav} />
        <div className="services__wrapper" id="services">
          <Services />
        </div>
        <div className="work__wrapper" id="work">
          <Work />
        </div>
        <div className="testimonial__wrapper" id="testimonial">
          <Testimonial />
        </div>
        <Cta />
        <div className="footer__wrapper">
          <Footer />
        </div>
      </main>
    </>
  );
}
