import { React, useEffect } from 'react';
import './style.scss';
import queryString from 'query-string';



const TransportMapping = props => {

    const { location, onLoad, tpaService, transport, transportRoles } = props;


    useEffect(() => {
        const { transaction_id, group_id } = queryString.parse(location.search);
        const fetchData = async () => {
            await onLoad(group_id, transaction_id);
            await tpaService();
        }
        fetchData();
    }, [location, onLoad, tpaService]);

    return (
        <>

            <table>
                <tr>
                    <th>transaction_id</th>
                    <th>driver_id</th>
                    <th>vehicle_id</th>
                    <th>delivery_boy_id</th>
                    <th>order_pickup_time</th>
                    <th>order_delivery_time</th>
                </tr>
                {
                    transport.map(data => {
                        return (<tr>
                            <td>{data.transaction_id}</td>
                            <td>{data.driver_id}</td>
                            <td>{data.vehicle_id}</td>
                            <td>{data.delivery_boy_id}</td>
                            <td>{data.order_pickup_time}</td>
                            <td>{data.order_delivery_time}</td>
                        </tr>)
                    })
                }
            </table>
        </>
    )
}

export default TransportMapping;