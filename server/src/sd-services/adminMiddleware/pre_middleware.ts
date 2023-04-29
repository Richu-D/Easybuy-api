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
//append_imports_end
export class pre_middleware {
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
    this.serviceName = 'pre_middleware';
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
      instance = new pre_middleware(
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
      //appendnew_flow_pre_middleware_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: pre_middleware');

    let mw_adminCheckMiddleware: Middleware = new Middleware(
      this.serviceName,
      'adminCheckMiddleware',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_0Q8cqi1wIXbkxt0v(bh, parentSpanInst);
          //appendnew_next_sd_yPn2LbEEWto5AeUz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yPn2LbEEWto5AeUz');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['adminCheckMiddleware'] =
      mw_adminCheckMiddleware;
    //appendnew_flow_pre_middleware_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: pre_middleware');
    //appendnew_flow_pre_middleware_HttpIn
  }
  //   service flows_pre_middleware

  //appendnew_flow_pre_middleware_start

  async sd_0Q8cqi1wIXbkxt0v(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0Q8cqi1wIXbkxt0v',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Mchv6n8UUyq1bKTX(bh, parentSpanInst);
      //appendnew_next_sd_0Q8cqi1wIXbkxt0v
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0Q8cqi1wIXbkxt0v',
        spanInst,
        'sd_0Q8cqi1wIXbkxt0v'
      );
    }
  }

  async sd_Mchv6n8UUyq1bKTX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Mchv6n8UUyq1bKTX',
      parentSpanInst
    );
    try {
      bh.local.isAdminLoggedIn = false;

      if (bh.local.session?.data?.email) {
        bh.local.isAdminLoggedIn = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yXs9fimeuFjtjuIC(bh, parentSpanInst);
      //appendnew_next_sd_Mchv6n8UUyq1bKTX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Mchv6n8UUyq1bKTX',
        spanInst,
        'sd_Mchv6n8UUyq1bKTX'
      );
    }
  }

  async sd_yXs9fimeuFjtjuIC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yXs9fimeuFjtjuIC',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isAdminLoggedIn,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_FHSycVsUM1mXhZEf(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isAdminLoggedIn,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_0BrUy5GcL6mR98Rt(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yXs9fimeuFjtjuIC',
        spanInst,
        'sd_yXs9fimeuFjtjuIC'
      );
    }
  }

  async sd_FHSycVsUM1mXhZEf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FHSycVsUM1mXhZEf',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FHSycVsUM1mXhZEf',
        spanInst,
        'sd_FHSycVsUM1mXhZEf'
      );
    }
  }

  async sd_0BrUy5GcL6mR98Rt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0BrUy5GcL6mR98Rt',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 401,
        message: 'UNAUTHORISED',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_lselnpXPdBv8lAiX(bh, parentSpanInst);
      //appendnew_next_sd_0BrUy5GcL6mR98Rt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0BrUy5GcL6mR98Rt',
        spanInst,
        'sd_0BrUy5GcL6mR98Rt'
      );
    }
  }

  async sd_lselnpXPdBv8lAiX(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lselnpXPdBv8lAiX');
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
  //appendnew_flow_pre_middleware_Catch
}
