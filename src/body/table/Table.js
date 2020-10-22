import React, { Component } from 'react';
import Current from "./current/Current";
import Archive from "./archive/Archive";

class Table extends Component {
    render() {
        return (
            <div>
                <div className="col">
                    <div className="list-group list-group-horizontal" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home"><b>Current</b></a>
                        <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile"><b>Archive</b></a>
                    </div>
                </div>
                <div className="col">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            {/* ---current tab------ */}
                            <div className="bg-white">
                                <div className="p-4 row">
                                    <div className="mx-3 ml-auto">
                                        <button type="button" class="btn btn-success">Add New Corporate</button>
                                    </div>
                                    <div className="mx-3">
                                        <form className="form-inline my-2 my-lg-0">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search By Company Name/ID" aria-label="Search" />
                                        </form>
                                    </div>
                                </div>
                                {/* -----------table----------- */}
                                <Current />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                            {/* ------------ archive tab------------- */}
                            <div className="bg-white">
                                <div className="ml-custom">
                                    <div className="p-4 row">

                                        <div className="mx-3 ml-auto">
                                            <form className="form-inline my-2 my-lg-0">
                                                <input className="form-control mr-sm-2" type="search" placeholder="Search By Company Name/ID" aria-label="Search" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* --------------------------------------table---------------------------------------------- */}
                                <Archive />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;