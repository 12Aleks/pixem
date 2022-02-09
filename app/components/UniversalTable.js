import React from 'react';
import {Table} from "react-bootstrap";

const UniversalTable = ({ unitName, data}) => {
    return (
        <Table striped bordered hover >
            <thead>
            <tr>
                <th>Px</th>
                <th>{unitName}</th>
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