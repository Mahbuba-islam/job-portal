const Job = require("../models/Job")

exports.getManagerJobService = async()=>{
    const result = await Job.find({"role":"manager"})
    return result
}

// getManagerDetailsServiceById //
exports.getManagerDetailsServiceById = async(managerId)=>{
        const result = await Job.findOne({_id:managerId})
        return result
    }