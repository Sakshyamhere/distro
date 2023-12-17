import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as fs from "node:fs";

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
    <>
      <div>
        <h1>{itemDis.title}</h1>
        <p>{itemDis.desc}</p>
        {itemsubDis.map((item) => {
          return (
            <>
              <Link href={`/subdistro/${item.forslug}`}>
                <h1>{item.title}</h1>
              </Link>
            </>
          );
        })}
      </div>
    </>
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
