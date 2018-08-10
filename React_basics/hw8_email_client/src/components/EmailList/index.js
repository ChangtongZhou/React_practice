import React from 'react';
import './style.css';

const EmailList = props => {
  const {currentFilter} = props;
  const emailsToShow = props.allMails.filter(mail => {
    if (currentFilter === 'inbox' || currentFilter === 'all') {
      return mail.tag === "inbox";
    } else if (currentFilter === 'trash'){
      return mail.tag === "deleted";
    } else {
      return false;
    }
  });

  if (!emailsToShow || emailsToShow.length < 1) {
    return (
      <div className="emptyContainer">
        <p>Current tag is empty! </p>
      </div>
    );
  } else {
    return (
      <div className="emailList">
        <ul className="list-group">
          {emailsToShow.map((mail, index) => {
            return (
              <li className="list-group-item" role="button" id="listItem" key={index} onClick={() => {
                props.toggleMail(mail);
              }}>
                <div className="subject">
                  <p>{mail.subject}</p>
                  {mail.read === "false" ? <p id="dot">&bull;</p> : null}
                </div>
                <div className="sendingInfo">
                  <p>{mail.from}</p>
                  <p>{mail.time.split(" ")[0]}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }



}

export default EmailList;
