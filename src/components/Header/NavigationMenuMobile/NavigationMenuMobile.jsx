import style from './NavigationMenuMobile.module.scss';
import logo from '../../../assets/images/logo-main.png';
import crossIcon from '../../../assets/images/cross-icon.png';
import { menuData } from '../header.menus';
import { MobileMenuButton } from './MobileMenuButton/MobileMenuButton';
import { generateUUID } from '../../../utils/generateUUID';
import { useMemo, useState } from 'react';

export const NavigationMenuMobile = ({ toggler, isVisible }) => {
    const [currentExpanded, setCurrentExpanded] = useState(null);
    const changeExpandedHandler = buttonId => () => {
        if (currentExpanded === buttonId) {
            setCurrentExpanded(null);
        } else {
            setCurrentExpanded(buttonId);
        }
    };
    const menuDataModified = useMemo(() => {
        return menuData.map(item => {
            if (item.nested) {
                return {
                    ...item,
                    isExpanded: currentExpanded === item.id,
                };
            }
            return item;
        });
    }, [currentExpanded]);

    return (
        <div
            className={style.container}
            style={{
                transform: `translateX(${isVisible ? '0' : '-100%'})`,
            }}
        >
            <section className={style.menuContent}>
                <header className={style.header}>
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <button onClick={toggler}>
                        <img src={crossIcon} alt="close" />
                    </button>
                </header>
                <div className={style.menu}>
                    {menuDataModified.map(item => {
                        return (
                            <MobileMenuButton
                                key={generateUUID()}
                                button={item}
                                options={{
                                    changeExpandedHandler,
                                }}
                            />
                        );
                    })}
                </div>
            </section>
            <div
                className={style.backdrop}
                onClick={toggler}
                style={{
                    opacity: isVisible ? '1' : '0',
                    width: isVisible ? '15%' : '0',
                    height: isVisible ? '100%' : '0',
                }}
            ></div>
        </div>
    );
};
