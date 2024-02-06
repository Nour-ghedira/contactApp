import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar,Container,Button,Table,Modal,Form,Alert}from 'react-bootstrap';
import { useEffect, useState } from 'react';
import{listerContacts,addContactAction,deleteContactAction,editContactAction}from './actions/contact.Actions'
import { useDispatch, useSelector } from 'react-redux';

function App() {
  
const dispatch=useDispatch();
const contacts= useSelector(state =>state.contact.contacts.contactList)
  useEffect(()=>{
    
     dispatch(listerContacts())
  },[])
const[id,setId]=useState('');
const[nom,setNom]=useState('');
const[numero,setNumero]=useState('');
   {/*declaration de variable show/}
   {/*setShow pour modifier la valeur de show*/}
  const [show, setShow] = useState(false);
  {/*handleClose fonction pour cloturer modal de l'ajout*/}
  const handleClose = () => setShow(false);
  {/*handleShow fonction pour modifier la valeur de show en true*/}
  const handleShow = () => setShow(true);

  const [edit, setEdit] = useState(false);
   {/*handleClose fonction pour cloturer modal du modifier*/}
  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = (id) => {
    contacts.forEach(c=>{
      if(c._id == id){
        setId(c._id)
        setNom(c.nom) //bch yjibli fl input nom du formulaire esm eli nzelt alih modifier
        setNumero(c.numero)
        //console.log(id);
      }
    })
   // console.log(id);
    setEdit(true);
  }
  //ajout
  const addContact=async()=>{
    console.log(nom);
    console.log(numero);
    const data={
      nom,
      numero
    }
    await dispatch(addContactAction(data))
    await dispatch(listerContacts()) //ajout sans faire refrech la page
    handleClose() //fermeture de modals automatique quand on savechanges

    //effacer le nom et numero mel formulaire sinon chyokeedou dhahrin fl placeholder 
    setNom('')
    setNumero('')
  }
//modifier
  const editContact=async()=>{
   
    
    const data={
      nom,
      numero
    }
    await dispatch(editContactAction(id,data)) //men contact.Actions
    await dispatch(listerContacts()) 
    handleCloseEdit() //fermeture de modals automatique quand on savechanges

    //effacer le nom et numero mel formulaire sinon chyokeedou dhahrin fl placeholder 
    setNom('')
    setNumero('')
    setId('')
    
  }
//supprimer
  const deleteContact=async(id)=>{
  // console.log(id);
  await dispatch(deleteContactAction(id))//effacer contact
  await dispatch(listerContacts())//refrech l liste

  }

  return (
    <div className="App">
    {/*navbar*/}
    <Navbar expand="lg" bg="primary" variant="dark"> 
      <Container>
        <Navbar.Brand href="#home">Contact App</Navbar.Brand>
        
      </Container>
    </Navbar>
    <div className='d-flex justify-content-start p-4'>
      {/*onClick={handleShow} permet d'afficher modal du bootstrap on cliquant sur bouton ajouter*/}
    <Button variant="primary" onClick={handleShow}> Ajouter </Button><br />
    
    </div>
    
    <div className='d-flex justify-content-start'>
    <h4> Liste des contacts</h4>
    
   
    </div>
    <div>
    {
      contacts && contacts.length >0 ?
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Numero</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {/*boucle avec map */}
        {
          contacts.map((contact,index)=> 
          <tr key={index}>
          <td>{index}</td>
          <td>{contact.nom}</td>
          <td>{contact.numero}</td>
          <td>
          <Button variant="success" className='me-2' onClick={()=> handleShowEdit(contact._id)}>Modifier</Button>
          <Button variant="danger" onClick={()=>deleteContact(contact._id)}>Supprimer</Button>
          </td>
        </tr> )
        }
        

        

        
        
        
      </tbody>
    </Table>
   : <Alert variant='info' className='d-flex justify-content-start'>
    'Aucun contact trouve ...'
  </Alert>
    
  }
    </div>

    {/*Popup (=Modal) ajout*/}
       {/*tester si le show true affiche modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    {/*formulaire */}
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" value={nom} onChange={(e)=>{setNom(e.target.value)} }placeholder="Enter le nom pour ce contact" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="text" value={numero} onChange={(e)=>{setNumero(e.target.value)} } placeholder="entrer contact" />
      </Form.Group>
      
      
    </Form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"onClick={addContact} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    {/*Popup (=Modal) modifier*/}

      <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    {/*formulaire */}
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" value={nom} onChange={(e)=>{setNom(e.target.value)} } placeholder="Enter le nom pour ce contact" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="text" value={numero} onChange={(e)=>{setNumero(e.target.value)} }  placeholder="entrer contact" />
      </Form.Group>
      
      
    </Form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={editContact} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

    
  );
}

export default App;
