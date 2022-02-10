import React from 'react';
import {Table} from "react-bootstrap";

const UniversalTable = ({ unitName, data}) => {

    let unit = unitName !== '%'? unitName : 'percent';

    return (
        <Table striped bordered hover >
            <thead>
            <tr>
                <th>Px</th>
                <th>{unit}</th>
            </tr>
            </thead>
            <tbody>
            {
                data.map(el => {
                    return(
                        <tr key={el.px}>
                            <td>{el.px}px</td>
                            <td>{el.unit}{unitName}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
    );
};

export default UniversalTable;