import React, { Component } from 'react';
import '../assets/css/Faqs.css';

class Faqs extends Component {
  render() {
    return (
      <div className="Faqs">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="container">
          <div className="column left">
            <div className="question">
              <h3>Who can attend?</h3>
              <p>All undergraduate and graduate students of any major are welcome! If you have graduated, you're still welcome to attend if you graduated within the past 6 months!</p>
            </div>
            <div className="question">
              <h3>How do teams work?</h3>
              <p>You can be in teams of up to 4 people and it is highly encouraged to find at least one other person to participate with!
              If you need help forming a team, we'll help set you up with others who are looking for teammates</p>
            </div>
            <div className="question">
              <h3>How much will it cost me?</h3>
              <p>Admission, food and drinks are absolutely free! However, we cannot cover any travel costs.</p>
            </div>
            <div className="question">
              <h3>Where can I sleep on campus?</h3>
              <p>In any HackMerced designated rooms! Maps will be provided at the event.</p>
            </div>
          </div>
          <div className="column right">
            <div className="question">
              <h3>What if I have no coding background?</h3>
              <p>You're still able to attend and compete! Work with a team or ask any one of our volunteers for help!
              There will also be workshops during the event if you're interested in learning how to code.
              </p>
            </div>
            <div className="question">
              <h3>Is there anything I should bring?</h3>
              <p>Bring your ID, computer, and necessary cables! If you plan on spending the night, bring a change of clothes, deodorant, toiletries, and a sleeping bag (optional)! We'll have a hardware lab in case anyone needs hardware.</p>
            </div>
            <div className="question">
              <h3>What can I build?</h3>
              <p>You and your team can build whatever your creativity comes up with!</p>
            </div>
            <div className="question">
              <h3>Are there any rules?</h3>
              <p>All attendees must follow the <a rel="noopener noreferrer" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" style={{color:"#fff"}}>Major League Hacking’s code of conduct</a>.</p>
            </div>
          </div>
        </div>
        <h3>Any other questions?</h3>
        <p>Feel free to message us at: <a href="mailto:general@hackmerced.com?subject=HackMerced Questions&body=Dear HackMerced," style={{textDecoration:"none", color:"#82E0AA"}}>general@hackmerced.com</a>.
        </p>
      </div>
    );
  }
}

export default Faqs;
