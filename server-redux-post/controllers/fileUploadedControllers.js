"use strict";

const SingleFile = require("../models/singleFile");

const getAllTasks = async (req, res) => {
  try {
    const taskSingleFiles = await SingleFile.find({});
    res.status(200).json({ taskSingleFiles });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const taskSingleFile = await SingleFile.create(req.body);
    res.status(201).json({ taskSingleFile });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskSingleFileID } = req.params;
    const taskSingleFile = await SingleFile.findOne({ _id: taskSingleFileID });
    if (!taskSingleFile) {
      return req.status(404).json({ msg: `No task with id:${taskSingleFileID}` });
    }
    res.status(200).json({ taskSingleFile });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskSingleFileID } = req.params;
    const taskSingleFile = await SingleFile.findOneAndDelete({ _id: taskSingleFileID });
    if (!task) {
      return req.status(404).json({ msg: `No task with id:${taskSingleFileID}` });
    }
    res.status(200).json({ taskSingleFile });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskSingleFileID } = req.params;
    const taskSingleFile = await SingleFile.findOneAndUpdate({ _id: taskSingleFileID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return req.status(404).json({ msg: `No task with id:${taskSingleFileID}` });
    }
    res.status(200).json({ taskSingleFile });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
