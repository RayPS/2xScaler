if(app.documents.length>0){
    var doc = app.activeDocument
 //   plus()
 //   minus()
    }
else{}

function plus(){
    customResizeImage(doc.width*2,doc.height*2)
    }
function minus(){
    customResizeImage(doc.width/2,doc.height/2)
    }

function customResizeImage(Width,Height) {
var desc = new ActionDescriptor();
if(activeDocument.width > activeDocument.height){
desc.putUnitDouble( charIDToTypeID('Wdth'), charIDToTypeID('#Pxl'), Width );
}else{
desc.putUnitDouble( charIDToTypeID('Hght'), charIDToTypeID('#Pxl'), Height);
}
desc.putBoolean( stringIDToTypeID('scaleStyles'), true );
desc.putBoolean( charIDToTypeID('CnsP'), true );
desc.putEnumerated( charIDToTypeID('Intr'), charIDToTypeID('Intp'), charIDToTypeID('Bcbc') );
executeAction( charIDToTypeID('ImgS'), desc, DialogModes.NO );
};