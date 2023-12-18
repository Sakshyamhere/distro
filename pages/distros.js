import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as fs from "node:fs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
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
    <main className="p-3 ml-[7vh]">
      <div>
        <div >
          <h1 className="bg-gray-600 px-2 text-xl">Distro</h1>
          <p className="bg-gray-900 px-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            necessitatibus omnis sequi eius, impedit rerum iure voluptas
            repellendus nulla nesciunt, fuga harum adipisci quas tenetur facere.
            Ea quod in omnis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Atque, sequi magni? Ipsam nulla eaque dolor culpa dolores
            cupiditate, consequuntur, voluptates quod nisi commodi accusamus
            placeat fugit numquam sunt tempore vel. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Et fugiat illum consectetur placeat
            quos aliquam magni minima quae quas! Reiciendis minima fuga nostrum
            sint ipsa velit earum illo culpa nobis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Autem commodi provident error, officia
            voluptatum consectetur eveniet adipisci animi tenetur voluptatem
            est, quo accusamus amet cupiditate aperiam distinctio sit.
            Inventore, accusantium?. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sit eligendi nisi possimus minima ipsam nemo ab
            molestiae atque cumque distinctio laudantium eaque necessitatibus
            asperiores blanditiis, dolores, dolor eveniet voluptatibus dolore
            reiciendis, veniam dicta rem. Culpa, veniam expedita. Suscipit,
            voluptatem vel cupiditate veniam aspernatur, provident consectetur
            perspiciatis deleniti eum enim autem, soluta voluptatibus
            necessitatibus veritatis vitae aliquam dolorem accusamus tempora
            excepturi? Voluptates, omnis architecto labore, alias hic rem
            quibusdam veniam odio vero modi deleniti error vitae esse. Quis esse
            in qui quasi vero incidunt eveniet dolor, illum magnam animi
            pariatur cumque, ducimus consectetur culpa. Quisquam, tempore! Nobis
            ea nihil molestias nisi rerum maiores, corrupti nulla aspernatur
            odio sed! Quos, non? Velit in magnam mollitia perferendis nulla
            cupiditate sint necessitatibus porro possimus autem ducimus
            temporibus voluptas aperiam labore veniam vero, molestias quod
            dolorum nisi error! Facilis at tempore ab saepe nobis tenetur rerum,
            repellendus, nihil, laboriosam fugit atque est culpa voluptates
            recusandae reprehenderit. Architecto, harum possimus ipsa at labore
            autem. Esse mollitia nesciunt tempore dolorem inventore ex, commodi
            sequi sed reiciendis hic consequuntur similique provident molestiae
            ab magnam quae eligendi veniam rem! Nam autem totam repellat aliquam
            voluptatum numquam labore unde nostrum, voluptatibus reprehenderit
            tempore incidunt laudantium, recusandae voluptates inventore aut
            distinctio.
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
            {itemDis.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <div className="p-10 bg-gray-900 rounded-md">
                    <Link href={"distro/" + item.forslug}>
                      <img
                        className="mx-auto w-48 h-48 my-4"
                        src={item.img}
                        alt={item.title}
                      />
                    </Link>
                    <p className="text-center font-bold text-2xl">{item.title}</p>
                    <p className="text-center">{item.desc.slice(0,300)}</p>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </main>
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
