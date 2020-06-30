import app from './app';
import './database';
// eslint-disable-next-line import/order

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
