import Header from '@/components/layout/Header';
import React from 'react';

class OrderCoffee extends React.Component {
    // 생성자 함수
    constructor(props) {
        super(props); // 부모생성자 함수 호출(리액트 기본 기능)
        this.state = {
            name: props.name,
            price: props.price,
        };
    }

    // method
    order() {
        return `${this.state.name}는 ${this.state.price}원입니다`;
    }

    render() {
        return (
            <div>
                <p>{this.order()}</p>
            </div>
        );
    }
}

export default OrderCoffee;
