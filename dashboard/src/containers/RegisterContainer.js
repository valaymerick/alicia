import { connect } from 'react-redux'
import Register from '../components/Register/Register'
import { register } from '../actions'

const mapStateToProps = state => ({
    isFetching: state.register.isFetching,
    error: state.register.error,
    registered: state.register.registered
})

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (username, password, secret) => {
            dispatch(register(username, password, secret))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)