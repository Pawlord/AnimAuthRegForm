import React from 'react';

//Стили
import './sections.scss';

//Контекст
import { BodyActiveContext } from '../../../context/bodyActiveContext';

export function SignInSection() {
    const { onClickToggleBodyActive } = React.useContext(BodyActiveContext)

    return (
        <section className="block__item block-item">
            <h2 className="block-item__title">Уже есть аккаунт?</h2>
            <button className="block-item__btn signin-btn" onClick={onClickToggleBodyActive}>Войти</button>
        </section>
    )
}