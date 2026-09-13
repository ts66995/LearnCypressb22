const ExcelJs = require('exceljs');

async function writeExcelTest(searchText, replaceText, filePath) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);
    const cell = worksheet.getRow(output.row).getCell(output.column);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                console.log(`Row Num: ${rowNum} and col Num: ${colNum}`)
                output.row = rowNumber;
                output.column = colNumber;
            }
        });
    });
    return output;
}
/*In this file searchText is hard coded. Once executed successfully, text will replaced with "Republic" and further executions we will get exception bcz the serch text could not able to fine. So check the search text should be available in excel sheet
 throw new Error(`${n} is out of bounds. Excel supports columns from 1 to 16384`);
            ^
Error: -1 is out of bounds. Excel supports columns from 1 to 16384
*/
writeExcelTest(
    "Banana",
    "Republic",
    "G:\\LearnCypressb22\\downloads\\download.xlsx"
);