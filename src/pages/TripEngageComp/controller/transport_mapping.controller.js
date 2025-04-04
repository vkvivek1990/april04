import { connect } from 'react-redux';
import TransportMapping from '../components/transport_mapping';
import { onLoad, tpaService } from '../../../redux/actions/transport_mapping.action';

const mapStateToProps = state => {
    return {
        transport: Array.isArray(state.TransportMapping.transport) ? state.TransportMapping.transport : [],
        transportRoles: state.TransportMapping.transportRoles,
    }
}

export default connect(mapStateToProps,
    {
        onLoad: (group_id, transaction_id) => onLoad(group_id, transaction_id),
        tpaService: () => tpaService()
    }
)(TransportMapping);