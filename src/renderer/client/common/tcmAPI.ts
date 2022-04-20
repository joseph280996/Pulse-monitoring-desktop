import FetchController from './utils/FetchController';

const tcmAPIRequestController = new FetchController(
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'http://192.168.50.185:8000'
);

export default tcmAPIRequestController;
