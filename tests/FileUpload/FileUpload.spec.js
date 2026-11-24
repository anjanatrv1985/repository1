const { test,expect } = require("@playwright/test");

test.skip('Single File Upload',async({page})=>
{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator("#filesToUpload").setInputFiles("tests\\UploadFiles\\sample_640×426.jpg");
    await page.waitForTimeout(5000);

});

test.skip('Multiple File Upload',async({page})=>
{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator("#filesToUpload").setInputFiles(["tests\\UploadFiles\\sample_640×426.jpg","tests\\UploadFiles\\sample_1280×853.jpg"]);
  
    await expect(page.locator("//ul[@id='fileList']/li[1]")).toHaveText("sample_640×426.jpg");
    await expect(page.locator("//ul[@id='fileList']/li[2]")).toHaveText("sample_1280×853.jpg");
    await page.waitForTimeout(5000);

});

test('File Remove',async({page})=>
{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator("#filesToUpload").setInputFiles(["tests\\UploadFiles\\sample_640×426.jpg","tests\\UploadFiles\\sample_1280×853.jpg"]);
  
    await expect(page.locator("//ul[@id='fileList']/li[1]")).toHaveText("sample_640×426.jpg");
    await expect(page.locator("//ul[@id='fileList']/li[2]")).toHaveText("sample_1280×853.jpg");
    await page.locator("#filesToUpload").setInputFiles([]);
    await expect(page.locator("//li[normalize-space()='No Files Selected']")).toHaveText("No Files Selected");
    await page.close();

});