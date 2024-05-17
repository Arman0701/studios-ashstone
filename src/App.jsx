import style from './App.module.scss';
import { Header } from './components/Header/Header';
import { Posts } from './components/Posts/Posts';
import { SearchProvider } from './contexts/SearchContext';
import { ResizeProvider } from './contexts/ResizeContext';
import { NavigationMenuMobile } from './components/Header/NavigationMenuMobile/NavigationMenuMobile';
import { useState } from 'react';

export const App = () => {


    return (
        <ResizeProvider>
            <SearchProvider>
                <Header />
                <Posts />
            </SearchProvider>
        </ResizeProvider>
    );
};
