import React, { Component } from 'react';
import Table from './table/Table';

class Body extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 className="p-4 text-center text-success">Corporate Profiles</h3>
                    <div className="p-3 rounded text-center">
                        <Table />
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;