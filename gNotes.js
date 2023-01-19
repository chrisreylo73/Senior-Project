
import * as docx from "docx"; //For creating and manipulating word documents
import pkg from 'docx'//For creating and manipulating word documents
const { Document, Packer, Paragraph, TextRun } = pkg//For creating and manipulating word documents
import * as fs from "fs"; //For saving and exporting documents
let i = 0;
//maybe switch to require.


/*Saving browser highlighted text to variable "text"*/
function highlightAndSave(){
    //temp button functionality
    const element = document.getElementById("myBtn");
    element.addEventListener("click", getText);

    function getText(){
        let text = "";
        if(document.getSelection()){
          text = document.getSelection();
        }
        else if (document.selection.createRange()) {
         text = document.getSelection()
        }
        alert(text);
    }
}

/*Creating a new word document*/
function createDocument(){
    let doc = new Document({
        title: "I Am A Test",
        sections: [{
            children: [
                //some test method calls
                appendBulletPoint(),
                appendBulletPoint(),
                appendBulletPoint(),
                appendPageBreak()
            ]
        }]
    });
    exportDocument(doc)
}

/*Adds bullet point to a document when called. */
function appendBulletPoint(){
    let newBullet = new Paragraph({
        text: "sample info number " + i, //Need to change text value to to saved highlighted text in future
        bullet: {
            level: 0
        }
    })
    i++;
    return newBullet
}


/*Adds page break to a document when called */
function appendPageBreak(){
    let pageBreak = new Paragraph({
        children: [
            new TextRun("---------------------------------------------------------------------------------------------------------------------------------------")
        ]
    })
    return pageBreak
}

function apppendSection(){
}

/*Exports created word document to current directory*/
function exportDocument(doc){
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("MyDocument.docx", buffer);
    });
}

//createDocument();
highlightAndSave();