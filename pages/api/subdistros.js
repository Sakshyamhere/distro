import fs from "fs";

export default async function subDistroData(req, res) {
    try {
        const filePath = `./subdistro/${req.query.slug}.json`;

        const data = await fs.promises.readFile(filePath, "utf8");
        console.log(data)
        // Sending the file content as the response

        res.status(200).send(data);
    } catch (err) {
        // Error occurred while reading or file not found
        res.status(500).send("Not Found");
    }
}