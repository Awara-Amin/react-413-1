import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {/* ðª */}
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        {props.description}
        {/* âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used
        in connection with doing sports, e.g. at the gym. */}
      </dd>
    </div>
  );
}

export default Entry;
