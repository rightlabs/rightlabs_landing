import Image from "next/image";

import heading from "../../../public/assets/images/heading.png";
import headingPhone from "../../../public/assets/images/heading-phone.png";
import project0 from "../../../public/assets/images/project0.png";
import project1 from "../../../public/assets/images/project1.png";
import project2 from "../../../public/assets/images/project2.png";
import project3 from "../../../public/assets/images/project3.png";
import project4 from "../../../public/assets/images/project4.png";
import badge from "../../../public/assets/images/badge.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = ({ setSideNav }) => {
  let settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <header className="header" onClick={() => setSideNav(false)}>
      <div className="header__box">
        <div className="header__box--heading">
          <Image src={heading} alt="heading" className="laptop" />
          <Image src={headingPhone} alt="heading-phone" className="phone" />
        </div>
        {/* <h3>
          Welcome to Rightlabs, a premier creative design and development agency
          where innovation meets expertise.
        </h3> */}
        <a className="btnWrapper" href="#work">
          <button className="btn btn--pri">See our Work</button>
        </a>
      </div>

      <div className="header__projectGallery">
        <div className="latestBadge">
          <svg
            width="129"
            height="122"
            viewBox="0 0 129 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="bg"
              d="M129 61C129 65.2709 115.086 67.986 114.142 71.9824C113.166 76.1008 124.499 84.3986 122.641 88.1204C120.753 91.9032 106.996 88.4865 104.321 91.7507C101.613 95.0149 108.13 107.248 104.73 109.872C101.362 112.465 90.5015 103.618 86.5981 105.448C82.7577 107.248 83.1354 121.007 78.8543 121.952C74.7306 122.867 68.907 110.329 64.5 110.329C60.093 110.329 54.2694 122.867 50.1457 121.952C45.896 121.007 46.2738 107.248 42.4019 105.448C38.4985 103.618 27.6384 112.465 24.2701 109.872C20.9019 107.248 27.3865 95.0149 24.6794 91.7507C22.0037 88.4865 8.24744 91.9337 6.35871 88.1204C4.50146 84.3986 15.8023 76.1008 14.858 71.9824C13.9136 67.986 0 65.2709 0 61C0 56.7291 13.9136 54.014 14.858 50.0176C15.8338 45.8992 4.50146 37.6014 6.35871 33.8796C8.24744 30.0968 22.0037 33.5135 24.6794 30.2493C27.3865 26.9851 20.8704 14.752 24.2701 12.1284C27.6384 9.53533 38.4985 18.3822 42.4019 16.5519C46.2423 14.752 45.8646 0.993476 50.1457 0.0477706C54.2694 -0.867428 60.093 11.6708 64.5 11.6708C68.907 11.6708 74.7306 -0.867428 78.8543 0.0477706C83.1354 0.993476 82.7577 14.752 86.5981 16.5519C90.5015 18.3822 101.362 9.53533 104.73 12.1284C108.098 14.752 101.613 26.9851 104.321 30.2493C106.996 33.5135 120.753 30.0663 122.641 33.8796C124.499 37.6014 113.198 45.8992 114.142 50.0176C115.086 54.014 129 56.7291 129 61Z"
              fill="#EEDC28"
            />
            <path
              d="M37.637 40.4H34.901V53H45.251V50.534H37.637V40.4ZM53.9238 44.396C53.2398 43.496 52.1058 42.902 50.2338 42.902C45.9678 42.902 45.5178 46.484 45.5178 47.96C45.5178 49.31 45.9858 53 50.2158 53C52.1238 53 53.2758 52.478 53.9598 51.596H54.0498V53H56.7858V42.902H54.0498V44.396H53.9238ZM51.0258 50.66C48.4158 50.66 48.1278 48.68 48.1278 47.96C48.1278 47.168 48.3978 45.26 51.0258 45.26C53.3838 45.26 53.8698 46.592 53.8698 47.96C53.8698 49.49 53.3838 50.66 51.0258 50.66ZM61.5222 45.242H64.7982V42.938H61.5222V40.022H58.7682V42.938H57.4362V45.242H58.7682V49.292C58.7682 50.75 58.7682 53 61.5222 53C64.2582 53 64.7982 52.82 64.7982 52.82V50.156C62.1702 50.3 61.5222 50.498 61.5222 49.04V48.824V45.242ZM75.7927 48.59H75.9007C76.0447 47.204 75.8647 45.08 73.9207 43.748V43.766C73.0747 43.172 71.9227 42.812 70.5007 42.812C67.0987 42.812 65.0827 44.612 65.0827 47.906C65.0827 51.272 67.0447 53 70.5007 53C73.8127 53 75.5767 51.668 75.8467 49.49H73.2007C72.9487 50.156 72.1387 50.606 70.5007 50.606C68.7367 50.606 67.9267 49.94 67.7287 48.59H75.7927ZM70.5007 45.206C72.4447 45.206 72.9487 46.034 73.1647 46.79H67.8367C68.1607 45.764 68.9887 45.206 70.5007 45.206ZM81.6791 46.88L81.4451 46.862C79.6811 46.592 79.3751 46.34 79.3751 45.89C79.3751 45.584 79.6991 45.026 81.2291 45.026C82.8131 45.026 83.4971 45.458 83.4971 46.25V46.34H86.2871V46.25C86.2871 44.702 85.4051 42.848 81.2291 42.848C77.3411 42.848 76.5311 44.522 76.5311 45.926C76.5311 47.942 78.3311 48.59 81.2291 48.968C81.3731 48.986 81.5171 49.004 81.6611 49.022C82.7591 49.148 83.7311 49.292 83.7311 50.048C83.7311 50.714 82.6871 50.858 81.5891 50.858C79.7711 50.858 79.1231 50.462 79.1231 49.598V49.508H76.3151V49.706C76.2971 50.228 76.2971 51.074 76.9991 51.776C77.8091 52.586 79.3751 53 81.6611 53C84.7571 53 86.5571 52.514 86.5571 50.012C86.5571 47.618 83.9651 47.222 81.6791 46.88ZM90.8249 45.242H94.1009V42.938H90.8249V40.022H88.0709V42.938H86.7389V45.242H88.0709V49.292C88.0709 50.75 88.0709 53 90.8249 53C93.5609 53 94.1009 52.82 94.1009 52.82V50.156C91.4729 50.3 90.8249 50.498 90.8249 49.04V48.824V45.242ZM32.2645 63.4C31.5265 63.4 30.0325 63.418 29.3665 63.418V63.4H26.6305V76H29.3665V72.49C29.9245 72.49 31.7965 72.49 32.2645 72.49C33.4525 72.49 37.6465 72.652 37.6465 67.954C37.6465 63.418 33.7765 63.4 32.2645 63.4ZM32.3545 70.114C32.1205 70.114 29.9785 70.114 29.3665 70.114V65.776C30.1045 65.776 31.9045 65.776 32.4085 65.776C33.3265 65.776 35.0725 65.776 35.0725 67.954C35.0725 70.222 33.0925 70.114 32.3545 70.114ZM44.4684 65.902C42.7224 65.902 42.1104 66.424 41.5344 67.396H41.3724V65.902H38.6364V76H41.3724V71.482C41.3724 70.114 41.9664 68.53 44.0004 68.53C44.8644 68.53 45.5664 68.674 45.8184 68.746L46.2504 66.172C45.7824 66.064 45.1884 65.902 44.4684 65.902ZM51.5825 65.722C48.5225 65.722 45.9665 67.396 45.9665 70.87C45.9665 74.362 48.5225 76 51.5825 76C54.6605 76 57.2165 74.416 57.2165 70.87C57.2165 67.36 54.6605 65.722 51.5825 65.722ZM51.5825 73.516C49.8725 73.516 48.6485 72.76 48.6485 70.87C48.6485 68.962 49.8725 68.224 51.5825 68.224C53.3105 68.224 54.5345 68.998 54.5345 70.87C54.5345 72.688 53.3105 73.516 51.5825 73.516ZM58.6234 75.676C58.6234 77.476 57.8854 78.34 56.0854 78.358H54.8434V80.986H56.0854C60.7114 80.986 61.2874 78.43 61.3054 75.784V66.136H58.6234V75.676ZM61.3054 65.398V62.986H58.6234V65.398H61.3054ZM72.655 71.59H72.763C72.907 70.204 72.727 68.08 70.783 66.748V66.766C69.937 66.172 68.785 65.812 67.363 65.812C63.961 65.812 61.945 67.612 61.945 70.906C61.945 74.272 63.907 76 67.363 76C70.675 76 72.439 74.668 72.709 72.49H70.063C69.811 73.156 69.001 73.606 67.363 73.606C65.599 73.606 64.789 72.94 64.591 71.59H72.655ZM67.363 68.206C69.307 68.206 69.811 69.034 70.027 69.79H64.699C65.023 68.764 65.851 68.206 67.363 68.206ZM81.4494 72.22C81.2514 72.922 80.6214 73.552 78.8934 73.552C77.1114 73.552 76.1754 72.742 76.1754 70.942C76.1754 69.232 77.1114 68.35 78.8934 68.35C80.5674 68.35 81.2334 68.926 81.4674 69.682H84.1494C83.9154 67.288 81.7914 65.884 78.8934 65.884C75.9234 65.884 73.5114 67.684 73.5114 70.942C73.5114 74.29 75.9234 76 78.8934 76C81.7914 76 83.9334 74.65 84.1494 72.22H81.4494ZM88.4255 68.242H91.7015V65.938H88.4255V63.022H85.6715V65.938H84.3395V68.242H85.6715V72.292C85.6715 73.75 85.6715 76 88.4255 76C91.1615 76 91.7015 75.82 91.7015 75.82V73.156C89.0735 73.3 88.4255 73.498 88.4255 72.04V71.824V68.242ZM97.4906 69.88L97.2566 69.862C95.4926 69.592 95.1866 69.34 95.1866 68.89C95.1866 68.584 95.5106 68.026 97.0406 68.026C98.6246 68.026 99.3086 68.458 99.3086 69.25V69.34H102.099V69.25C102.099 67.702 101.217 65.848 97.0406 65.848C93.1526 65.848 92.3426 67.522 92.3426 68.926C92.3426 70.942 94.1426 71.59 97.0406 71.968C97.1846 71.986 97.3286 72.004 97.4726 72.022C98.5706 72.148 99.5426 72.292 99.5426 73.048C99.5426 73.714 98.4986 73.858 97.4006 73.858C95.5826 73.858 94.9346 73.462 94.9346 72.598V72.508H92.1266V72.706C92.1086 73.228 92.1086 74.074 92.8106 74.776C93.6206 75.586 95.1866 76 97.4726 76C100.569 76 102.369 75.514 102.369 73.012C102.369 70.618 99.7766 70.222 97.4906 69.88Z"
              fill="#001125"
            />
          </svg>
        </div>
        <Slider {...settings} className="gallery--slider">
          <div>
            <Image src={project0} alt="project-0" />
          </div>
          <div>
            <Image src={project1} alt="project-1" />
          </div>
          <div>
            <Image src={project2} alt="project-2" />
          </div>
          <div>
            <Image src={project3} alt="project-3" />
          </div>
          <div>
            <Image src={project4} alt="project-4" />
          </div>
        </Slider>
      </div>
    </header>
  );
};

export default Header;
