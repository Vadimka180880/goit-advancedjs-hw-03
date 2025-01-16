import { fetchImages } from './js/pixabay-api';
import { createGalleryMarkup, renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Ініціалізація SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = form.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  loader.classList.remove('hidden');
  gallery.innerHTML = '';

  try {
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

    // Оновлюємо SimpleLightbox після додавання зображень
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  } finally {
    loader.classList.add('hidden');
  }
});
