import React, { useEffect, useState } from 'react'
import { fetchImages } from "../../unsplash-api.js";

import SearchBar from '../SearchBar/SearchBar.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import Loader from '../Loader/Loader.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';

export default function App() {

  const [images, setImages] = useState([]);
  const [imageCurrent, setImageCurrent] = useState({});
  const getImageCurrent = (image) => setImageCurrent(image);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const onSubmit = async (newQuery) => {    
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  // const handleClick = () => {
  //   setPage(page + 1);
  // }
    
  useEffect(() => {
    if (query === "") { return; }
    async function getImages() {      
      try {
        setTotalPages(0);
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(query.query, page);
        setTotalPages(data.total_pages);
        setImages(prevImages => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);
  
  return (
    <>
      < SearchBar onSubmit={onSubmit} />
      { error && <ErrorMessage /> }
      { images.length > 0 && <ImageGallery images={images} openModal={openModal} getImageCurrent={getImageCurrent} /> }
      { isLoading && <Loader /> }
      { page < totalPages && <LoadMoreBtn onClick={() => { setPage(page + 1); }} /> }
      { isOpen && <ImageModal isOpen={isOpen} closeModal={closeModal} imageCurrent={imageCurrent} />}
    </>
  )
}