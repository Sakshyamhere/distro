import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Slug() {
  const router = useRouter();
  const slug = router.query.slug;
  //Distro
  const [itemDis, setitemDis] = useState({});
  //SubDistros
  const [itemsubDis, setitemsubDis] = useState([]);
  useEffect(() => {
    fetchDistro();
  }, [slug]);
  const fetchDistro = async () => {
    const response = await fetch(
      `http://localhost:3000/api/distrodata?slug=${slug}`
    );
    const file = await response.json();
    const distribution = await file.distro;
    const subDistributions = await file.subDistrs;
    setitemDis(distribution);
    setitemsubDis(subDistributions);
    console.log(distribution.title);
  };

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
          
          )
        })}
      </div>
    </>
  );
}

export default Slug;
