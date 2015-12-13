/**
 * Created by wickedbeauty on 12/12/15.
 */
import React, {Component} from 'react';

export default class Message extends Component {

    render(){
        let {
            name,
            message,
            time
            } = this.props;
        return (
            <li className="item">
                <span className="name">{name}: </span>
                <span className="message">{message}</span>
                <span className="time">{time}</span>
            </li>
        );
    }
}