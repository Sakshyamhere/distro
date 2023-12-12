import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Distros() {
  //Distro
  const [itemDis, setitemDis] = useState([]);
  useEffect((e) => {
    fetchDistro();
  }, []);
  const fetchDistro = async () => {
    const response = await fetch("http://localhost:3000/api/alldistros");
    const file = await response.json();
    const distributions = file.map((item) => item.distro)
      setitemDis(itemDis.concat(distributions));
    
  };
  return (
    <>
      <div>
     
        {itemDis.map((item) => {
          return (
            <Link href={`/distro/${item.forslug}`} key={item.id}>
              <div className="w-full mx-auto my-8 max-w-sm rounded-lg shadow shadow-slate-300 border-r-rose-200">
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg my-4"
                    src={item.img}
                    alt="Bonnie image"
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
