const mongoose = require("mongoose");
console.log(process.env.MONGO_URI);
module.exports = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB Connected");
};

// const mongoose = require("mongoose");

// module.exports = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://mishra108ayush_db_user:EHwB69zAzhYom8Vm@cluster0.wxaullz.mongodb.net/?appName=Cluster0"
//     );
//     console.log("DB Connected");
//   } catch (err) {
//     console.error("DB Error:", err.message);
//   }
// };