import style from './MobileBurgerMenu.module.scss';
import mobileMenuIcon from '../../assets/images/burger-menu-icon.png';
import { useResizeContext } from '../../contexts/ResizeContext';

export const MobileBurgerMenu = ({ toggler }) => {
    const { width } = useResizeContext();

    return (
        width > 768 ? (
            <div style={{
                width: 25,
                height: 16,
            }}></div>
        ) : (
            <button className={style.menuButton}>
                <img
                    onClick={toggler}
                    src={mobileMenuIcon}
                    alt="menu icon"
                    className={style.menuIcon}
                />
            </button>
        )
    );
};
