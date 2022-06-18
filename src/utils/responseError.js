const responseError = (h, error, ClientError) => {
  if (error instanceof ClientError) {
    const response = h.response({
      status: 'fail',
      message: error.message,
    });
    response.code(error.statusCode);
    return response;
  }
  const response = h.response({
    status: 'error',
    messsage: 'Maaf, terjadi kegagalan pada server kami.',
  });
  response.code(500);
  console.error(error);
  return response;
};