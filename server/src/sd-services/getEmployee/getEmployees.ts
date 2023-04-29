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
      `${this.serviceBasePath}/admin/employees`,
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
          bh = await this.sd_0uAckIrPQC3pDXEy(bh, parentSpanInst);
          //appendnew_next_sd_qbNR8yUZWCeyywkV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qbNR8yUZWCeyywkV');
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

  async sd_0uAckIrPQC3pDXEy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0uAckIrPQC3pDXEy',
      parentSpanInst
    );
    try {
      bh.local.query = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_bsTXOuodzDZrrjEi(bh, parentSpanInst);
      //appendnew_next_sd_0uAckIrPQC3pDXEy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0uAckIrPQC3pDXEy',
        spanInst,
        'sd_0uAckIrPQC3pDXEy'
      );
    }
  }

  async sd_bsTXOuodzDZrrjEi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bsTXOuodzDZrrjEi',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_vsXSfiucndOZF9WI',
        process.env.DB_COLLECTION,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XF6O2jOBzvqtDIU4(bh, parentSpanInst);
      //appendnew_next_sd_bsTXOuodzDZrrjEi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bsTXOuodzDZrrjEi',
        spanInst,
        'sd_bsTXOuodzDZrrjEi'
      );
    }
  }

  async sd_XF6O2jOBzvqtDIU4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XF6O2jOBzvqtDIU4',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        data: bh.local.result,
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ZThD77KUeRA7EVJu(bh, parentSpanInst);
      //appendnew_next_sd_XF6O2jOBzvqtDIU4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XF6O2jOBzvqtDIU4',
        spanInst,
        'sd_XF6O2jOBzvqtDIU4'
      );
    }
  }

  async sd_ZThD77KUeRA7EVJu(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZThD77KUeRA7EVJu');
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
