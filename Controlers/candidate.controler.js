const { getCandidateService, createCandidateService } = require("../services/candidate.services");

exports.getcandidate = async (req, res, next) => {
    try {
        const result = await getCandidateService();

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


// createCandidate //

exports.createCandidate = async (req, res, next) => {
    try {
      // save or create
  
      const result = await createCandidateService(req.body);
  
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

