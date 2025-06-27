import ImageCard from "../ImageCard/ImageCard.jsx";
import css from './ImageGallery.module.css'

export default function ImageGallery({images, openModal, getImageCurrent}) {
  return (
  <div className={css.main}>
    <ul className={css.list}>
        {images.map(image => (
            <li key={image.id} className={css.item}>
                <ImageCard image={image} openModal={openModal} getImageCurrent={getImageCurrent} />
            </li>
        ))}
    </ul>
  </div>
  )
}