function corsSuccessResponse(body) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  };
}

function corsErrorResponse(body) {
  return {
    statusCode: 500,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  };
}

function runWarm(lambda) {
  return (event, context, callback) => {
    if (event.source === 'serverless-plugin-warmup') {
      return callback(null, 'Lambda is warm!');
    }
    return lambda(event, context, callback);
  };
}

module.exports = {
  corsSuccessResponse,
  corsErrorResponse,
  runWarm,
};
