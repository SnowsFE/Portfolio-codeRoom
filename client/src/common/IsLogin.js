export const isLogin = () => {
  let username = sessionStorage.getItem("username");
  if (username === null) {
    return false;
  }
  return true;
};
