import style from './NavigationMenu.module.scss';
import { menuData } from '../header.menus';
import chevronIcon from '../../../assets/images/chevron-icon.png';

export const NavigationMenu = () => {
    return (
        <nav className={style.navigationMenu}>
            <section className={style.sections}>
                {menuData.map(({ id, title, url, nested }) => {
                    return (
                        <button key={id}>
                            {nested ? <span>{title}</span> : <a href={url}>{title}</a>}
                            {nested?.length ? (
                                <>
                                    <img src={chevronIcon} alt="chevron icon" />
                                    <section className={style.tooltip}>
                                        {nested.map(sub => {
                                            return (
                                                <button key={sub.id} className={style.nestedButton}>
                                                    <p>{sub.title}</p>
                                                    <img src={chevronIcon} alt="chevron icon" className={style.chevron} />
                                                </button>
                                            );
                                        })}
                                    </section>
                                </>
                            ) : null}
                        </button>
                    );
                })}
            </section>
        </nav>
    );
};
