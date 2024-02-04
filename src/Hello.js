import React, { Component } from 'react';
import './Hello.css';

// class Hello extends Component {
//     render() {
//         return (
//             <div>
//                 <h1 className='f1 tc'>Hello, Welcome!</h1>
//                 <p>You are learning react Mr.{this.props.name}</p>
//             </div>
//         );
//     };
// }

const Hello = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Hello, Welcome!</h1>
            <p>You are learning react Mr.{props.name}</p>
        </div>
    );
}

export default Hello;