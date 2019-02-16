import { isLogin } from '../util/assist';

export default function({ route, req, res, redirect }) {
  let isClient = process.client;
  let isServer = process.server;
  let redirectURL = '/login';
  if(isServer) {
    let cookies = req.cookies;
    let path = req.originalUrl;
    if(path.indexOf('admin') !== -1 && !cookies.token) {
      redirect(redirectURL);
    }
  }
  if(isClient) {
    if(route.path.indexOf('admin') !== -1 && !isLogin()) {
      redirect(redirectURL);
    }
  }
}