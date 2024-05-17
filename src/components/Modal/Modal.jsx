import style from './Modal.module.scss';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import crossIcon from '../../assets/images/cross-icon.png';

export const Modal = ({ isOpen, toggle, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
        }
        return () => {
            document.body.style.overflowY = 'visible';
        };
    }, [isOpen]);

    return createPortal(
        isOpen ? (
            <div className={style.modalOverlay} onClick={toggle}>
                <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                    <header>
                        <button className={style.closeBtn} onClick={toggle}>
                            <img src={crossIcon} alt={style.closeBtn} />
                        </button>
                    </header>
                    {children}
                </div>
            </div>
        ) : null,
        document.getElementById('modal-root'),
    );
};
