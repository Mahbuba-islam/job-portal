const mongoose = require('mongoose')
const validator = require('validator')
const {ObjectId} = mongoose.Schema.Types


const applySchema = mongoose.Schema({
  
     personalInfo: {
        name: {
          type: String,
          required: true,
        },
        email: {
            type: String,
            required: true,
          },
        id: {
          type: ObjectId,
          unique:[true, 'already applied'],
          ref: "Candidate",
         
        }
      },
  
    experience:{
        type:String,
        required:true,
    },

    qualification:{
        type:String,
        required:true,
    },

    
    
   
       job: {
        name: {
          type: String,

         },
        id: {
          unique:[true, 'already applied'],
          type: ObjectId,
          
          ref: "Job",
         
        }
      },
       

    resume:{
        type:String,
       },

    status:{
    type:String,
    enum:{
     values:['active', 'inactive'],
     message:"status can't be {VALUE}"
    },

   
    }

},


{
    timestamps:true
})



const Apply = mongoose.model('Apply', applySchema)

module.exports = Apply