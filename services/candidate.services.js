const Candidate = require("../models/Candidate");

exports.getCandidateService = async()=>{
    const result = await Candidate.find({})
    return result
}

// createCandidateService //
exports.createCandidateService = async (data) => {
    const job = await Candidate.create(data);
    //       // candidate Brand
    // const {_id:managerId,candidate}= job;
    //  const result = await Candidate.updateOne(
    //   {_id:candidate.id},
    //   {$push : {candidate: managerId}}
    //   )
    // console.log(result);
    return job;
  };