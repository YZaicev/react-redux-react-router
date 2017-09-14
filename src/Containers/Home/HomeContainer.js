import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import HomeComponent from './HomeComponent';

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));
