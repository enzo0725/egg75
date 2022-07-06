'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;  
  router.get('/message', controller.board.index);
  router.post('/message', controller.board.create);
  router.get('/message/:id', controller.board.show);
  router.patch('/message/:id', controller.board.update);
  router.delete('/message/:id',controller.board.destroy);
};
