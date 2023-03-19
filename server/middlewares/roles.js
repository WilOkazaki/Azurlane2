const { AccessControl } = require('accesscontrol');

const ac = new AccessControl();

ac.grant('user')
    .updateOwn('user')
    .readOwn('user')
  	.readAny('movie')
  	.readAny('review')
    .createOwn('review') 
    .deleteOwn('review') 
    .updateOwn('review') 
  .grant('admin')
    .extend('user')
    .createAny('movie')
    .updateAny('movie')  
    .deleteAny('movie')               
    .updateAny('review')  
    .deleteAny('review')
    .createAny('user')
    .readAny('user')
    .updateAny('user')
    .deleteAny('user')

module.exports = ac;