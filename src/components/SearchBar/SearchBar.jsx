import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar( {onSubmit} ) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        if (form.elements.query.value) {
            onSubmit( {query: form.elements.query.value} );
            form.reset();
        } else {
            toast.error('The search field is empty. Please fill it in!');            
        }         
    };
    return (
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    name="query"
                    className={css.input}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                />
                <button type="submit" className={css.btnSubmit}>Search</button>
                < Toaster position="top-right" />
            </form>
        </header>
    );
}