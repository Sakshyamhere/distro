import Link from "next/link";
import React, { useEffect, useState } from "react";

function Distros() {
  //Distro
  const [itemDis, setitemDis] = useState([]);
 

  const fetchDistro = async () => {
    const response = await fetch("http://localhost:3000/api/alldistros");
    const file = await response.json();
      setitemDis(file.map(((item)=> 
      item.distro
      )))
    
  };
  useEffect((e) => {
    fetchDistro();
  }, []);

  return (
    <>
      <div>
        
        {
          itemDis.map((item) => {
            return (
              <Link href={`/distro/${item.forslug}`} key={item.id}>
              <h1>{item.title}</h1>
              </Link>
            )
          })
        }
       
      </div>
    </>
  );
}

export default Distros;
