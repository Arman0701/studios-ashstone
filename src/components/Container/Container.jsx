import style from './Container.module.scss';

export const Container = ({ children }) => {
    return <section className={style.container}>{children}</section>;
};
