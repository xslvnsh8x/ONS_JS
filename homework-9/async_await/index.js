const API = 'https://jsonplaceholder.typicode.com';

const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

async function fetchAsyncFakeData() {
  console.log('Start fetching...')
  await delay(2000);

  try {
    console.log('Listing all resources...');
    await delay(2000);
    const response = await fetch(API + '/posts');
    const data = await response.json();
    console.log('Data: ', data);
  }
  catch (err) {
    console.error(err);
  }

  try {
    console.log('Creating a resource...');
    await delay(2000);
    const response = await fetch(API + '/comments');
    const data = await response.json();
    console.log('Data: ', data);
  } catch (err) {
    console.error(err);
  }

  try {
    console.log('Updating a resource...');
    await delay(2000);
    const response = await fetch(API + '/photos');
    const data = await response.json();
    console.log('Data: ', data);
  } catch (err) {
    console.error(err);
  }

  try {
    console.log('Deleting a resource...');
    await delay(2000);
    const response = await fetch(API + '/users');
    const data = await response.json();
    console.log('Data: ', data);
    console.log('Deleted');
  } catch (err) {
    console.error(err);
  }
}

fetchAsyncFakeData()
  .catch(alert);
