import API from '../api';

export default (nameOrEmail, password) => async () => {
  console.log(nameOrEmail, password);
  await API.signIn({ nameOrEmail, password });
  // const res = fetch()
};
