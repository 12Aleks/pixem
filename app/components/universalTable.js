import {useState} from 'react';
import {Table} from "react-bootstrap";
import styles from '../styles/UniversalTable.module.scss'

const UniversalTable = ({unitData, tableContent, updatePx}) => {
    const [active, setActive] = useState(0);

   function updateData(data, index){
        updatePx(data);
        setActive(index)
    }

    return (
        <Table striped bordered hover className={styles.table} >
            <thead>
            <tr>
                <th>Px</th>
                <th>{unitData && unitData.name}</th>
            </tr>
            </thead>
            <tbody>
            {
                tableContent.map((el, index) => {
                    return(
                        <tr key={el.px} onClick={() => updateData(el.px, index)} className={active === index ? styles.active: undefined}>
                            <td>{el.px}px</td>
                            <td>{el.unit}{unitData && unitData.code}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
    );
};

export default UniversalTable;