import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
    return (
        <span className={css.span}>
            Opps! There was an error. Please reload!
        </span>
    );
}