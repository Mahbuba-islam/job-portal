const Apply = require("../models/Apply");
const Job = require("../models/Job");
const {
  // getProductsService,
  createJobService, getJobService, applyJobService
  // bulkUpdateProductService,
  // updateProductServiceById,
  // deleteProductByIdService,
  // bulkDeleteProductsService,
} = require("../services/job.services");

 exports.getJob = async (req, res, next) => {
   try {
    let filters = { ...req.query };

  //  sort, page, limit =>exclude
    const excludeFields = ["sort", "page", "limit"];
     excludeFields.forEach((field) => delete filters[field]);

    //gt, lt, gte, lte
    let filtersString = JSON.stringify(filters)
    filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match=>`$${match}`)
    filters = JSON.parse(filtersString)
    const queries = {}
    if(req.query.sort){
      const sortBy = req.query.sort.split(',').join(' ')
      queries.sortBy=sortBy
      console.log(sortBy)
    }

    if(req.query.fields){
      const fields = req.query.fields.split(',').join(' ')
      queries.fields = fields
    }

    
    const result = await getJobService(queries,filters);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } 
  catch (error) {
    res.status(400).json({
      status: "fail",
      message: "cant get data",
      error: error.message,
    });
  }
};

exports.createJob = async (req, res, next) => {
  try {
    // save or create

    const result = await createJobService(req.body);

    res.status(200).json({
      status: "success",
      messgae: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};

// update controller
exports.updateJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateJobServiceById(id, req.body);
    res.status(200).json({
      status: "success",
      message: "successfully updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "couldn't update the product",
      error: error.message,
    });
  }
};


exports.applyJobById = async (req, res, next) => {
  try {
    // save or create
     const {id} = req.params
    const result = await applyJobService(req.body, id);
    res.status(200).json({
      status: "success",
      messgae: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};