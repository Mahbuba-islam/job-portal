const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const valid = require("validator");

// schema design
const jobSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name for this job."],
      trim: true,
      unique: [true, "jobName must be unique"],
      lowercase: true,
      minLength: [3, "jobName must be at least 3 characters."],
      maxLenght: [100, "jobName is too large"],
    },
    description: {
      type: String,
      
    },
    
    employmentType: {
      type: String,
       enum: {
        values: ["partTime", "fullTime", "contract"],
        message: "employmentType value can't be {VALUE}, must be partTime/fullTime/contract"
      }
    },
   
    location: {
      type: String,
      required:true,
     
    },

   
    jobCategory: {
      type: String,
     
    },

    sallery: {
            type: Number,
            rquired: true,
            min: [0, "sallery can't be negative"],
          },

          status: {
                  type: String,
                  required: true,
                  enum: {
                    values: ["available", "unavailable"],
                    message: "status can't be {VALUE}"
                  }
                },

                deadline:{
                  type:Date,
                  required:true
                },

                candidates: [{
                  type: ObjectId,
                  ref: "Candidate"
                }]
    
  }, {
    timestamps: true,
  })


  
  

   
  
  
  
  const Job = mongoose.model('Job', jobSchema)

  module.exports = Job;