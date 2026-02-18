const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

/* GET index data. */
router.get('/', async (req, res) => {
  let count = await redis.getAsync("visits_count");

  if (!count) {
    // Key does not exist yet
    count = 1;
  } else {
    count = parseInt(count) + 1;
  }

  await redis.setAsync("visits_count", count);

  res.send({
    ...configs,
    visits: count
  });
});

module.exports = router;
