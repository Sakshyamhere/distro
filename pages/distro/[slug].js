import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as fs from "node:fs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
function Slug({ file }) {
  const [itemDis, setitemDis] = useState({});
  const [itemsubDis, setitemsubDis] = useState([]);
  useEffect(() => {
    if (file) {
        setitemDis(file.distro);
      setitemsubDis(file.subDistrs); 
    }
  }, [file]);
  if (!file) {
    return <div>Loading...</div>;
  }
  if (!itemDis || !itemDis.title) {
    // Handle cases where 'file' or 'file.title' is undefined
    return <div>Loading...</div>; // Or any suitable placeholder/error message
  }
  return (
    <main className="p-3 ml-[7vh]">
    <div>
      <div>
        <h1 className="bg-gray-600 px-2 text-xl">{itemDis.title}</h1>

        <p className="bg-gray-900 px-2 py-2 text-lg" dangerouslySetInnerHTML={{__html : itemDis.desc}}>
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
          {itemsubDis.map((item) => {
            return (
              <SplideSlide key={item.forslug}>
                  <Link href={"/subdistro/" + item.forslug}>
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

export default Slug;

export const getStaticPaths = async () => {
  const data = await fs.promises.readdir("distrodata");
  let arrData = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const myFile = await fs.promises.readFile(`distrodata/${element}`);
    const parsedfile = JSON.parse(myFile)
   const dstr = parsedfile.distro
   const frslug = dstr.forslug
    arrData.push({ params: { slug: frslug } });
  }
  return {
    paths: arrData,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps = async (context) => {
  try {
    const { slug } = context.params;
  const myFile = await fs.promises.readFile(`distrodata/${slug}.json`, "utf-8");
  const file = await JSON.parse(myFile);
  return { props: { file: file } };
  } catch (error) {
    return {props : {file : null}};
  }
  
};
