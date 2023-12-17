import { promises, readFile, readdir } from "fs";

export default async function allDistros(req, res) {
  const data = await promises.readdir("distrodata");
  const arrData = [];
  //Iterating each data
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    const myFile = await promises.readFile(`distrodata/${element}`);
    arrData.push(JSON.parse(myFile));
  }
  return res.status(200).json(arrData);
}
