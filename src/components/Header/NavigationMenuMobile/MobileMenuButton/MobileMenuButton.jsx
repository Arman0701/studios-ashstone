import style from "./MobileMenuButton.module.scss";
import chevronIcon from "../../../../assets/images/chevron-icon.png";

export const MobileMenuButton = ({ button, options }) => {
    const { currentExpanded, changeExpandedHandler } = options;

    return (
        <>
            <button onClick={changeExpandedHandler(button.id)}>
                <span>{button.title}</span>
                {button.nested ? (
                    <img
                        src={chevronIcon}
                        alt="chevron"
                    />
                ) : null}
            </button>
            {button.nested && button.isExpanded ? (
                <section className={style.subMenu}>
                    {button.nested.map(b => {
                        return (
                            <a href="#" className={style.nestedButton}>
                                <span>{b.title}</span>
                            </a>
                        )
                    })}
                </section>
            ) : null}
        </>
    )
}