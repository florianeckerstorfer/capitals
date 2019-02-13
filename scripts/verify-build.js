const fs = require('fs');

const buildDir = `${__dirname}/../build`;
const testFiles = [
  `${buildDir}/index.html`,
  `${buildDir}/static/css`,
  `${buildDir}/static/js`,
];

function fileExists(fileName) {
  return new Promise(resolve => {
    fs.access(fileName, fs.constants.F_OK, err => {
      resolve(err ? false : true);
    });
  });
}

const promises = testFiles.map(testFile => fileExists(testFile));

Promise.all(promises).then(values => {
  if (values.indexOf(false) >= 0) {
    console.log('build not successful');
    process.exit(1);
  } else {
    console.log('build successful');
    process.exit(0);
  }
});
