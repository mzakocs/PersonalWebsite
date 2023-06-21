import ReactGA from "react-ga4";

/* Google Analytics Helper Functions */

// Initializes Google Analytics object
export const initGA = () => {
  ReactGA.initialize("G-78SW8D3SGG");
};

// Logs a page view to whichever page the React app is currently routed to.
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

// Logs an event to Google Analytics.
export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

// Logs an exception to Google Analytics.
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
