'use strict';

// A hook to process a message

module.exports = function(options) {
  return function(hook) {
    // Get the authenticated user
    const user = hook.params.user;
    const text = hook.data.text
      .substring(0, 400) // Truncate messages
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); // Escape chars
    hook.data = {
      text,
      userId: user._id,
      createdAt: new Date().getTime()
    }
  };
};
