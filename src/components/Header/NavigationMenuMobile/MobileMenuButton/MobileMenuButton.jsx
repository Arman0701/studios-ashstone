import chevronIcon from '../../../../assets/images/chevron-icon.png';

export const MobileMenuButton = ({ button, options }) => {
    const { changeExpandedHandler } = options;

    return (
        <>
            <button onClick={changeExpandedHandler(button.id)}>
                <span>{button.title}</span>
                {button.nested ? <img src={chevronIcon} alt="chevron" /> : null}
            </button>
            {button.nested && button.isExpanded ? (
                <section>
                    {button.nested.map((b) => {
                        return (
                            <a key={b.id} href="#">
                                <span>{b.title}</span>
                            </a>
                        );
                    })}
                </section>
            ) : null}
        </>
    );
};
