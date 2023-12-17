import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as fs from "node:fs";

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
    <>
      <div>
        {itemDis.map((item) => {
          return (
            <Link href={`/distro/${item.forslug}`} key={item.id}>
              <div className="w-full mx-auto  my-8 max-w-sm rounded-lg shadow shadow-slate-300 border-r-rose-200">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg my-4"
                    src={item.img}
                    alt="distro"
                  />
                  <h5 className="mb-1 text-xl font-medium ">{item.title}</h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
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
  // console.log(arrData)
  return { props: { file: arrData } };
};
