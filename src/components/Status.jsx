import React from 'react'
import Loader from './Loader'
import '../css/status.css'

const Status = (props) => (
    <div className="go-left-2">
        {!props.status.brand ? (<Loader />)
            : (
                <table>
                    <thead>
                        <tr>
                            <th className="title-left">Vehicle Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Brand:
            </td>
                            <td>
                                {props.status.brand}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Model:
            </td>
                            <td>
                                {props.status.model}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Year:
            </td>
                            <td>
                                {props.status.year}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Vin:
            </td>
                            <td>
                                {props.status.vin}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Type:
            </td>
                            <td>
                                {props.status.type}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Engine:
            </td>
                            <td>
                                {props.status.engine.replace(/"/g, "").replace(/\[/g, "").replace(/]/g, "").replace(/,/g, ", ").replace(/:/g, ": ")}
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Extras:
            </td>
                            <td>
                                {props.status.extras.replace(/"/g, "").replace(/\[/g, "").replace(/]/g, "").replace(/,/g, ", ").replace(/:/g, ": ")}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
    </div>
)

export default Status;
// year type engine extras