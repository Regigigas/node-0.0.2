const entryModel = require("../models/entry.js");

module.exports = {
  addEntry(req, res) {
    //console.log(req.file) 打印文件文件信息
    const { company, position, salary, address } = req.body;
    const filename = req.file ? req.file.filename : '';
    entryModel.addEntry(company, position, salary, address, filename, (err) => {
      res.json({
        ret: true,
        data: {
          inserted: !err
        }
      })
      console.log("addEntry执行了")
    })
  },

  getEntryList(req, res) {
    const { page, size } = req.query;
    let totalPage = 0;
    entryModel.getEntry({}, (result) => {
      console.log("getEntryList执行了")
     
      if (result && result !== "error") {
        totalPage = Math.ceil(result.length / size)
        entryModel.getEntryByPage(page, size, (result) => {
          res.json({
            ret: true,
            data: {
              list: result,
              totalPage: totalPage
            }
          })
        })
      }
    });
  },

  getEntry(req, res) {
    entryModel.getEntryById(req.query.id, (result) => {
      res.json({
        ret: true,
        data: {
          info: (result && result !== 'error') ? result : false
        }
      })
    });
  },

  removeEntry(req, res) {
    entryModel.removeItemById(req.query.id, (err) => {
      res.json({
        ret: true,
        data: {
          delete: !err
        }
      })
    })
  },

  updateEntry(req, res) {
    const { company, position, salary, address, id } = req.body;

    const params = {
      company,
      position,
      salary,
      address,
    }

    if (req.file && req.file.filename) {
      params.filename = req.file.filename
    }

    entryModel.updateEntryById(id, params, (result) => {
      res.json({
        ret: true,
        data: {
          update: (result && result !== "error") ? true : false
        }
      })
    })
  }
}