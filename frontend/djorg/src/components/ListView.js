// COMPONENTS
import React, { Component } from 'react';

// ROUTER COMPONENTS
import {Link} from 'react-router-dom';

// STYLING COMPONENTS
import '../Styles.css';

class ListView extends Component {
  constructor (props){
    super(props)
    this.state={
      notes: props.notes,
    };
  };

  render() {
    if(this.state.notes) {
      return (
        <div className="APP__LISTVIEW">
          <h2 className="APP__LISTHEADER">Your Notes:</h2>
          <div className="APP__NOTELIST">
          {this.props.notes.map((note, index) => {
            return(
              <div key={`note${index}`}>
                <Link to={`/note/${index}`} style={{ textDecoration: 'none' }}>
                  <ANote note={note} />
                </Link>
              </div>
            );
          })}
          </div>
        </div>
      );
    } else { return null; }
  };
};

function ANote(props) {
  const { title, text } = props.note;
  return (
    <div className="APP__NOTECARD">
      <h5 className="APP__LIST-TITLE">{title}</h5>
      <p className="APP__LIST-TEXT">{text}</p>
    </div>
  )
};

export default ListView;