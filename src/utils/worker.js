export default () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV && NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/assets/service-worker.js')
        .then((registration) => console.log(`👩🏻‍🔧 we're working 👨🏽‍🔧 in: `, registration))
        .catch((err) => console.log(`there was a problem, 👩🏻‍🔧 let's check 👨🏽‍🔧`, err));
    });
  }

  return true;
};
