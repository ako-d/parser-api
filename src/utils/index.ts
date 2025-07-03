export const corsSuccessResponse = (body) => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
});

export const corsErrorResponse = (body) => ({
  statusCode: 500,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
});

export const runWarm = (lambda) => {
  return (event, context, callback) => {
    // Detect the "warming" event from serverless-plugin-warmup
    if (event.source === 'serverless-plugin-warmup') {
      return callback(null, 'Lambda is warm!');
    }
    return lambda(event, context, callback);
  };
};
