import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
            Nava Institute of Science and Technology
            </Typography>
            <Typography className="font-normal text-blue-gray-500 lg:w-2/5">
            "Empowering Minds, Enriching Futures"
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Material Tailwind",
  description:
    "Easy to use React components for Tailwind CSS and Material Design.",
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "/",
    },
    {
      color: "gray",
      name: "youtube",
      path: "/",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/_present_legend_/",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/alwin-sajan",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "/" },
        { name: "Blog", path: "https://www.creative-tim.com/blog" },
        {
          name: "Github",
          path: "https://www.github.com/alwin-sajan",
        },
        {
          name: "Free Products",
          path: "/",
        },
      ],
    },
    {
      name: "other resources",
      items: [
        {
          name: "MIT License",
          path: "https://github.com/alwin-sajan",
        },
        {
          name: "Contribute",
          path: "https://github.com/alwin-sajan",
        },
        {
          name: "Change Log",
          path: "https://github.com/alwin-sajan",
        },
        {
          name: "Contact Us",
          path: "/",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} NIST by{" "}
      <a
        href="https://alwin-sajan.github.io/"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Alwin Sajan
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;