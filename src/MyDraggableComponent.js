
import Draggable from "react-draggable";
import React from "react";

function MyDraggableComponent() {
    const eventHandler = (e, data) => {
      console.log('Event Type', e.type);
      console.log({e, data});
    }

    return (
      <Draggable
          onStop={eventHandler}>
          <div style={{border: "2px solid red", padding: "1rem", width: "30%"}}>
            <div className="handle">Drag from here</div>
            <div>Wheeee!</div>
          </div>
      </Draggable>
    )
  }

  export default MyDraggableComponent;