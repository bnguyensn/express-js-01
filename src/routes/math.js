import express from 'express';

function getMathRoutes() {
  const router = express.Router();

  router.get('/', hello);
  router.get('/add', add);

  return router;
}

/**
 * Send back 'Hello maths'
 */
async function hello(req, res) {
  res.send('Hello maths!');
}

/**
 * Send back the sum of all numbers. Each number is provided via the 'n' query
 * parameter.
 */
async function add(req, res) {
  const { n } = req.query;

  if (!n) {
    return res.json({
      sum: 0,
    });
  }

  let sum;
  if (Array.isArray(n)) {
    sum = n.reduce((acc, cur) => {
      const num = Number(cur);

      if (!Number.isNaN(num)) {
        acc += num;
      }

      return acc;
    }, 0);
  } else {
    const num = Number(n);

    if (!Number.isNaN(num)) {
      sum = num;
    } else {
      sum = 0;
    }
  }

  return res.json({
    sum,
  });
}

export { getMathRoutes };
