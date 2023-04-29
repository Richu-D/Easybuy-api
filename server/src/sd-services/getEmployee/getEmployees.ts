let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class getEmployees {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'getEmployees';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new getEmployees(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_getEmployees_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getEmployees');

    //appendnew_flow_getEmployees_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: getEmployees');

    this.app['get'](
      `${this.serviceBasePath}/admin/employee`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'employeeCheck',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_ZtnxADNfrg5o2bJp(bh, parentSpanInst);
          //appendnew_next_sd_Z6qa8pWV6fxUt59c
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Z6qa8pWV6fxUt59c');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'employeeCheck',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getEmployees_HttpIn
  }
  //   service flows_getEmployees

  //appendnew_flow_getEmployees_start

  async sd_ZtnxADNfrg5o2bJp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZtnxADNfrg5o2bJp',
      parentSpanInst
    );
    try {
      bh.local.query = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_26Ko7MIJJeesFReg(bh, parentSpanInst);
      //appendnew_next_sd_ZtnxADNfrg5o2bJp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZtnxADNfrg5o2bJp',
        spanInst,
        'sd_ZtnxADNfrg5o2bJp'
      );
    }
  }

  async sd_26Ko7MIJJeesFReg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_26Ko7MIJJeesFReg',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_VRbulAroluyj85b8',
        process.env.DB_COLLECTION,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QtrAESZVPDdsEf8G(bh, parentSpanInst);
      //appendnew_next_sd_26Ko7MIJJeesFReg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_26Ko7MIJJeesFReg',
        spanInst,
        'sd_26Ko7MIJJeesFReg'
      );
    }
  }

  async sd_QtrAESZVPDdsEf8G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QtrAESZVPDdsEf8G',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        data: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AXJ6XDBeV8dtSWeW(bh, parentSpanInst);
      //appendnew_next_sd_QtrAESZVPDdsEf8G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QtrAESZVPDdsEf8G',
        spanInst,
        'sd_QtrAESZVPDdsEf8G'
      );
    }
  }

  async sd_AXJ6XDBeV8dtSWeW(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AXJ6XDBeV8dtSWeW');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_getEmployees_Catch
}
