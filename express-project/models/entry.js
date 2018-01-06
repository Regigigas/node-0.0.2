var mongoose = require('../utils/database.js')

var Entry = mongoose.model('entry', {
  company: String,
  position: String,
  salary: String,
  address: String,
  filename: String
});

module.exports = {
  addEntry(company, position, salary, address, filename, cb) {
    var entry = new Entry({ company, position, salary, address, filename });

    entry.save(function (err) {
      console.log(err);
      cb(err)
    })
  },
  getEntry(params, cb) {
    Entry.find(params).then((result) => {
      cb(result);
    }).catch(() => {
      cb("error");
    })
  },
  getEntryByPage(page, size, cb) {
    let _size = parseInt(size, 10),
      _page = parseInt(page, 10);
    Entry.find({}).limit(_size).skip((_page - 1) * _size).then((result) => {
      cb(result)
    }).catch(() => {
      cb('error')
    })
  },
  removeItemById(id, cb) {
    Entry.findByIdAndRemove(id, (err) => {
      cb(err);
    })
  },
  getEntryById(id, cb) {
    Entry.findById(id).then((result) => {
      cb(result)
    }).catch(() => {
      cb('error')
    })
  },
  updateEntryById(id, params, cb) {
    Entry.findByIdAndUpdate(id, params).then((result) => {
      cb(result);
    }).catch(() => {
      cb("error")
    })
  }
}