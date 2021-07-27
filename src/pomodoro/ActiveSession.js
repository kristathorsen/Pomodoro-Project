import React from "react";
import {minutesToDuration, secondsToDuration} from "../utils/duration";

function ActiveSession({session, focusDuration, breakDuration}) {
    if (session === null) {
        return null
    }

    const currentTimer = (session.label === "Focusing" ? focusDuration : breakDuration)
    const percent = ((currentTimer * 60 - session?.timeRemaining)/(currentTimer * 60)) * 100

    return (
    <div>
    <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session?.label} for {minutesToDuration(currentTimer)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percent} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${percent}%`}}// TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
        </div>
    )
}

export default ActiveSession;