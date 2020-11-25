import React from "react";

import * as availabilities from './availabilities';

const defaults = {
  email: "justindanielfuller@gmail.com",
  saved: 2340,
  frequency: "Every 2 Weeks",
  contributions: 1000,
  lastPaycheck: new Date("2020-11-12")
};

export function New(data = defaults) {
  return {
    frequency() {
      return data.frequency;
    },
    setFrequency(frequency) {
      return New({
        ...data,
        frequency
      });
    },
    saved() {
      return data.saved;
    },
    setSaved(saved) {
      return New({
        ...data,
        saved
      });
    },
    email() {
      return data.email;
    },
    setEmail(email) {
      return New({
        ...data,
        email
      });
    },
    contributions() {
      return data.contributions;
    },
    setContributions(contributions) {
      return New({
        ...data,
        contributions
      });
    },
    lastPaycheck() {
      return data.lastPaycheck;
    },
    setLastPaycheck(lastPaycheck) {
      return New({
        ...data,
        lastPaycheck: new Date(lastPaycheck)
      });
    },
    availabilityCalculator() {
      return availabilities.get(data)
    }
  };
}

export const Context = React.createContext({
  user: null,
  setUser: null
});
