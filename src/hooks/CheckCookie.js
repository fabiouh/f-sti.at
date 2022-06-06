import { read_cookie } from 'sfcookies';

export default function CheckCookie() {
  if (read_cookie('fsticookieconsent')) {
    return true;
  } else {
    return false;
  }
}
