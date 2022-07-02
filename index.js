var signaturePad;
var docCanvas;

function InitFabric() {
    // Canvas config
    docCanvas = new fabric.Canvas('docCanvas');
    docCanvas.setHeight(window.innerHeight*0.7);
    docCanvas.setWidth(window.innerWidth*0.95);
    docCanvas.renderAll();
  
    

    loadImg();

    function loadImg() {
        fabric.Image.fromURL('contract_example.jpg', function(oImg) {
            oImg.set('left', window.innerWidth/4);
            oImg.set('selectable', false);
            docCanvas.add(oImg);
            docCanvas.sendToBack(oImg)
        });
    }

    // case
    AddFabricObj('signHere', {
      top: 245,
      left: window.innerWidth/4 + 105,
      width: 140,
      height: 40,
      fill: '',
      stroke: 'red',
      strokeWidth: 3,
      selectable: true,
    });

    

    function AddFabricObj(obj, option) {
        let rect = new fabric.Rect(option);
        docCanvas.add(rect);
        // docCanvas.moveTo(rect, 20);
        // docCanvas.requestRenderAll();
    };
    
}

function InitSignaturePad() {
    const canvas = document.querySelector("#signaturePadCanvas");
    signaturePad = new SignaturePad(canvas);
}

InitFabric();
InitSignaturePad();

var btn_confirm = document.querySelector(`#btn_confirm`);
btn_confirm.addEventListener('click', () => {
    let signImgUrl = signaturePad.toDataURL();

    fabric.Image.fromURL(signImgUrl, function(oImg) {
        oImg.set('top', 245);
        oImg.set('left', window.innerWidth/4 + 110);
        oImg.scaleToHeight(280);
        oImg.scaleToWidth(80);
        docCanvas.add(oImg);
    });
});