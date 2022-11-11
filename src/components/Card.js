import React from "react";
import field from '../field.jpg';

const Card = (props) => {
    return (
        <div className={props.isOnlyCard ? 'col-6' : null}>
            <img className="card__image" src={field} />
            <div className={`card__content ${props.background ? 'bg-white p-3' : 'bg-transparent py-3 px-0'}`}>
                <h4 className="card__title">{props.title ? props.title : 'Lorem impsum dolor'}</h4>
                <p className="card__description">{props.description ? props.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p>
                <div className="card__price d-flex flex-column position-relative">
                    <small>Room starting at</small>
                    <span>{props.price ? props.price : '100'} €</span>
                </div>
                <a className="card__button">
                    Find out more
                </a>
            </div>
        </div>
    )
}

export default Card;