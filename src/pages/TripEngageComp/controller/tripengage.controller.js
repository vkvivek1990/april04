import { connect } from 'react-redux';
import Tripengage from '../components';
import {getCatagoryFields,setTripEngage} from '../../../redux/actions/trip.engage.action';

const mapStateToProps = state => {
    return {
        selectedoptn:state.TripEngage.data.selectedoptn,
        boxdata:state.TripEngage.data.boxdata
    }
}

export default connect(mapStateToProps,{getCatagoryFields:(formName) => getCatagoryFields(formName),setTripEngage:(formdata)=>setTripEngage(formdata)})(Tripengage);