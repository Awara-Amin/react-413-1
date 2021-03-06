import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

console.log(emojipedia);

// 1* Creat Entry Component
// 2* Create prop to replace hardcoded data
// 3*a import the emojipedia const
// 3*b  Map through the emojipedia array and render Entry components

// id: 1,
//     emoji: "ðª",
//     name: "Tense Biceps",
//     meaning:
//       "âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
        {/* <Entry
          emoji="ðª"
          name="Tense Biceps"
          description="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        <Entry
          emoji="ðª"
          name="Tense Biceps"
          description="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        <Entry
          emoji="ðª"
          name="Tense Biceps"
          description="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        /> */}
        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              ðª
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            âYou can do that!â or âI feel strong!â Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div> */}
        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              ð
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a âhigh fiveâ
            or to say thank you.
          </dd>
        </div> */}
        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              ð¤£
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of âroflâ. Stands
            for ârolling on the floor, laughingâ.
          </dd>
        </div> */}
      </dl>
    </div>
  );
}

export default App;
