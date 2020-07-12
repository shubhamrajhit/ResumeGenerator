import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import SectionCol from './SectionCol'
import SectionTable from './sectionTable'



const SectionForm = (props) => {
  const [modal, setModal] = useState(false);

  

  const {buttonLabel,className,ownImgUrl} = props;
  const toggle = () => setModal(!modal);


  const handleBirth=(e)=>{
    props.handleBirth(e)
  }  
  

  return (
    <div className="mt-1">
    
    <Button  onClick={toggle} style={{marginTop:-20,backgroundColor:'#252525'}} ><SectionCol /></Button>
      <Modal isOpen={modal} id="canvas_pack" toggle={toggle} className={className} >
     
        <ModalBody>
            <SectionTable handleBirth={handleBirth} />
        </ModalBody>
        <ModalFooter>
         
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SectionForm;
