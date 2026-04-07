const Admission = require("../models/Admission");

exports.createAdmission = async (req, res) => {
  try {
    const admission = new Admission(req.body);
    await admission.save();
    res.status(201).json({ message: "Application submitted", admission });
  } catch (error) {
    res.status(500).json({ message: "Error submitting application" });
  }
};

exports.getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!admission) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.json({ message: "Status updated", admission });
  } catch (error) {
    res.status(500).json({ message: "Error updating status" });
  }
};

exports.getByEmail = async (req, res) => {
  try {
    const admission = await Admission.findOne({ email: req.params.email });

    if (!admission) {
      return res.status(404).json({ message: "No record found" });
    }

    res.json(admission);
  } catch (error) {
    res.status(500).json({ message: "Error fetching status" });
  }
};

exports.getByStatus = async (req, res) => {
  try {
    const { status } = req.params;

    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const admissions = await Admission.find({ status }).sort({ createdAt: -1 });

    res.json(admissions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching by status" });
  }
};
