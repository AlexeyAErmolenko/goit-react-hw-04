import css from './ImageModal.module.css';
// import Modal from 'react-modal';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function ImageModal( {isOpen, closeModal, imageCurrent} ) { 
    return (
        <div>
            <Modal
                style={{
                    overlay: { backgroundColor: 'rgba(10, 10, 10, 0.75)' },
                }}
                isOpen={isOpen}
                onRequestClose={closeModal}
            >                    
                <img src={imageCurrent.urls.regular} alt={imageCurrent.description} />
                <p className={css.topLeft}>{imageCurrent.alt_description}. likes: {imageCurrent.likes}</p>
                <p className={css.bottomRight}>Autor: {imageCurrent.user.name}. Created: {imageCurrent.created_at}</p>
            </Modal>    
        </div>    
    );
}