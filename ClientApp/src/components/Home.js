import React, {Component} from 'react';
import LibraryImage from '../Images/library.jpg'

export class Home extends Component
{
    static displayName = Home.name;

    styles = {
    header: {
        marginTop: '5vh',
        marginBottom:'5vh',
        backgroundImage: "url(" + LibraryImage + ")",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },

    content: {
        padding:'36vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white'
    }
}

    render()
    {
        return (
            <div className="row rounded align-items-center" style={this.styles.header}>
                <div className="col text-center align-items-center" style={this.styles.content}>
                    <h1 className="text-white ">Welcome to our <strong>LibraryApp</strong></h1>
                </div>
            </div>
        );
    }
}
