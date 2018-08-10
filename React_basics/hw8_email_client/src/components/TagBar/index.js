import React from 'react';
import './style.css';

const TagBar = props => {
  const inboxTotal = props.allMails.filter(mail => mail.tag === "inbox");
  const deleted = props.allMails.filter(mail => mail.tag !== "inbox");
  const notRead = inboxTotal.filter(mail => mail.read === "false");
  const notReadCount = notRead.length > 0 ? notRead.length : 0;
  const deletedCount = deleted.length > 0 ? deleted.length : 0;

  return (
    <div className="tagbar">
      <table className="table table-dark table-hover">
          <tbody>
              <tr style={{height: "100px"}} onClick={()=>props.setFilter("inbox")} role="button">
                  <td style={{verticalAlign: "middle"}}><span className="glyphicon glyphicon-inbox"></span> Inbox</td>
                  <td className="text-right" style={{width: "75%", verticalAlign: "middle"}}>{notReadCount}</td>
              </tr>
              <tr style={{height: "100px"}} onClick={()=>props.setFilter("sent")} role="button">
                  <td style={{verticalAlign: "middle"}}><span className="glyphicon glyphicon-send"></span> Sent</td>
                  <td style={{verticalAlign: "middle"}} className="text-right"> 0 </td>
              </tr>
              <tr style={{height: "100px"}} onClick={()=>props.setFilter("draft")} role="button">
                  <td style={{verticalAlign: "middle"}}><span className="glyphicon glyphicon-pencil"></span> Draft</td>
                  <td style={{verticalAlign: "middle"}} className="text-right"> 0 </td>
              </tr>
              <tr style={{height: "100px"}} onClick={()=>props.setFilter("trash")} role="button">
                  <td style={{verticalAlign: "middle"}}><span className="glyphicon glyphicon-trash"></span> Trash</td>
                  <td style={{verticalAlign: "middle"}} className="text-right"> {deletedCount}</td>
              </tr>


          </tbody>
      </table>
    </div>
  )

}






export default TagBar;
