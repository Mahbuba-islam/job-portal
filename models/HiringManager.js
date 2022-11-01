const mongoose = require('mongoose')
const validator = require('validator')
const {ObjectId} = mongoose.Schema.Types


const managerInfoSchema = mongoose.Schema({
  
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
          ref: "Candidate",
          required: true,
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

    positionType:{
        type:String,
        required:true
    },
    
     applyDate:{
        type:String,
        required:true,
       },
   
       job: {
        name: {
          type: String,
          required: true,
        },
        id: {
          type: ObjectId,
          ref: "Job",
          required: true,
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

const ManagerInfo = mongoose.model('ManagerInfo', managerInfoSchema)

exports = ManagerInfo