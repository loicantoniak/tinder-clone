import React, { useState, useEffect } from "react";
import Chat from "./Chat";
import { firestore } from "../../firebase/firebase";
import Header from '../Header/Header'

export default function Chats() {
  const [pretenders, setPretenders] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("pretenders")
      .onSnapshot((snapshot) =>
        setPretenders(snapshot.docs.map((doc) => doc.data()))
      );

    // the cleanup...
    return () => unsubscribe();
  }, []);
  return (
    <>
      <Header backButton="/" />
      <div className="chats__container">
        {pretenders.map((pretender, i) => (
          <Chat
            key={i}
            name={pretender.name}
            message={pretender.message}
            profilPic={pretender.profilPic}
            timestamp={pretender.timestamp}
          />
        ))}
      </div>
    </>
  );
}
