import { React, useEffect } from 'react';
import './style.scss';
import queryString from 'query-string';



const TripProductMapping = props => {

    const { location, onLoad, trip_product_mapping } = props;

    console.log("trip_product_mapping--<", trip_product_mapping);
    useEffect(() => {
        const { transaction_id, group_id } = queryString.parse(location.search);
        const fetchData = async () => {
            await onLoad(transaction_id);
        }
        fetchData();
    }, [location, onLoad]);

    return (
        <>

            <table>
                <tr>
                    <th>transaction_id</th>
                    <th>product_id</th>
                    <th>quantity</th>
                    <th>transport_mapping_id</th>
                </tr>
                {
                    trip_product_mapping.map(data => {
                        return (<tr>
                            <td>{data.transaction_id}</td>
                            <td>{data.product_id}</td>
                            <td>{data.quantity}</td>
                            <td>{data.transport_mapping_id}</td>
                        </tr>)
                    })
                }
            </table>
        </>
    )
}

export default TripProductMapping;