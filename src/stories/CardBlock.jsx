import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Card from "../components/Card";

export const CardBlock = (props) => {

    const [columns, setColumns] = useState(props.columns);

    useEffect(() => {
        if (props.columns === 2) {
            setColumns(twoColumn)
        } else if (props.columns === 3) {
            setColumns(threeColumn)
        } else {
            setColumns(fourColumn)
        }
    }, [props.columns])

    const twoColumn = 'cards__item col-6';
    const threeColumn = 'cards__item col-xxl-4 col-xl-4 col-md-4 col-6'
    const fourColumn = 'cards__item col-xxl-3 col-xl-3 col-md-4 col-6'

    const data = [
        {
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '106',
        },
        {
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '106',
        },
        {
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '106',
        },
        {
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            price: '106',
        },
    ]

    return (
        <div  className={`cards container row mx-auto g-3 g-sm-3 g-md-3 g-lg-4 ${props.bgColor ? 'bg-white' : 'bg-transparent'}`}>
            {/*Sliced data*/}
            {data.slice(0, props.columns).map((card, index) => (
                <div key={index} className={columns}>
                    <Card title={card.title} description={card.description} price={card.price} />
                </div>
            ))}
        </div>
    )
};

CardBlock.propTypes = {
    columns: PropTypes.number,
    label: PropTypes.string.isRequired,
    bgColor: PropTypes.bool,
};

CardBlock.defaultProps = {
    columns: 4,
    bgColor: true,
};
