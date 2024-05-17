import style from './SearchBox.module.scss';
import searchIcon from '../../assets/images/search-icon.png';
import { useRef, useState } from 'react';
import { useSearchContext } from '../../contexts/SearchContext';

export const SearchBox = () => {
    const { updateSearchQuery, searchQuery } = useSearchContext();
    const inputRef = useRef(undefined);
    const [isVisible, setIsVisible] = useState(false);
    const changeVisibilityHandler = () => {
        setIsVisible(!isVisible);
        inputRef.current.focus();
    };
    const changeInputValueHandler = e => {
        updateSearchQuery(e.target.value);
    };

    return (
        <div className={style.searchBox}>
            <div className={style.container}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type here..."
                    value={searchQuery}
                    onChange={changeInputValueHandler}
                    style={{
                        transform: `translate(${isVisible ? '0%' : '-100%'})`,
                    }}
                />
            </div>
            <button className={style.searchButton} onClick={changeVisibilityHandler}>
                <img src={searchIcon} alt="search icon" className={style.searchIcon} />
            </button>
        </div>
    );
};
