const Transaction = require("../models/Transaction");
const categorize = require("../utils/categorize");

exports.create = async (req, res) => {
  let { amount, type, note } = req.body;

  const category = categorize(note);

  const tx = await Transaction.create({
    user: req.user.id,
    amount,
    type,
    note,
    category
  });

  res.json(tx);
};



exports.getAll = async (req, res) => {
  const { type, category } = req.query;

  let filter = { user: req.user.id };
  if (type) filter.type = type;
  if (category) filter.category = category;

  const data = await Transaction.find(filter);
  res.json(data);
};

exports.update = async (req, res) => {
  const tx = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(tx);
};

exports.delete = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
