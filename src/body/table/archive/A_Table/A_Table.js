import React, { Component } from 'react';

class A_Table extends Component {
    render() {
        return (
            <div>
                <table className="table border-spacing-custom">
                    <thead className="table-bg-custom text-white">
                        <tr>
                            <th className="border-right-custom" scope="col">Company Name</th>
                            <th className="border-right-custom" scope="col">Company ID</th>
                            <th className="border-right-custom" scope="col">Web Domain</th>
                            <th className="border-right-custom" scope="col">No. of ENgagements</th>
                            <th className="border-right-custom" scope="col">Registered Date</th>
                            <th className="border-right-custom" scope="col">Client SPOC Name</th>
                            <th className="border-right-custom" scope="col">Status</th>
                            <th className="border-right-custom" scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="font-weight-bold">
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td>Infosys</td>
                            <td>54201</td>
                            <td>infosys.co<br />infosys.in</td>
                            <td>
                                <div>
                                    05
                            </div>

                                <div className="pt-3">
                                    <p>
                                        <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            <i class="fas fa-chevron-circle-down text-dark"></i>
                                        </a>
                                    </p>

                                </div>
                            </td>
                            <td>01.05.2020</td>
                            <td>Rahul Kejrai</td>
                            <td>
                                Active
                            <p className="text-secondary">04.07.2020</p>
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
        );
    }
}

export default A_Table;