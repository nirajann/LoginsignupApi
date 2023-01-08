const user = require("../models/user");

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await user.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const updatedUser = await user.findByIdAndDelete(req.params.id);

    res.status(200).json("user has been Deleted");
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await user.find();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const users = await user.findById(req.params.id);

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};



module.exports = { updateUser, deleteUser, getUser, getUsers };
