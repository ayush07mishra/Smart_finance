module.exports = (note) => {
  note = note.toLowerCase();

  if (note.includes("food")) return "Food";
  if (note.includes("rent")) return "Rent";
  if (note.includes("travel")) return "Travel";

  return "Other";
};