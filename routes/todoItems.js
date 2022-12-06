//Class where CRUD operations happen on backend
const router = require("express").Router();


const todoItemsModel = require("../models/todoItems");

//first route - Sending data to database
router.post("/api/item/isDone", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
      isDone: req.body.isDone,
    });

    //save the item in database
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

//Creation of second route -- Getting data from database
router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

//Update todo item
router.put("/api/item/:id", async (req, res) => {
  try {
    //find item using id the update it
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    req.status(200).json("Item Updated");
  } catch (err) {
    res.json(err);
  }
});

//Delete item from the database
router.delete("/api/item/:id", async (req, res) => {
  try {
    //find item using id the delete it
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);

    req.status(200).json("Item Deleted");
  } catch (err) {
    res.json(err);
  }
});

//export router
module.exports = router;
