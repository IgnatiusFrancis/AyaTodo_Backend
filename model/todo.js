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

// TodoSchema.virtual("formattedExpiration").get(function () {
//   return this.expiration.toLocaleString();
// });
TodoSchema.plugin(mongooseDateFormat, {
  format: "dd-mm-yy hh:MM:ss",
}); // format: YYYY-MM-DD HH:mm:ss
const Todo = mongoose.model("Todo", TodoSchema);

// module.exports = Todo;
export default Todo;
