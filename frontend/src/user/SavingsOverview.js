import React, { useContext } from "react";

import * as User from "./context";
import * as styles from "../styles";

export function UserInfo() {
  const { user } = useContext(User.Context);

  return (
    <div className="card text-white" style={styles.darkAlt}>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <h5 className="card-title d-inline">Savings Overview</h5>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-7">
            <strong style={styles.textDark}>Saved So Far</strong>
            <p>${user.saved()}</p>
          </div>
          <div className="col-12 col-md-5">
            <strong style={styles.textDark}>Planned Savings</strong>
            <p>
              ${user.contributions()}/{user.frequency()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
