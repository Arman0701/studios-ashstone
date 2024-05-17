import { Header } from './components/Header/Header';
import { Posts } from './components/Posts/Posts';
import { SearchProvider } from './contexts/SearchContext';
import { ResizeProvider } from './contexts/ResizeContext';

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
