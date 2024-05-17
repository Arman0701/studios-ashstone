import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { EMPTY_POST_MESSAGE } from "./consts";

const SearchContext = createContext(undefined);
const SearchProvider = ({ children }) => {
    const [actualData, setActualData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const initDataToBeSearched = useCallback((inclomingData) => {
        setActualData(inclomingData);
    }, [actualData]);

    const updateSearchQuery = useCallback((query) => {
        setSearchQuery(query);
    }, []);

    const filtered = useMemo(() => {
        const resultingData = actualData.filter((post) => {
            const q = searchQuery.toLowerCase();
            if (!q) {
                return true;
            }
            const title = post?.title?.toLowerCase()?.includes(q);
            const author = post?.autor?.toLowerCase()?.includes(q);
            const tags = post?.tags?.toLowerCase()?.includes(q);

            return (
                title || author || tags
            )
        });
        return resultingData;
    }, [searchQuery]);

    const displayingData = useMemo(() => {
        if (filtered.length) {
            return filtered;
        } else if (searchQuery) {
            return EMPTY_POST_MESSAGE;
        }
        return actualData
    }, [actualData, filtered, searchQuery]);

    const contextValue = {
        initDataToBeSearched,
        updateSearchQuery,
        searchQuery,
        searched: displayingData,
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    )
}

const useSearchContext = () => useContext(SearchContext);

export {
    SearchProvider,
    useSearchContext,
}