import React, { Component } from 'react';

class A_TableDropdown extends Component {
    render() {
        return (
            <div>
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <table className="table border-spacing-custom">
                            <thead className="table-bg-custom text-white">
                                <tr>
                                    <th className="border-right-custom" scope="col">Engagement Name</th>
                                    <th className="border-right-custom" scope="col">Engagement ID</th>
                                    <th className="border-right-custom" scope="col">Service Offering</th>
                                    <th className="border-right-custom" scope="col">PLanned Start Date</th>
                                    <th className="border-right-custom" scope="col">PLanned End Date</th>
                                    <th className="border-right-custom" scope="col">Status</th>
                                    <th className="border-right-custom" scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="font-weight-bold">
                                <tr>
                                    <td>License agreement confirmation structure documentation</td>
                                    <td>Infos010</td>
                                    <td>CCMM Level1</td>
                                    <td>02.08.2020</td>
                                    <td>02.08.2020</td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar  bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                        </div>

                                    </td>
                                    <td>
                                        <div className="row text-center">
                                            <div className="col-4"><i class="fas fa-eye"></i></div>
                                            <div className="col-4"><i class="fas fa-pen"></i></div>
                                            <div className="col-4"><i class="fas fa-archive"></i></div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>License agreement confirmation structure documentation</td>
                                    <td>Infos010</td>
                                    <td>CCMM Level1</td>
                                    <td>02.08.2020</td>
                                    <td>02.08.2020</td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar  bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                        </div>

                                    </td>
                                    <td>
                                        <div className="row text-center">
                                            <div className="col-4"><i class="fas fa-eye"></i></div>
                                            <div className="col-4"><i class="fas fa-pen"></i></div>
                                            <div className="col-4"><i class="fas fa-archive"></i></div>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>License agreement confirmation structure documentation</td>
                                    <td>Infos010</td>
                                    <td>CCMM Level1</td>
                                    <td>02.08.2020</td>
                                    <td>02.08.2020</td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-bar  bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                        </div>

                                    </td>
                                    <td>
                                        <div className="row text-center">
                                            <div className="col-4"><i class="fas fa-eye"></i></div>
                                            <div className="col-4"><i class="fas fa-pen"></i></div>
                                            <div className="col-4"><i class="fas fa-archive"></i></div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default A_TableDropdown;