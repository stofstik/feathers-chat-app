'use strict';

// This hook makes sure that only the message owner can modify the message

const errors = require('feathers-errors');

module.exports = function(options) {
  return function(hook) {
    const messageService = hook.app.service('messages');

    // Get the message
    return messageService.get(hook.id, hook.params).then((message) => {
      if(message.sentBy._id !== hook.params.user._id) {
        // Current userId is not the same as message owner
        throw new errors.NotAuthenticated('Access not allowed');
      }
    });

    // NOTE Feathers docs say to put this here but code is unreachable?
    // return hook;
  };
};
