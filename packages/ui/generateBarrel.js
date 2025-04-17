const fs = require("fs");
const path = require("path");

function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, g1) => g1.toUpperCase())
    .replace(/^(.)/, (_, g1) => g1.toUpperCase());
}

// 소스 코드 디렉토리 경로 설정
const srcFolderPath = path.join(__dirname, "src");
let count = 0;

// (직접 수정) index.js = true, index.ts = false
const isJavaScript = false;
const extension = isJavaScript ? "js" : "ts";

// (직접 수정) 처리 대상 디렉토리 목록
const targetFolderList = ["components"];

// (직접 수정) 예외 파일 목록
const exceptionFileList = [
  "style.css.ts",
  "type.ts",
  "stories",
  "ImageUploader",
  "ImageInput",
  "ImagePreview",
  "OptionList",
];

targetFolderList.forEach((folder) => {
  const folderPath = path.join(srcFolderPath, folder);
  if (fs.existsSync(folderPath) && fs.statSync(folderPath).isDirectory()) {
    generateIndexFile(folderPath);
  }
});

function generateIndexFile(directoryPath) {
  const indexFilePath = path.join(directoryPath, `index.${extension}`);
  const relativePath = path.relative(__dirname, indexFilePath);

  const files = fs.readdirSync(directoryPath);
  const exportStatementList = [];

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    const fileNameWithoutExtension = path.basename(file, path.extname(file));
    const exportName = toPascalCase(fileNameWithoutExtension);

    const isException = exceptionFileList.some((exceptionFileName) =>
      file.toLowerCase().includes(exceptionFileName.toLowerCase()),
    );
    if (isException) return;

    const isDir = fs.statSync(filePath).isDirectory();
    const isTargetFile =
      fs.statSync(filePath).isFile() &&
      (file.endsWith(`.${extension}`) || file.endsWith(`.${extension}x`)) &&
      file !== `index.${extension}`;

    if (isTargetFile) {
      exportStatementList.push(
        `export { default as ${exportName} } from './${fileNameWithoutExtension}';`,
      );
    } else if (isDir) {
      const nestedIndexPath = path.join(filePath, `index.${extension}`);
      if (fs.existsSync(nestedIndexPath)) {
        // 디렉토리에 index.ts(x)가 있는 경우 → export * from './folder'
        exportStatementList.push(
          `export * from './${fileNameWithoutExtension}';`,
        );
      } else {
        // index.ts(x) 없는 경우 → default export 라고 가정
        exportStatementList.push(
          `export { default as ${exportName} } from './${fileNameWithoutExtension}';`,
        );
      }
      generateIndexFile(filePath); // 하위 디렉토리도 재귀 처리
    }
  });

  const content = exportStatementList.join("\n") + "\n";
  fs.writeFileSync(indexFilePath, content);
  console.log(`${++count} \t ${relativePath}`);
}
