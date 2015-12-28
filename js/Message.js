/**
 * Created by wickedbeauty on 12/12/15.
 */
import React, {Component} from 'react';

export default class Message extends Component {

    constructor(props){
        super(props);
        this.formatMessage = this.formatMessage.bind(this);
    }

    render(){
        let {
            name,
            message,
            time
            } = this.props;
        return (
            <li className="item">
                <span className="name">{name}: </span>
                <span className="message" dangerouslySetInnerHTML={{__html: this.formatMessage(message)}}></span>
                <span className="time">{time}</span>
            </li>
        );
    }

    formatMessage(text){
        const URL_PATTERN = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/gi;
        return  text.replace(URL_PATTERN, function(match){
            return '<a href="'+match+'" target="_blank">'+match+'</a>';
        });
    }
}