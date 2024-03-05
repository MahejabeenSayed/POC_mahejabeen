import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import Image from "../../atoms/Image/Image";
import jj from "../../../assets/images/User-Icon.webp";

const Sidebar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2 className="body-large-600 chat-head">
        <FormattedMessage id="chat_title" />
      </h2>
      <div className="rest-wrapper">
        <h4 className="chat__header body-small-400">
          <FormattedMessage id="active_users" />
        </h4>
        <div className="chat__users">
          {users.map((user) => (
            <div className="chat-user" key={user.socketID}>
              <Image image={jj} />
              <p key={user.socketID} className="body-tiny-600">
                {user.userName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
