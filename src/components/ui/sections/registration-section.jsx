import React from 'react';

//Стили
import './sections.scss'

//Контекст
import { BodyActiveContext } from '../../context/bodyActiveContext';

export function RegistrationSection({ onClick }) {
    const { onClickToggleBodyActive } = React.useContext(BodyActiveContext)

    return (
        <section className="block__item block-item">
            <h2 className="block-item__title">Еще нет аккаунта?</h2>
            <button className="block-item__btn register-btn" onClick={onClickToggleBodyActive}>Зарегистрироваться</button>
        </section>
    )
}