import fs from "fs";

function base64ToFile(file: { base64: string; fileName: string }): string {
  let extension = file.fileName.split(".").pop(); 
  let fileContents;
  if (extension === "png") {
    fileContents = file.base64.replace(/^data:image\/png;base64,/, "");
  } else if (extension === "jpg" || extension === "jpeg") {
    fileContents = file.base64.replace(/^data:image\/jpeg;base64,/, "");
  }
  //   const fileContents = file.base64.replace(/^data:image\/png;base64,/, "");
  fs.mkdirSync("./public/profiles", { recursive: true });

  const fileName = `./public/profiles/${Date.now().toString() + file.fileName}`;

  fs.writeFile(fileName, fileContents, "base64", function (err) {
    
    console.log(err);
  });
  return fileName.slice(8);
}
export default base64ToFile;
