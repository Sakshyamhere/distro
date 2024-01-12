import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as fs from "node:fs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Distros({ file }) {
  //Distro
  const [itemDis, setitemDis] = useState([]);
  useEffect(
    (e) => {
      setitemDis(file.map((item) => item.distro));
    },
    [file]
  );

  return (
    <main className="p-3 ml-[7vh]">
      <div>
        <div>
          <h1 className="bg-gray-600 px-2 text-xl">Distro</h1>

          <p className="bg-gray-900 px-2 py-2 text-lg">
            Linux distributions, or distros, epitomize the diverse array of
            operating systems built atop the Linux kernel, each tailored to
            specific needs and preferences. Rooted in the open-source Linux
            kernel, these distributions diverge in design philosophies, user
            interfaces, and software ecosystems. They embody distinct goals—some
            prioritize stability and enterprise readiness (e.g., CentOS,
            Debian), while others emphasize user-friendliness and out-of-the-box
            functionality (e.g., Ubuntu, Linux Mint). Distributions vary in
            desktop environments like GNOME, KDE Plasma, or XFCE, offering
            distinct aesthetics and workflows. Package managers, such as APT,
            RPM, or Pacman, streamline software management, ensuring seamless
            installation, updates, and dependency handling. Notably, the
            flexibility of Linux distributions allows extensive customization,
            enabling users to personalize themes, desktop environments, and
            software selections to suit their preferences. Popular distributions
            like Ubuntu, known for its vast software support and ease of use,
            coexist with Debian's stability and commitment to free software
            principles. Arch Linux champions minimalism and customization, while
            Fedora balances innovation with stability. CentOS serves the
            enterprise with reliability, and Linux Mint appeals to newcomers
            with a user-friendly approach. Beyond these, specialized
            distributions cater to specific use cases—Kali Linux for security
            testing, Tails for privacy, and Scientific Linux for research. The
            richness of options empowers users to choose a distribution aligned
            with their technical requirements, preferences, and ideologies,
            fostering a vibrant and dynamic ecosystem within the realm of
            open-source operating systems.
          </p>
        </div>
        <div className="m-3 my-8">
          <Splide
            options={{
              perPage: 4,
              arrow: false,
              pagination: false,
              drag: "free",
              gap: "3rem",
            }}
          >
            {itemDis.map((item) => {
              return (
                <SplideSlide key={item.id}>
                    <Link href={"distro/" + item.forslug}>
                  <div className="p-10 bg-gray-900 rounded-md">
                      <img
                        className="mx-auto w-48 h-48 my-4"
                        src={item.img}
                        alt={item.title}
                      />
                    <p className="text-center font-bold text-2xl">
                      {item.title}
                    </p>
                    <p className="text-center">{item.oneLiner}</p>
                  </div>
                    </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </main>
  );
}

export default Distros;

export const getStaticProps = async () => {
  const data = await fs.promises.readdir("distrodata");
  const arrData = [];
  //Iterating each data
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const myFile = await fs.promises.readFile(`distrodata/${element}`);
    arrData.push(JSON.parse(myFile));
  }
  return { props: { file: arrData } };
};
