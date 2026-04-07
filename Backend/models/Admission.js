const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  qualification: String,
  marks: Number,
  dob: String,
  gender: String,
  address: String,
  guardianName: String,
  guardianPhone: String,
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Admission", admissionSchema);
