//append_imports_start

import * as cors from 'cors'; //_splitter_
import * as expressSession from 'express-session'; //_splitter_
import { MongoConnections } from '../utils/ndefault-mongodb/Mongodb/MongoConnections'; //_splitter_
import * as mongoconnector from 'neutrinos-mongodb-session-store'; //_splitter_
//append_imports_end
export let Middlewares = {
  sd_Tp9jNbUvUZ1kJnAn: () => {
    let corsOptions = {
      origin: true,

      credentials: false,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  mongodbConnect: () => {
    let sess: expressSession.SessionOptions = {
      cookie: { secure: false, httpOnly: true, sameSite: 'none' },

      proxy: false,

      resave: false,

      rolling: false,

      saveUninitialized: false,

      secret: process.env.secret,

      unset: 'keep',

      store: new (mongoconnector(expressSession))({
        client: MongoConnections.getInstance().getMongoInstance(
          'sd_VKhZy0xYvcoOafEG'
        ),
        autoRemove: 'native',
      }),
    };
    return expressSession(sess);
  },
  //appendnew_flow
};
