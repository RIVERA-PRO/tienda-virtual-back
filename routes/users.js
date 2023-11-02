import express from 'express'
import validator from '../middlewares/validator.js'
import schemaSignUp from '../schemas/userSignUp.js'
import schemaSignIn from '../schemas/userSignIn.js'
import controller from '../controllers/auth/auth.js'
import controllerVerify from '../controllers/auth/verify.js'
import accountExistsSignUp from '../middlewares/accountExistsSignUp.js'
import accountExistsSignIn from '../middlewares/accountExistsSignIn.js'
import accountHasBeenVerified from '../middlewares/accountHasBeenVerified.js'
import passwordIsOk from '../middlewares/passwordIsOk.js'
import passport from '../middlewares/passport.js'
import getOneUser from '../controllers/getOneUser.js'
import getAllUsers from '../controllers/getAllUsers.js';
import editUser from '../controllers/editUser.js';
import deleteUser from '../controllers/deleteUser.js';

const { verify } = controllerVerify
const { sign_up, sign_in, sign_out, token } = controller
const { get_one } = getOneUser
let router = express.Router();
router.get('/', getAllUsers.get_all);
router.put('/:id', editUser.edit);
router.delete('/:id', deleteUser.delete);
router.post('/signup', validator(schemaSignUp), accountExistsSignUp, sign_up)
router.post('/signin', validator(schemaSignIn), accountExistsSignIn, accountHasBeenVerified, passwordIsOk, sign_in)
router.post('/token', passport.authenticate('jwt', { session: false }), token)
router.post('/signout', passport.authenticate('jwt', { session: false }), sign_out)
router.get('/verify/:verify_code', verify)
router.get('/:id', get_one)


export default router