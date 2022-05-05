const express = require('express');
const userRouter = require('./users/routerUser');

const router = express();

router.use('/user', userRouter);


module.exports = router;