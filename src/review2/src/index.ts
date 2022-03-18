interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string
  city: string
  zipcode: string
  geo?: Geo
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

/**
 * https://jsonplaceholder.typicode.com/users/1
 * https://jsonplaceholder.typicode.com/users/1/albums
 * https://jsonplaceholder.typicode.com/albums/1/photos
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com'

function throwErrorIfResponseNotOk(response) {
  if (!response.ok) {
    let error;

    if (response.status) {
      error = new Error(`[${response.status} - ${response.statusText}] ${response.url}`);
      error.status = response.status;
    } else {
      error = new Error(`[${response.statusText}] ${response.url}`);
    }

    throw error;
  }
}

/**
 * https://jsonplaceholder.typicode.com/users/1
 *
 * @param userId the user id
 * @returns
 */
async function fetchUser(userId: number): Promise<User> {
  const url = `${BASE_URL}/users/${userId}`;

  const response = await fetch(url);

  throwErrorIfResponseNotOk(response);

  return response.json();
}

/**
 * https://jsonplaceholder.typicode.com/users/1/albums
 *
 * @param userId the user id
 * @returns
 */
async function fetchUserAlbums(userId: number): Promise<Array<Album>> {
  const url = `${BASE_URL}/users/${userId}/albums`;

  const response = await fetch(url);

  throwErrorIfResponseNotOk(response);

  return response.json();
}

/**
 * https://jsonplaceholder.typicode.com/albums/1/photos
 *
 * @param albumId
 * @returns
 */
async function fetchAlbumPhotos(albumId: number): Promise<Array<Photo>> {
  const url = `${BASE_URL}/albums/${albumId}/photos`;

  const response = await fetch(url);

  throwErrorIfResponseNotOk(response);

  return response.json();
}

async function clickHandler(...args) {
  try {
    const userInput = document.getElementById('userId')
    const userId: number = userInput['value'];
    const userPromise = fetchUser(userId);
    const albumsPromise = fetchUserAlbums(userId);
    const [user, albums] = await Promise.all([userPromise, albumsPromise]);
    const result = document.getElementById('result');
    result.textContent = JSON.stringify(albums);
  } catch (error) {
    console.log(error);
  }
}

fetchUser(2).then((user) => {
  console.log(user);
}).catch((error) => {
  console.log(error.message);
});
