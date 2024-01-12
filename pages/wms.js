import React from 'react'
import * as fs from "node:fs";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function wms({file}) {
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
          <h1 className="bg-gray-600 px-2 text-xl">Window Manager</h1>

          <p className="bg-gray-900 px-2 py-2 text-lg">
          A window manager in the Linux environment serves as the orchestrator of graphical user interface elements, specifically handling the layout, appearance, and interactions of application windows within the desktop environment. Offering diverse styles like stacking or tiling, these managers not only control window placement and aesthetics but also empower users with extensive customization options, often accessible through configuration files or graphical tools. Known for their efficiency and lightweight nature, they optimize system resources, making them ideal for both older hardware and users who prefer a minimalist setup. Whether standalone or integrated into desktop environments, these managers provide a foundation for users to tailor their visual experience, offering themes, compositing features, and a supportive community fostering continual development and support across various Linux distributions. A window manager in the Linux ecosystem operates as a fundamental component of the graphical user interface, responsible for the management, arrangement, and manipulation of windows within the desktop environment. These managers come in different flavors, such as stacking or tiling window managers, each offering distinct approaches to organizing and presenting windows. Stacking window managers, exemplified by Openbox or Fluxbox, allow windows to overlap, providing flexibility in positioning and resizing. On the other hand, tiling window managers like i3 or dwm arrange windows in a non-overlapping manner, optimizing screen real estate by efficiently filling available space. Beyond their core functions, window managers grant users unparalleled customization capabilities. Users can fine-tune window behavior, appearance, and keyboard shortcuts through text-based configuration files or user-friendly graphical interfaces. This level of customization extends to themes, enabling users to personalize window borders, icons, and other visual elements according to their preferences.
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
                    <Link href={"/wm/" + item.forslug}>
                  <div className="p-10 bg-gray-900 rounded-md">
                      <img
                        className="mx-auto w-48 h-48 my-4"
                        src={item.img}
                        alt={item.title}
                      />
                    <p className="text-center font-bold text-2xl">
                      {item.title}
                    </p>
                    <p className="text-center">{item.desc.slice(0, 300)}</p>
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
export default wms

export const getStaticProps = async () => {
    const data = await fs.promises.readdir("windowmngrs");
    const arrData = [];
    //Iterating each data
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const myFile = await fs.promises.readFile(`windowmngrs/${element}`);
      arrData.push(JSON.parse(myFile));
    }
   
    return { props: { file: arrData } };
  };