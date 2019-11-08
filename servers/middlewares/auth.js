import jwt from 'jsonwebtoken';

const Auth = {
  async verifyToken(request, response, next) {
    const { token } = request.headers;
    if (!token) {
      return response.status(401)
        .send({
          status: response.statusCode,
          message: 'Unauthorized, No token provided',
        });
    }

    try {
      const user = await jwt.verify(token, process.env.JWT_SECRET);
      if (!user) {
        return response.status(401)
          .send({
            status: response.statusCode,
            message: 'Token expired',
          });
      }
      request.user = { id: user.id };
      next();
    } catch (error) {
      return response.status(401)
        .send({
          status: response.statusCode,
          message: 'Invalid token',
        });
    }
  },
};

export default Auth;