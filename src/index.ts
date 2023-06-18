import 'dotenv/config';
import app from './application/app';

const port = process.env.SERVER_PORT;

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });
};

startServer();
