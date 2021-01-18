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
      return acc + queryParamToNumber(cur);
    }, 0);
  } else {
    sum = queryParamToNumber(n);
  }

  return res.json({
    sum,
  });
}

/**
 * Convert a query parameter to a number if it's convertible to number, or 0 if
 * not.
 *
 * @param {any} queryParam - Query parameter coming straight from req.query;
 *
 * @return {number} - The query parameter, converted to a number, or 0 if it's
 * not convertible to a number
 */
function queryParamToNumber(queryParam) {
  const num = Number(queryParam);

  if (!Number.isNaN(num)) {
    return num;
  }

  return 0;
}

export { getMathRoutes };
