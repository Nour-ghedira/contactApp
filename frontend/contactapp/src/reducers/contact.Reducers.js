import{contactConstants} from '../actions/constantes';

const initialState={
    contacts :[],
    error:null,
    createdC:{},
    message:''
}

{/* action lister */}
export default (state=initialState,action)=>{
    switch(action.type){
        //GET ALL CONTACT
       case contactConstants.GET_ALL_CONTACTS_REQUEST :
         {/* ... state ne change pas*/}
        state={
            ...state
        }
        break;
        case contactConstants.GET_ALL_CONTACTS_SUCCES:
            state={
                ...state,
                contacts:action.payload.contacts
            }
            break;
             {/* cas state change */}
            case contactConstants.GET_ALL_CONTACTS_FAILURE:
                state={
                    ...state,
                    error : action.payload.error
                }
                break;
         //ADD CONTACT
          case contactConstants.ADD_CONTACT_REQUEST:
                state={
                    ...state,
                    
                    }
                    break;
            case contactConstants.ADD_CONTACT_SUCCES:
            state={
                ...state,
                createdC:action.payload.createdContact 
            }
            break;
            case contactConstants.ADD_CONTACT_FAILURE:
            state={
                ...state,
                error : action.payload.error
            }
            break;
//EDIT CONTACT
case contactConstants.EDIT_CONTACT_REQUEST:
    state={
        ...state,
        
        }
        break;
case contactConstants.EDIT_CONTACT_SUCCES:
state={
    ...state,
    message:action.payload.message
}
break;
case contactConstants.EDIT_CONTACT_FAILURE:
state={
    ...state,
    error : action.payload.error
}
break;

            //DELETE CONTACT
          case contactConstants.DELETE_CONTACT_REQUEST:
            state={
                ...state,
                
                }
                break;
        case contactConstants.DELETE_CONTACT_SUCCES:
        state={
            ...state,
            message:action.payload.message 
        }
        break;
        case contactConstants.DELETE_CONTACT_FAILURE:
        state={
            ...state,
            error : action.payload.error
        }
        break;


                default :
                console.log('default action')
    }
                return state;
}

