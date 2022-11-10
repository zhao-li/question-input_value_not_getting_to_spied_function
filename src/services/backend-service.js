import axios from 'axios';

const BACKEND_BASE_URL =
  `${import.meta.env['VITE_BACKEND_SCHEME']}` +
  `://` +
  `${import.meta.env['VITE_BACKEND_HOST']}` +
  `:` +
  `${import.meta.env['VITE_BACKEND_PORT']}` +
  `/` +
  `${import.meta.env['VITE_BACKEND_PATH_PREFIX']}`;

const $axios = axios.create({
  baseURL: BACKEND_BASE_URL,
});

export default $axios;
