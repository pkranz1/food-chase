const { User } = require('../models');
const superTest = require('supertest');
const app = require('../app');
const api = superTest(app);
