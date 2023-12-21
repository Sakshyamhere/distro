import React from "react";
import * as fs from "node:fs";
function Slug({ file }) {
  if (!file || !file.title) {
    // Handle cases where 'file' or 'file.title' is undefined
    return <div>Loading...</div>; // Or any suitable placeholder/error message
  }

  return (
    <>
      <div>
        <div>
          <h1>{file.title}</h1>
          <p>{file.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Slug;

export const getStaticPaths = async () => {
  const data = await fs.promises.readdir("subdistro");
  let arrData = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const myFile = await fs.promises.readFile(`subdistro/${element}`);
    const parsedfile = JSON.parse(myFile)
    console.log(frslug)
    arrData.push({ params: { slug: frslug } });
  }
  return {
    paths: arrData,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const myFile = await fs.promises.readFile(`subdistro/${slug}.json`, "utf-8");
  const file = await JSON.parse(myFile);
  return { props: { file: file } };
};
