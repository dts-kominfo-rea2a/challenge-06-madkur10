// TODO: import module bila dibutuhkan di sini
const fs = require('fs')

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(
    file1,
    "utf8",
    (err, jsonData1) => {
      if (err) {
        return fnCallback(err, null);
      }
      fs.readFile(
        file2,
        "utf8",
        (err, jsonData2) => {
          if (err) {
            return fnCallback(err, null)
          }
          fs.readFile(
            file3,
            "utf8",
            (err, jsonData3) => {
              if (err) {
                return fnCallback(err, null)
              }
              arrData = [];

              let fileParse1    = JSON.parse(jsonData1);
              let tinggalPush1  = fileParse1.message.split(" ")[1];
              
              let fileParse2    = JSON.parse(jsonData2); 
              let tinggalPush2  = fileParse2[0].message.split(" ")[1];
              
              let fileParse3    = JSON.parse(jsonData3); 
              let tinggalPush3  = fileParse3[0].data.message.split(" ")[1];

              arrData.push(tinggalPush1, tinggalPush2, tinggalPush3);
              
              fnCallback(null, arrData);
            }
          )
        }
      )
    }
  )
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
