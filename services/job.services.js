

const Job = require('../models/Job')
const Apply = require('../models/Apply')


exports.getJobService = async(queries)=>{
    const result = await Job.find({})
     .select(queries.fields)
     .sort(queries.sortBy)
    // const result = await Job.find({"positionType":"Manager"})
    //  .skip(queries.skip)
    //  .limit(queries.limit)
    // .select(queries.fields)
    // .sort(queries.sortBy)
    // const totalProducts = await Product.countDocuments(filters)
    // const pageCount = Math.ceil(totalProducts/queries.limit)

    // return {totalProducts , pageCount, products}
    return result
}

exports.createJobService = async (data) => {
    const job = await Job.create(data);
          // candidate Brand
    // const {_id:managerId,candidate}= job;
    //  const result = await Candidate.updateOne(
    //   {_id:candidate.id},
    //   {$push : {candidate: managerId}}
    //   )
    // console.log(result);
    return job;
  };

exports.updateJobServiceById = async(jobId, data)=>{
    const result = await Job.updateOne({_id:jobId}, {$set:data},  {runValidators:true})
    return result
}

// exports.bulkUpdateProductService = async(data) =>{
//     // const result = await Product.updateMany({_id: data.ids}, data.data, {runValidators:true})
//     const products = []
//     data.ids.forEach(product => {
//        products.push (Product.updateOne({_id:product.id}, product.data))
//     })
//     const result = await Promise.all(products)
//     return result
// }

// exports.deleteProductByIdService = async(id) =>{
//     const result = await Product.deleteOne({_id: id} )
//     console.log(result)
//     return result;
// }

// exports.bulkDeleteProductsService = async(ids) =>{
// //   const result = await Product.deleteMany({_id : ids})
// const result = await Product.deleteMany({})
//    return result
// } 

// applyJobService //
// exports.applyJobService = async(data)=>{
//   const result = await ApplyInfo.create(data)
  
 
//  return result
// }


exports.applyJobService = async (data, jobId) => {
  const product = await Apply.create(data);
       // candidate update

       const {_id:Id}= product;
      
       const result= await Job.updateOne(
        {_id:jobId},
        {$push : {candidates: Id}}
        )
  console.log(result);
  return result;
};