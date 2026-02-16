const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const redis = require('../redis')

router.get('/', async (_, res) => {
  try {
    // Try to get the count from Redis first
    const value = await redis.getAsync('todo_count')
    console.log('Value of todo_count in Redis:', value)
    // If value exists in Redis, return it
    if (value !== null && value !== undefined) {
      const n = Number(value)
      return res.json({ added_todos: Number.isNaN(n) ? 0 : n })
    }

    // If no value in redis -> compute from DB
    let todo_count = 0
    try {
      todo_count = await Todo.countDocuments()
    } catch (e) {
      console.error('Failed to count todos from DB in /statistics:', e)
      return res.status(500).json({ error: 'failed to read todos' })
    }

    // Try to set the todo_count in Redis for future requests
    try {
      await redis.setAsync('todo_count', String(todo_count))
    } catch (e) {
      console.error('Failed to set todo_count in Redis:', e)
    }
    
    // Return the count to the client
    return res.json({ added_todos: todo_count })
  } catch (err) {
    console.error('Unexpected error in /statistics:', err)
    return res.status(500).json({ error: 'internal error' })
  }
});

module.exports = router;