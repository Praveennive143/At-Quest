import React, { Component } from 'react';
import C_Table from "./C_Table/C_Table";

class Current extends Component {
    render() {
        return (
            <div>
                <div className="rounded border">
                    <C_Table />
                </div>
            </div>
        );
    }
}

export default Current;