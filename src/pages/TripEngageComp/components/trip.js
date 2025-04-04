import { React, useEffect, useState } from 'react';
import './style.scss';
import Selectcomp from "../../../components/Selectcomp";


const Trip = props => {

    const { onLoad, groupOptions, transactionService, transactions } = props;

    const [options, setOption] = useState({ group_id: "", group_name: "" });
    const [groupId, setGroupId] = useState('');

    useEffect(() => {
        onLoad();
    }, []);

    useEffect(() => {
        setOption(groupOptions);
    }, [groupOptions]);

    const handleChange = (data) => {
        setGroupId(data.value);
        transactionService(data);
    }



    return (
        <>
            <div className="Status_view_container">
                <Selectcomp
                    options={options}
                    onChange={handleChange}
                    isSearchable={true}
                    maxlength={5}
                />
                <table>
                    <tr>
                        <th>Transaction-ID</th>
                        <th>Transport Quotation</th>
                        <th>Transport Mapping</th>
                        <th>Trip cretaion</th>
                    </tr>
                    {
                        transactions.map(data => (
                            <tr>
                                <td>{data.transaction_id}</td>
                                <td><button onClick={() => {
                                    window.open("http://localhost:3001/transportMapping");
                                }}>Transport Quotation</button></td>
                                <td><button onClick={() => {
                                    window.open(`http://localhost:3001/transportMapping?transaction_id=${data.transaction_id}&group_id=${groupId}`);
                                }}>Transport Mapping</button></td>
                                <td><button onClick={() => {
                                    window.open(`http://localhost:3001/trip?transaction_id=${data.transaction_id}&group_id=${groupId}`);
                                }}>Trip creation</button></td>
                            </tr>))
                    }
                </table>
            </div>
        </>
    )
}

export default Trip;