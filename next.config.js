const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        hostApi: "https://sii-media-test.onrender.com",
      },
    };
  }
  return {
    env: {
      hostApi: "https://sii-media-test.onrender.com",
    },
  };
};
