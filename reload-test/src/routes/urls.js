import Dashboard from '../pages/dashboard';

const urls = [
    {
      name: 'home',
      url: '/',
      component: Dashboard,
    }
];

const getUrlByName = (name) => {
    const res = urls.find((item) => item.name === name);
    return res.url;
  };
  
  export { urls, getUrlByName };