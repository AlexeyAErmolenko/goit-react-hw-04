import css from './ImageCard.module.css'

export default function ImageCard({ image, openModal, getImageCurrent }) {
  
  const handleOpenModal = () => {
    getImageCurrent(image);
    openModal();
  }
    
  return (
    <div className={css.container}>
        <img src={image.urls.small} alt={image.description} onClick={handleOpenModal}/>
    </div>
    )
}