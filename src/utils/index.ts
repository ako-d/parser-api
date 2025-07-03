export const corsSuccessResponse = (body: any) => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
});

export const corsErrorResponse = (body: any) => ({
  statusCode: 500,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: JSON.stringify(body),
});

export const runWarm = (lambda: any) => {
  return (event: any, context: any, callback: any) => {
    if (event.source === 'serverless-plugin-warmup') {
      return callback(null, 'Lambda is warm!');
    }
    return lambda(event, context, callback);
  };
};
