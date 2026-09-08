 const ExcelJs = require('exceljs');
//  const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';
// import {ExcelJs} from 'exceljs';

async function readExcel(){
const workbook=new ExcelJs.Workbook();
await workbook.xlsx.readFile("downloads\\download.xlsx")
const worksheet=workbook.getWorksheet('Sheet1')
worksheet.eachRow((row,rowNum) =>{
    row.eachCell((cell,colNum)=>{
        console.log(cell.value)
    })
})
}

readExcel()


// async function readExcel(worksheet, searchText) {
//     let output = { row: -1, column: -1 };
//     worksheet.eachRow((row, rowNumber) => {
//         row.eachCell((cell, colNumber) => {
//             if (cell.value === searchText) {
//                 output.row = rowNumber;
//                 output.column = colNumber;
//             }
//         })
//     })
//     return output;
// }

// The below code is for reading excel setSyntheticLeadingComments. But JS is asynchronous nature,before reading the 'download.xlsx' file will try 
// to execute remaining code and we will get error as
/*
const workbook=new ExcelJs.Workbook();
workbook.xlsx.readFile("downloads\\download.xlsx")
const worksheet=workbook.getWorksheet('Sheet1')
worksheet.eachRow((row,rowNum) =>{
    row.eachCell((cell,colNum)=>{
        console.log(cell.value)
    })
})

*/



