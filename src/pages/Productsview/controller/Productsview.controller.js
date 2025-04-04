import { connect } from 'react-redux';
import Productsview from '../components';

const mapStateToProps = state => {
    return {
        allProducts:state.productsView.data.ProductList,
        allLabels:state.productsView.data.labelFlagList
    }
}

// const mapDispatchToProps = {
//     submitRegistration: () => submitRegistration(),
//     getRegistration: () => getRegistration()
// }

export default connect(mapStateToProps, null)(Productsview);