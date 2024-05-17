import style from './Header.module.scss';
import logo from '../../assets/images/logo-main.png';

import { Divider } from '../Divider/Divider';
import { Container } from '../Container/Container';
import { MobileBurgerMenu } from '../MobileBurgerMenu/MobileBurgerMenu';
import { SearchBox } from '../SearchBox/SearchBox';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useResizeContext } from '../../contexts/ResizeContext';
import { NavigationMenuMobile } from './NavigationMenuMobile/NavigationMenuMobile';
import { HEADER_SHOULD_BE_HIDDEN } from './consts';

export const Header = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const prevScrollY = useRef(0);
    const { width } = useResizeContext();

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > HEADER_SHOULD_BE_HIDDEN && currentScrollY > prevScrollY.current) {
            setIsHeaderVisible(false);
        } else {
            setIsHeaderVisible(true);
        }

        prevScrollY.current = currentScrollY;
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, []);

    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const changeMenuVisibility = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    return (
        <header
            className={style.header}
            style={{
                transform: `translateY(${isHeaderVisible ? '0' : '-100%'})`,
            }}
        >
            {width < 768 ? (
                <NavigationMenuMobile toggler={changeMenuVisibility} isVisible={isMobileMenuVisible} />
            ) : null}
            <Container>
                <section className={style.headerTop}>
                    <MobileBurgerMenu toggler={changeMenuVisibility} />
                    <a href="/" className={style.logoContainer}>
                        <img src={logo} alt="logo" className={style.logo} />
                    </a>
                    <SearchBox />
                </section>
            </Container>
            <Divider />
            {width > 768 ? (
                <Container>
                    <NavigationMenu />
                </Container>
            ) : null}
            <Divider />
        </header>
    );
};
