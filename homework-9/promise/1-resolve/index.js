console.log('Request data...');

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
      port: 3000,
      status: 'Working'
    };
    resolve(backendData);
  }, 2000);
});

myPromise
  .then(data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.modified = true;
        resolve(data);
      }, 2000);
    });
  })
  .then(clientData => {
    console.log('Data received', clientData);
  })
  .catch(err => console.error('Error: ', err))
  .finally(() => console.log('Finally..!'));
