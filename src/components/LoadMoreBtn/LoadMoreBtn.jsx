import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({onClick}) {
            
    return (
        <footer className={css.footer}>
            <button
                type="button"
                onClick={onClick}
                className={css.loadMoreBtn}
            >
                Load more
            </button>
        </footer>
    );
}