import pkg from 'docx'
import * as fs from "fs";
const { Document, Packer, Paragraph, TextRun } = pkg
// Listen for clicks on Generate Word Document button
const doc = new Document({
  sections: [
      {
          properties: {},
          children: [
              new Paragraph({
                  children: [
                      new TextRun("Hello World"),
                      new TextRun({
                          text: "\tGithub is the best",
                          bold: true,
                      }),
                  ],
              }),
          ],
      },
  ],
});

// Used to export the file into a .docx file
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("MyDocument.docx", buffer);
});



