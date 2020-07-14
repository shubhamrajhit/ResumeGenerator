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
  const handleNation=(e)=>{
    props.handleNation(e)
  }  
  const handleAddress=(e)=>{
    props.handleAddress(e)
  }  
  const handleStatus=(e)=>{
    props.handleStatus(e)
  }  
  const handleEmail=(e)=>{
    props.handleEmail(e)
  }  
  const handlePhone=(e)=>{
    props.handlePhone(e)
  }  
  const handleSkype=(e)=>{
    props.handleSkype(e)
  }  
  const handleWeb=(e)=>{
    props.handleWeb(e)
  }  
  const handleLinkdin=(e)=>{
    props.handleLinkdin(e)
  }  
  const handleGithub=(e)=>{
    props.handleGithub(e)
  }  
  const handleMedium=(e)=>{
    props.handleMedium(e)
  }  
  const handleQuara=(e)=>{
    props.handleQuara(e)
  }  
  

  return (
    <div className="mt-1">
    
    <Button  onClick={toggle} style={{marginTop:-20,backgroundColor:'#252525'}} ><SectionCol /></Button>
      <Modal isOpen={modal} id="canvas_pack" toggle={toggle} className={className} >
     
        <ModalBody>
            <SectionTable
             handleBirth={handleBirth}
             handleNation={handleNation}
             handleAddress={handleAddress}
             handleStatus={handleStatus}
             handleEmail={handleEmail}
             handlePhone={handlePhone}
             handleSkype={handleSkype}
             handleWeb={handleWeb}
             handleLinkdin={handleLinkdin}
             handleGithub={handleGithub}
             handleMedium={handleMedium}
             handleQuara={handleQuara}
              />
        </ModalBody>
        <ModalFooter>
         
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SectionForm;
