import { connect } from 'react-redux';
import Trip from '../components/trip';
import { onLoad, transactionService } from '../../../redux/actions/trip.creation.action';

const mapStateToProps = state => {
    return {
        groupOptions: state.TripCreation.groups,
        transactions: Array.isArray(state.TripCreation.transactions) ? state.TripCreation.transactions : []
    }
}

export default connect(mapStateToProps,
    {
        onLoad: () => onLoad(),
        transactionService: (group) => transactionService(group)
    }
)(Trip);