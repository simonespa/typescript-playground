// import photos from './photos.json';

// console.log(photos.photos[0]);

interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

class Snap implements Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(snap:Photo) {
    this.albumId = snap.albumId;
    this.id = snap.id;
    this.title = snap.title;
    this.url = snap.url;
    this.thumbnailUrl = snap.thumbnailUrl;
  }
}
