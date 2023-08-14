const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = express.Router()
//import all model's objects
const {users} = require('../model')
