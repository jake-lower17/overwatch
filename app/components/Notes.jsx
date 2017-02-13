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
        // return (
        //   <div dangerouslySetInnerHTML={{ __html: notes[0].detail }}></div>
        // );
        return notes.map((note) => {
          return (
            <div key={note.id} className="data-cell">
              <div dangerouslySetInnerHTML={{ __html: note.detail }}></div>
            </div>
          );
        });
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
