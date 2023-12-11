import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Slug() {
  const router = useRouter();
  const slug = router.query.slug;
  //Distro
  const [itemDis, setitemDis] = useState({});


  const fetchDistro = async () => {
    const response = await fetch(
      `http://localhost:3000/api/subdistros?slug=${slug}`
    );
    const file = await response.json();
      console.log(file)
    setitemDis(file);

  };
  useEffect(() => {
    fetchDistro();
  }, []);
  return (
    <>
      <div>
        <h1>{itemDis.title}</h1>
        <p>{itemDis.desc}</p>
      </div>
    </>
  );
}

export default Slug;
