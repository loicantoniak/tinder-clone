import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import './TinderCards.css'
import {firestore} from "../../../firebase/firebase";

export default function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    // the cleanup...
    return () => unsubscribe();
  }, []);

  return (
    <div className="tinderCards__container">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            className="card"
            style={{ backgroundImage: `url(${person.url})` }}
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
