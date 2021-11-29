// Constants
// import { decrypt } from '../cipherUtils';
import Constants from '../Constants'

import CryptoJS from 'crypto-js'

const Message = ({ msgBody, timeSent, senderId, encrypted, userInfo }) => {
  const allConstants = Constants()

  var key = localStorage.getItem("sKey");
  var isKeyAvailable = localStorage.getItem("isKeyAvailable");
  if(encrypted && isKeyAvailable) {
    var bytes = CryptoJS.AES.decrypt(msgBody, key);
    msgBody = bytes.toString(CryptoJS.enc.Utf8);
    }
  return (
    <div className={(senderId == userInfo.userId) ? "msg my-msg" : "msg room-msg"}>{msgBody}
      <span className="time-sent">{allConstants.formatDates(timeSent)}</span>
    </div>
  );
};

export default Message;
