const ExcelJS=require('exceljs');

async function readExcelFile() {
    //workbook creation
    const workbook=new ExcelJS.Workbook();
    //read the workbook from the path
    await workbook.xlsx.readFile('C:/Users/anjan/Downloads/Obsqura Testing (1).xlsx');

    const worksheet=workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row, rowNumber) => {

        console.log(`Row ${rowNumber}:`);

        row.eachCell((cell, colNumber) => {

            console.log(
                `Row ${rowNumber}, Column ${colNumber} = ${cell.value}`
            );

        });

    });
};
readExcelFile();