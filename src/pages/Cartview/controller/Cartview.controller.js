import { connect } from 'react-redux';
import Cartview from '../components';

const mapStateToProps = state => {
    debugger
    return {
        allProducts: state.Cartview,
        allLabels: state.Cartview,
        selTransId: state.productsView.transId
    }
}

// const mapDispatchToProps = {
//     submitRegistration: () => submitRegistration(),
//     getRegistration: () => getRegistration()
// }

export default connect(mapStateToProps, null)(Cartview);