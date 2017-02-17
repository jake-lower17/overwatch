var React = require('react');
import { connect } from 'react-redux';

export class AddPlayer extends React.Component {

  onFormSubmit (e) {
    e.preventDefault();

    var newPlayer = this.refs.newPlayer.value;
    var { dispatch } = this.props;
    if (newPlayer.length > 0) {
      this.refs.newPlayer.value = '';
      //dispatch(actions.startAddTodo(todoText));
      console.log('success');
    }else {
      this.refs.newPlayer.focus();
    }
  }

  render () {
    return (
      <div className="data-cell">
        <form onSubmit={this.onFormSubmit.bind(this)}>
            <input type="text" ref="newPlayer" placeholder="Add PSN to Track."/>
            <button  className="hollow button success expanded">Add</button>
        </form>
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(AddPlayer);
