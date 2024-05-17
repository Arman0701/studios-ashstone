import style from './Posts.module.scss';
import { useEffect } from 'react';
import { POSTS_URL } from './consts';
import { Container } from '../Container/Container';
import { PostCard } from './PostCard/PostCard';
import { generateUUID } from '../../utils/generateUUID';
import { useSearchContext } from '../../contexts/SearchContext';

export const Posts = () => {
    const { searched, initDataToBeSearched } = useSearchContext();
    useEffect(() => {
        (async () => {
            const response = await fetch(POSTS_URL);
            const data = await response.json();
            initDataToBeSearched(data);
        })();
    }, [initDataToBeSearched]);

    return (
        <Container>
            <section className={style.postsContainer}>
                {typeof searched === 'string' ? (
                    <p className={style.notFoundMessageBox}>{searched}</p>
                ) : (
                    <>
                        {searched.map(p => {
                            return <PostCard key={generateUUID()} post={p} />;
                        })}
                    </>
                )}
            </section>
        </Container>
    );
};
