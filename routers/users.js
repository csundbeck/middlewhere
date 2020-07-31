const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router.get('/users/', usersController.getAllUsers)

// router.get('/:id', usersController.getUserById)

router.post('/login/', usersController.createUser)

// router.put('/:id', usersController.updateUserById)

// router.delete('/:first_name', usersController.deleteUserByFirstName)

module.exports = router