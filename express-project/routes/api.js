const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.js")
const positionController = require("../controllers/position.js")
//入职管理
const entryController = require("../controllers/entry.js")

const upload = require('../utils/upload')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/isLogin', userController.isLogin)
router.get('/logout', userController.logout)

router.post('/addPosition', upload.single('logo'), positionController.addPosition)
router.get('/removePosition', positionController.removePosition)
router.get('/getPositionList', positionController.getPositionList)
router.get('/getPosition', positionController.getPosition)
router.post('/updatePosition', upload.single('logo'), positionController.updatePosition)

router.post('/addEntry', upload.single('logo'), entryController.addEntry)
router.get('/removeEntry', entryController.removeEntry)
router.get('/getEntryList', entryController.getEntryList)
router.get('/getEntry', entryController.getEntry)
router.post('/updateEntry', upload.single('logo'), entryController.updateEntry)

module.exports = router;
