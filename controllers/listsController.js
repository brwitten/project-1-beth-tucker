var db = require('../models');

// GET /api/lists
function index(req, res) {
  // access database and pull out all lists
  db.List.find({}, function(err, allLists) {
    res.json(allLists);
  });
}

// POST /api/lists
function create(req, res) {
  // create an list based on request body and send it back as JSON
  var inputList = req.body;
  //test input being submitted to db
  console.log(inputList);

  db.List.create(inputList, function(err, list){
    if (err) {console.log('error', err);}
    console.log(list);
    res.json(list);
  });
}

// GET /api/lists/:listId
function show(req, res) {
  // find one list by id and send it back as JSON
  db.Todo.findOne({_list: selected})
    .populate('_list')
    .exec(function (err, todos) {
      if (err){
        console.log(err);
      }
      if (todos._list === List.listName){
        console.log("we found a match");
      }
    })
  //remove all items from display
    //if the display selection === listName of the todo then

}

// DELETE /api/lists/:listId
function destroy(req, res) {
  // find one list by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/lists/:listId
function update(req, res) {
  // find one list by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
