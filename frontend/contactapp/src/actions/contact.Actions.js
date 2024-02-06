import axios from 'axios';

import{ contactConstants} from'./constantes';

export const listerContacts=()=>{
    
 {/* traiter redux*/}
    return async dispatch=>{
{/* demande du donnees du backend*/}      
          dispatch({type:contactConstants.GET_ALL_CONTACTS_REQUEST})

          try{
                 const res=await axios.get(`http://127.0.0.1:3000/contact/lister`)
                 if(res.status===200){
                    dispatch({
                        type:contactConstants.GET_ALL_CONTACTS_SUCCES,
                        payload:{contacts : res.data}
                    })
                 }

          }catch(error){
             dispatch({
                type:contactConstants.GET_ALL_CONTACTS_FAILURE,
                payload : {error :error.response}
             })
          }
    }
}
export const deleteContactAction=(id)=>{
   return async dispatch =>{
      dispatch({ type:contactConstants.DELETE_CONTACT_REQUEST})
      try{
         const res= await axios.get(`http://127.0.0.1:3000/contact/${id}/supprimer`)
         if(res.status ===200){
            dispatch({
               type:contactConstants.DELETE_CONTACT_SUCCES,
               payload :{message:res.data}
            })
         }
      }catch(error){
         dispatch({
            type:contactConstants.DELETE_CONTACT_FAILURE,
            payload :{message:error.response}
         })
      }
   }
}

{/* fonction ajouter  */}
export const addContactAction=(data)=>{
   return async dispatch => {
      dispatch({ type:contactConstants.ADD_CONTACT_REQUEST})
      try{
         const res=await axios.post('http://127.0.0.1:3000/contact/ajouter',data)
         if(res.status===200){
            dispatch({
                type:contactConstants.ADD_CONTACT_SUCCES,
                payload:{createdContact : res.data}
            })
         }
      }catch(error){
         dispatch({
            type:contactConstants.ADD_CONTACT_FAILURE,
            payload : {error :error.response}
         })
      }

   }}

   {/* fonction modifier  */}
export const editContactAction=(id,data)=>{
   return async dispatch => {
      dispatch({ type:contactConstants.EDIT_CONTACT_REQUEST})
      try{
         const res=await axios.post(`http://127.0.0.1:3000/contact/${id}/modifier`,data)
         if(res.status===200){
            dispatch({
                type:contactConstants.EDIT_CONTACT_SUCCES,
                payload:{message : res.data}
            })
         }
      }catch(error){
         dispatch({
            type:contactConstants.EDIT_CONTACT_FAILURE,
            payload : {error :error.response}
         })
      }

   }}