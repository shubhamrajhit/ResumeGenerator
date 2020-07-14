import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import html2canvas from 'html2canvas'
import DownPrev from './downPrev'
import Preview from './preview'



const PreviewModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;
 
 
  const test = () => {
  
    html2canvas(document.querySelector("#capture"))
       .then(function (canvas) {
        var data = canvas.toDataURL("image/jpeg",0.9);
          handlepassurl(data)
       })
    
        
  }


  function handlepassurl(url){
    props.handleshareurl(url)
  }

  function both(){
    toggle()
    test()
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="mt-4 ">
    <buttom onClick={both} ><Preview /></buttom>
      <Modal isOpen={modal} id="canvas_pack" toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>
        <div style={{marginLeft:120,marginTop:10}}>
            <a href={props.shareurl} download style={{marginRight:50,fontSize:20}}><DownPrev/></a>
        </div>
      </ModalHeader>
        <ModalBody>
          <img src={props.shareurl} style={{width:"100%",height:"100%",outline:'none'}} /> 


         
        </ModalBody>
        <ModalFooter>
        
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default PreviewModal;