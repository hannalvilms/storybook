import React from 'react';
import PropTypes from 'prop-types';
import '../styles/style.scss';
import field from "../field.jpg";

/**
 * Primary UI component for user interaction
 */
const data = [ {
    img: field,
    alt: '',
    rows: 1,
    largeCols: 3,
    mediumCols: 4,
    smallCols: 6,
    smallGrid: 'd-md-flex d-sm-flex'
},
    {
        img: field,
        alt: '',
        rows: 1,
        largeCols: 3,
        mediumCols: 4,
        smallCols: 6,
        smallGrid: 'd-md-flex d-sm-flex'
    },
    {
        img: field,
        alt: '',
        rows: 1,
        largeCols: 3,
        mediumCols: 4,
        smallCols: 12,
        smallGrid: 'd-md-flex d-sm-flex'
    },
    {
        img: field,
        alt: '',
        rows: 1,
        largeCols: 3,
        mediumCols: 6,
        smallCols: 6,
    },
    {
        img: field,
        alt: '',
        rows: 2,
        largeCols: 4,
        mediumCols: 6,
        smallCols: 6,
    },
    {
        img: field,
        alt: '',
        rows: 2,
        largeCols: 4,
        mediumCols: 12,
        smallCols: 12,
    },
    {
        img: field,
        alt: '',
        largeCols: 4,
        mediumCols: 4,
        smallCols: 6,
        rows: 2,
        display: 'md'
    },
    {
        img: field,
        alt: '',
        rows: 2,
        largeCols: 6,
        mediumCols: 4,
        smallCols: 6,
        display: 'md'
    },
    {
        img: field,
        alt: '',
        rows: 2,
        largeCols: 6,
        mediumCols: 4,
        display: 'md'
    },
    {
        img: field,
        alt: '',
        rows: 2,
        largeCols: 12,
        mediumCols: 12,
        display: 'md'
    }
]

export const Grid = (props) => {
    return (
        <div className="container row mx-auto g-3 g-sm-3 g-md-3 g-lg-4">
            {data.map((item, index) => (
                <div key={index} className={`col-xl-${item.largeCols} col-md-${item.mediumCols} col-sm-${item.smallCols} col-${item.smallCols} d-xl-flex ${item.display ? `d-${item.display}-none` : ''} ${item.smallGrid ? item.smallGrid : 'd-md-flex d-sm-none d-none'}`} >
                    <img alt={item.alt} src={item.img}/>
                </div>
            ))}
        </div>
    );
};

Grid.propTypes = {
    data: PropTypes.array,
};

Grid.defaultProps = {
    data: data,
};

