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
  sd_2hBZjlncSVhHsAYH: () => {
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

      secret: 'employee',

      unset: 'keep',

      store: new (mongoconnector(expressSession))({
        client: MongoConnections.getInstance().getMongoInstance(
          'sd_vsXSfiucndOZF9WI'
        ),
        autoRemove: 'native',
      }),
    };
    return expressSession(sess);
  },
  //appendnew_flow
};
