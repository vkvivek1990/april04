import { connect } from 'react-redux';
import Viewproduct from '../components';

const mapStateToProps = state => {
    console.log(state);
    debugger
    return {
        transactn_ID: state.productsView.transId,
        selectedData: state.viewProduct.srchaccrdn
    }
}

// const mapDispatchToProps = {
//     submitRegistration: () => submitRegistration(),
//     getRegistration: () => getRegistration()
// }

export default connect(mapStateToProps, null)(Viewproduct);