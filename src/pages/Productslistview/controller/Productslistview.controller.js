import { connect } from 'react-redux';
import Productslistview from '../components';

const mapStateToProps = state => {
    debugger
    return {
        allProducts:state.productsView.data.ProductList,
        allLabels:state.productsView.data.labelFlagList,
        getRefPage: state.productsView.page,
    }
}

// const mapDispatchToProps = {
//     submitRegistration: () => submitRegistration(),
//     getRegistration: () => getRegistration()
// }

export default connect(mapStateToProps, null)(Productslistview);