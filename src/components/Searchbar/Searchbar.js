import css from './Searchbar.module.css';
export const Searchbar = () => (
    <header className={css.Searchbar}>
        <form className={css.SearchForm}>
            <button type="submit" className={css.Searchformbutton}>
      <span className={css.Searchformbuttonlabel}>Search</span>
    </button>

    <input
      name='inputForSearch'
      className={css.Searchforminput}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)