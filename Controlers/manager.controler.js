const { getManagerJobService, getManagerDetailsServiceById } = require("../services/manager.services");

exports.getManagerJob = async (req, res, next) => {
    try {
        const result = await getManagerJobService();

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

//  getManagerDetailsById //
exports.getManagerDetailsById = async (req, res) => {
      try {
        const { id } = req.params;
        const result = await getManagerDetailsServiceById(id);
        res.status(200).json({
          status: "success",
          message: "successfully get manager details",
          data:result
        });
      } catch (error) {
        res.status(400).json({
          status: "fail",
          message: "couldn't get the details ",
          error: error.message,
        });
      }
    };