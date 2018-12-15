import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchNotebook, fetchNotebooks } from '../../actions/notebook_actions';
import Sidebar from './sidebar';

const mapStateToProps = state => {
    return ({
        notebooks: Object.values(state.entities.notebooks),
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        fetchNotebook: id => dispatch(fetchNotebook(id)),
        logout: () => dispatch(logout())
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));