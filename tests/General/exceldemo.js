const ExcelJS = require('exceljs');

async function readExcelFile() {
    const workbook = new ExcelJS.Workbook();

    await workbook.xlsx.readFile(
        "C:/Users/anjan/Downloads/Obsqura Testing (1).xlsx"
    );

    const worksheet = workbook.getWorksheet('Sheet1');

    worksheet.eachRow((row, rowNumber) => {
        console.log(`Row ${rowNumber} values:`, row.values);
    });
}

readExcelFile();