import mongoose from "mongoose";
import mongooseDateFormat from "mongoose-date-format";
import moment from "moment";
const TodoSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    //   select: false,
    // },

    isCompleted: {
      type: String,
      enum: ["incomplete", "complete"],
      default: "incomplete",
    },
    category: {
      type: String,
      enum: ["personal", "work"],
      required: true,
    },
    expiration: { type: Date, default: new Date(), required: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// TodoSchema.virtual("formattedCreatedAt").get(function () {
//   return moment(this.expiration).format("MMM D, YYYY h:mm A z");
// });
TodoSchema.plugin(mongooseDateFormat); // format: YYYY-MM-DD HH:mm:ss
const Todo = mongoose.model("Todo", TodoSchema);

// module.exports = Todo;
export default Todo;
