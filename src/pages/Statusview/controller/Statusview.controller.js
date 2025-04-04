import { connect } from 'react-redux';
import Statusview from '../components';

const mapStateToProps = state => {
    return {
        selectedoptn:state.statusViewProduct.selectedoptn,
        boxdata:state.statusViewProduct.boxdata
    }
}

// const mapDispatchToProps = {
//     submitRegistration: () => submitRegistration(),
//     getRegistration: () => getRegistration()
// }

export default connect(mapStateToProps, null)(Statusview);