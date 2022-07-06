'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;  
  router.get('/message', controller.users.index);
  router.post('/message', controller.users.create);
  router.get('/message/:id', controller.users.show);
  // router.patch('/message/:id', controller.user.update);
  router.delete('/message/:id',controller.users.destroy);
};
