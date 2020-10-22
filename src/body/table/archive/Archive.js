import React, { Component } from 'react';
import A_Table from './A_Table/A_Table';
import A_TableDropdown from './A_Table/A_TableDropdown';

class Archive extends Component {
    render() {
        return (
            <div>
                <div className="rounded border">
                    <A_Table />
                    <A_TableDropdown />
                </div>
            </div>
        );
    }
}

export default Archive;