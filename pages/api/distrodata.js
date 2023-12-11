

const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');

export default function distroData(req, res) {
async function logFile() {
  try {
    const filePath = resolve('./distrodata/debian.Json');
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
    res.status(200).send(contents);
  } catch (err) {
    console.error(err.message);
  }
}
logFile();
}