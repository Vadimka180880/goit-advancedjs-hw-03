import { fetchImages } from './js/pixabay-api.js';
import { createGalleryMarkup, renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

async function searchImages(query) {
  try {
    showLoader();
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    const markup = createGalleryMarkup(data.hits);
    renderGallery(gallery, markup);
    lightbox.refresh();
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = form.elements.searchQuery.value.trim();

  if (query === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  gallery.innerHTML = '';
  searchImages(query);
});
