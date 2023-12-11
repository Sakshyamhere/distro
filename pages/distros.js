import React, { useEffect, useState } from "react";

function Distros() {
//Distro
  const [itemDis, setitemDis] = useState({})
  //SubDistros
  const [itemsubDis, setitemsubDis] = useState({})


  useEffect(() => {
    fetchDistro();
  }, []);

  const fetchDistro = async () => {
    const response = await fetch("http://localhost:3000/api/distrodata");
    const file = await response.json();
    const distribution = file.distro;
    const subDistributions = file.subDistrs
    setitemDis(distribution)
    setitemsubDis(subDistributions)
    console.log(distribution.title)
  };

  return (
    <>
    <div>
      <h1>
        {itemDis.title}
      </h1>
      <p>{itemDis.desc}</p>
      {
        itemsubDis.map((item) => {
          return (
            <h1>
              {item.title}
            </h1>
          )
        })
      }
    </div>
    </>
  )
}

export default Distros;
