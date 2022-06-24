const PDF=require('pdfkit')

function generateInvoice(objData,dataCallback,endCallback){
    console.log("here: "+objData);
    let bill="Order ID: ";
    let write=true;
    bill+=`${objData.id}`;
    for(let propt in objData){
        if(propt=='date') write=false;
        if(write) continue;
        if((objData[propt])!='0') bill+=`\n${propt} : ${objData[propt]}`;
        if(propt=='cost') break;
    }
    const doc = new PDF();
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc
    .fontSize(25)
    .text(bill,20,20);
    doc.end();
}

module.exports= {generateInvoice};