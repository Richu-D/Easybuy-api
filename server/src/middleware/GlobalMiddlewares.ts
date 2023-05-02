//append_imports_start

import * as cors from 'cors'; //_splitter_
import * as expressSession from 'express-session'; //_splitter_
import { MongoConnections } from '../utils/ndefault-mongodb/Mongodb/MongoConnections'; //_splitter_
import * as mongoconnector from 'neutrinos-mongodb-session-store'; //_splitter_
//append_imports_end
export let Middlewares = {
  sd_Tp9jNbUvUZ1kJnAn: () => {
    let corsOptions = {
      origin: ['http://localhost:4200'],

      credentials: true,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
<<<<<<< HEAD
<<<<<<< HEAD
  sd_gjDViOtqknkKfAW0: () => {
=======
  sd_2hBZjlncSVhHsAYH: () => {
>>>>>>> employee
=======
  sd_2hBZjlncSVhHsAYH: () => {
>>>>>>> employee
    let sess: expressSession.SessionOptions = {
      cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 3600000,
        sameSite: 'lax',
      },

      proxy: false,

      resave: true,

      rolling: false,

      saveUninitialized: false,

<<<<<<< HEAD
<<<<<<< HEAD
      secret: 'admin',
=======
      secret: 'employee',
>>>>>>> employee
=======
      secret: 'employee',
>>>>>>> employee

      unset: 'keep',

      store: new (mongoconnector(expressSession))({
        client: MongoConnections.getInstance().getMongoInstance(
<<<<<<< HEAD
<<<<<<< HEAD
          'sd_VRbulAroluyj85b8'
=======
          'sd_vsXSfiucndOZF9WI'
>>>>>>> employee
=======
          'sd_vsXSfiucndOZF9WI'
>>>>>>> employee
        ),
        autoRemove: 'native',
      }),
    };
    return expressSession(sess);
  },
  //appendnew_flow
};
