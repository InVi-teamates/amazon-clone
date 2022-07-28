import React, { useState } from 'react';
import './CardContainer.style.scss';
import Card from './Card'

export default function CardContainer() {
    // state
    const [cards, setCards] = useState([1, 2, 3])
    return (
        <div className="container card-container">
            {
                cards.map(card => <Card {...card} />)
            }
        </div>
    )
}
