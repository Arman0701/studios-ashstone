import style from './PostCard.module.scss';
import { DotDividerSmall } from '../../DotDividerSmall/DotDividerSmall';
import { useState } from 'react';
import { Modal } from '../../Modal/Modal';

export const PostCard = ({ post }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const changeModalVisibilityHandler = () => {
        setIsModalOpen(!isModalOpen)
    }
    const ActualCard = () => {
        return (
            <>
                <img
                    src={post.img}
                    srcSet={`${post.img_2x} 768w`}
                    sizes='(max-width: 768px) 768px'
                    alt={post.title}
                    title={post.title}
                />
                <div className={style.cardContent}>
                    <span className={style.tag}>{post.tags}</span>
                    <p className={style.title}>{post.title}</p>
                    <section className={style.metaData}>
                        <span className={style.author}>{post.autor}</span>
                        <DotDividerSmall />
                        <span className={style.date}>{post.date}</span>
                        <DotDividerSmall />
                        <span className={style.views}>{post.views} Views</span>
                    </section>
                    <p className={style.description}>{post.text}</p>
                </div>
            </>
        )
    }

    return (
        <>
            <section className={style.cardContainer} onClick={changeModalVisibilityHandler}>
                <ActualCard onClose={changeModalVisibilityHandler} />
            </section>
            <Modal isOpen={isModalOpen} toggle={changeModalVisibilityHandler}>
                <section className={style.cardContainerInModal}>
                    <ActualCard onClose={null} />
                </section>
            </Modal>
        </>
    );
};
