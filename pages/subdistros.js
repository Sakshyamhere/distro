import React, { useEffect, useState } from "react";
import * as fs from "node:fs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Link from "next/link";
function subdistros({ file }) {
  //Distro
  const [itemDis, setitemDis] = useState([]);
  useEffect(
    (e) => {
      setitemDis(file);
    },
    [file]
  );

  return (
    <main className="p-3 ml-[7vh]">
      <div>
        <div>
          <h1 className="bg-gray-600 px-2 text-xl">Subdistro</h1>

          <p className="bg-gray-900 px-2 py-2 text-lg">
            A "sub-distribution," often referred to as a "spin" or "remix,"
            represents a specialized variant of an existing Linux distribution,
            tailored to cater to specific user needs, preferences, or niche
            purposes while retaining the core components and infrastructure of
            its parent distribution. These sub-distributions typically inherit
            the foundation, software repositories, and underlying technology of
            their parent distro but differentiate themselves by focusing on
            particular use cases, user interfaces, or pre-configured software
            bundles. Sub-distributions arise from the desire to streamline the
            user experience for specific audiences or to fulfill particular
            requirements. For instance, within the realm of Ubuntu, sub-distros
            or "flavors" include Ubuntu GNOME, Kubuntu, Xubuntu, and Lubuntu,
            each featuring distinct desktop environments such as GNOME, KDE
            Plasma, XFCE, or LXQt, respectively. These variations enable users
            to access Ubuntu's vast software repository and underlying stability
            while choosing an interface that aligns with their preferences or
            hardware capabilities. Similarly, Fedora offers spins like Fedora
            KDE, Fedora XFCE, and Fedora LXQt, catering to users who prefer
            different desktop environments. These spins maintain Fedora's core
            components, including its package manager (DNF), security features,
            and core system utilities, while providing specialized desktop
            environments and software selections tailored to specific user
            preferences. Sub-distributions exemplify the flexibility and
            adaptability of Linux, allowing developers and communities to create
            specialized editions that target diverse user groups or utilize
            specific software stacks without needing to reinvent the wheel. They
            maintain compatibility and interoperability with their parent
            distributions while offering a more focused and curated experience,
            ensuring that users can find a version of their preferred
            distribution optimized for their specific needs within the expansive
            landscape of Linux-based operating systems.
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
                  <Link href={"subdistro/" + item.forslug}>
                    <div className="p-10 bg-gray-900 rounded-md">
                      <img
                        className="mx-auto w-48 h-48 my-4"
                        src={item.img}
                        alt={item.title}
                      />

                      <p className="text-center font-bold text-2xl">
                        {item.title}
                      </p>
                      <p className="text-center">{item.desc.slice(0,100)}</p>
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

export default subdistros;
export const getStaticProps = async () => {
  const data = await fs.promises.readdir("subdistro");
  const arrData = [];
  //Iterating each data
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const myFile = await fs.promises.readFile(`subdistro/${element}`);
    arrData.push(JSON.parse(myFile));
  }
  return { props: { file: arrData } };
};
