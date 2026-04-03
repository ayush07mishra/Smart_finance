const Transaction = require("../models/Transaction");

exports.summary = async (req, res) => {
  const data = await Transaction.find({ user: req.user.id });

  let income = 0, expense = 0;

  data.forEach(t => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;
  });

  res.json({
    income,
    expense,
    balance: income - expense
  });
};

exports.categoryBreakdown = async (req, res) => {
  const data = await Transaction.aggregate([
    { $match: { user: req.user.id } },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" }
      }
    }
  ]);

  res.json(data);
};