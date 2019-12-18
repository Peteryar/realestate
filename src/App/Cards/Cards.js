import React from 'react';
import './styles.css';
class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [{
                image: require('../../assets/home.jpg'),
                address: '2922 Bernes Ave',
                addressInfo: 'WiliamsBridge Bronx',
                price: '$168,000'
            },
                {
                    image: require('../../assets/kitchen.jpg'),
                    address: '636 E 92nd St',
                    addressInfo: 'Carnarise Broklyn',
                    price: '$400,500',
                },
                {
                    image: require('../../assets/house.jpg'),
                    address: '430 Avenue M',
                    addressInfo: 'Fatlands Broklyn',
                    price: '$315,500',
                },
                {
                    image: require('../../assets/sittingroom.jpg'),
                    address: '565 Broome St',
                    addressInfo: 'Soho New York',
                    price: '$,500',
                }
            ]
        }
    }
    render() {
        console.log(this.state.cards.image)
        let card = this.state.cards.map((card, key) => <Card key={key} image={card.image} price={card.price}
            address={card.address} addressInfo={card.addressInfo} />)
        return (
            <div className="cards-con">
                {card}
                <LoadingCard />
                <LoadingCard />
            </div>
        )
    }
}
const Card = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div style={{ backgroundImage: `url(${props.image})` }} id="img-back">
            </div>
            <section>
                <p className="address">{props.address}</p>
                <p className="address-info">{props.addressInfo}</p>
                <p className="amount-text">{props.price}</p>
                <span style={{ display: 'flex', marginTop: '10px' }}>
                    <p style={{ marginRight: '10px' }}><i style={{ color: 'gray', marginRight: '10px' }} className="info-icons" class="fas fa-th-large"> </i> 4</p>
                    <p style={{ marginRight: '10px' }}><i style={{ color: 'gray', marginRight: '10px' }} className="info-icons" class="fas fa-door-closed"></i> 5</p>
                    <p style={{ marginRight: '10px' }}><i style={{ color: 'gray', }} class="fas fa-cart-arrow-down"></i> 1520ft</p>
                </span>

            </section>
        </div>

    )
}

const LoadingCard = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <section id="image-con"></section>
            <section id="info-con"></section>
            <section id="more-info-con"></section>
        </div>
    )
}

export default Cards;