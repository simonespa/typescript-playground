/**
 * https://jsonplaceholder.typicode.com/users/1
 * https://jsonplaceholder.typicode.com/users/1/albums
 * https://jsonplaceholder.typicode.com/albums/1/photos
 */

import { User, Album, Photo } from './types';

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
export async function fetchUser(userId: number): Promise<User> {
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
export async function fetchUserAlbums(userId: number): Promise<Array<Album>> {
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
export async function fetchAlbumPhotos(albumId: number): Promise<Array<Photo>> {
  const url = `${BASE_URL}/albums/${albumId}/photos`;

  const response = await fetch(url);

  throwErrorIfResponseNotOk(response);

  return response.json();
}
