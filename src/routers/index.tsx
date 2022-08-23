import { useRoutes } from 'react-router-dom';
import config from './config';

export default () => {
  const routes = useRoutes(config);
  return routes;
};
