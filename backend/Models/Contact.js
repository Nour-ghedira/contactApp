//appel du mongoose
const mongoose=require('mongoose')
//shema du collection{id(par defaut),nom,num}
const ContactShema= new mongoose.Schema({
nom:{
    type:String,
    required:true
},
numero:{
    type:String,
    required:true
}
},{timestamps:true})
//creation d'une collection
module.exports=mongoose.model('contacts',ContactShema)
