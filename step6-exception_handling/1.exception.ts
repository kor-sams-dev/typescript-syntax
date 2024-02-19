// Java: Exception
// JavaScript: Error
// const array = new Array(10000000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist") {
    throw new Error(`file not found: ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  console.log(`close file: ${fileName}`);
}

const fileName = "file";
console.log(readFile(fileName));
closeFile(fileName);

const fileNameException = "not exist";
// console.log(readFile(fileNameException)); // Error: file not found: not exist

try {
  console.log(readFile(fileNameException));
} catch (error) {
  console.log(`catched: ${error}`);
} finally {
  console.log(closeFile(fileNameException));
}

function run() {
  const fileName = "file";
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched: ${error}`);
    return;
  } finally {
    // finally block은 return이 있어도 실행된다.
    console.log(closeFile(fileName));
  }
}
run();
