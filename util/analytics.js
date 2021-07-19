import ReactGA from "react-ga";

/* Google Analytics Helper Functions */

// Initializes Google Analytics object
export const initGA = () => {
  ReactGA.initialize("UA-48700312-3");
};

// Logs a page view to whichever page the React app is currently routed to.
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
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
