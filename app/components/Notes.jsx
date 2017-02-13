import React from 'react';
import { connect } from 'react-redux';

export class Notes extends React.Component {
  render () {
    var { notes } = this.props;
    var renderNotes = () => {
      if (notes.length === 0) {
        return (
          <p className="container__message">Loading Notes...</p>
        );
      }else {
        return (
          <div dangerouslySetInnerHTML={{ __html: notes[0].detail }}></div>
        );
      }
    };

    return (
      <div>
        {renderNotes()}
      </div>
    );
  }
};

export default connect(
  (state) => {
    return state;
  }
)(Notes);
