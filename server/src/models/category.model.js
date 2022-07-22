const categories = require('./category.mongo');

async function getAllCategories() {
  return await categories.find({});
}

async function addNewCategory(data) {
  try {
    await categories.updateOne(
      {
        category: data.category,
      },
      {
        category: data.category,
      },
      { upsert: true }
    );
  } catch (err) {
    console.error(`Could not save planet ${err}`);
  }
}

module.exports = {
  getAllCategories,
  addNewCategory,
};
