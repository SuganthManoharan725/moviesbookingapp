// /services/movieService.js
import inception from '../public/Inception.webp'; // Import the image
import Interstellar from '../public/Interstellar.webp';
import Avatar from '../public/Avatar.webp';

export const getMovies = async () => {
  // Ideally, fetch from an API. Using dummy data for now.
  return [
    { id: 1, name: 'Inception', year: 2010, image: inception },
    { id: 2, name: 'Interstellar', year: 2014, image: Interstellar },  // Assuming it's in the public folder
    { id: 3, name: 'Avatar', year: 2024, image: Avatar},  // Assuming it's in the public folder
  ];
};
