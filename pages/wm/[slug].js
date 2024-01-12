import React from "react";
import * as fs from "node:fs";
function Slug({ file }) {
  if (!file || !file.title) {
    return <div>Loading...</div>; 
  }
  return (
    <>
         <div className="p-3 ml-[7vh]">
        <div>
          <h1 className="bg-gray-600 px-2 text-xl">{file.title}</h1>

          <p className="bg-gray-900 px-2 text-lg py-2" dangerouslySetInnerHTML={{__html : file.desc}}></p>
        </div>
      </div>
    </>
  );
}

export default Slug;

export const getStaticPaths = async () => {
  const data = await fs.promises.readdir("windowmngrs");
  let arrData = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const myFile = await fs.promises.readFile(`windowmngrs/${element}`);
    const parsedfile = JSON.parse(myFile)
    const frslug = parsedfile.forslug;
    arrData.push({ params: { slug: frslug } });
  }
  return {
    paths: arrData,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const myFile = await fs.promises.readFile(`windowmngrs/${slug}.json`, "utf-8");
  const file = await JSON.parse(myFile);
  return { props: { file: file } };
};
