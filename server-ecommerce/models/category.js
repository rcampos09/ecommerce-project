const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            requeire: "Name is required",
            minlength: [2, "too short"],
            maxlength: [2, "too short"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
    },
    { timestamp: true }
);

module.exports = mongoose.model("Category", categorySchema);