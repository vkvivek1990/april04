import { connect } from 'react-redux';
import TripProductMapping from '../components/trip_product_mapping';
import { onLoad } from '../../../redux/actions/trip.product.mapping.action';

const mapStateToProps = state => {
    console.log("state.TripProductMapping.trip_product_mapping--->", state.TripProductMapping.trip_product_mapping);
    return {
        trip_product_mapping: Array.isArray(state.TripProductMapping.trip_product_mapping) ? state.TripProductMapping.trip_product_mapping : []
    }
}

export default connect(mapStateToProps,
    {
        onLoad: (transaction_id) => onLoad(transaction_id),
    }
)(TripProductMapping);