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

    let mw_employeeCheckMiddleware: Middleware = new Middleware(
      this.serviceName,
      'employeeCheckMiddleware',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_aGnOXKpK1U7by3YD(bh, parentSpanInst);
          //appendnew_next_sd_H5jv7aej0gBnI7xV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_H5jv7aej0gBnI7xV');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['employeeCheckMiddleware'] =
      mw_employeeCheckMiddleware;
    //appendnew_flow_pre_middleware_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: pre_middleware');
    //appendnew_flow_pre_middleware_HttpIn
  }
  //   service flows_pre_middleware

  //appendnew_flow_pre_middleware_start

  async sd_aGnOXKpK1U7by3YD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aGnOXKpK1U7by3YD',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AKbiXwWcQUzPUhWS(bh, parentSpanInst);
      //appendnew_next_sd_aGnOXKpK1U7by3YD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aGnOXKpK1U7by3YD',
        spanInst,
        'sd_aGnOXKpK1U7by3YD'
      );
    }
  }

  async sd_AKbiXwWcQUzPUhWS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AKbiXwWcQUzPUhWS',
      parentSpanInst
    );
    try {
      // console.log("gg",bh.local.session)

      bh.local.isEmployeeLoggedIn = false;

      if (bh.local.session?.data?.employeeid) {
        bh.local.isEmployeeLoggedIn = true;
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SnWQKWpAhRYy9GUq(bh, parentSpanInst);
      //appendnew_next_sd_AKbiXwWcQUzPUhWS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AKbiXwWcQUzPUhWS',
        spanInst,
        'sd_AKbiXwWcQUzPUhWS'
      );
    }
  }

  async sd_SnWQKWpAhRYy9GUq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SnWQKWpAhRYy9GUq',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isEmployeeLoggedIn,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jtiqxFz4269Y03sn(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isEmployeeLoggedIn,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_gsfebE31G92OUNg6(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SnWQKWpAhRYy9GUq',
        spanInst,
        'sd_SnWQKWpAhRYy9GUq'
      );
    }
  }

  async sd_jtiqxFz4269Y03sn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jtiqxFz4269Y03sn',
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
        'sd_jtiqxFz4269Y03sn',
        spanInst,
        'sd_jtiqxFz4269Y03sn'
      );
    }
  }

  async sd_gsfebE31G92OUNg6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gsfebE31G92OUNg6',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 401,
        message: 'UNAUTHORISED',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_2UGVgoCDNDl96am9(bh, parentSpanInst);
      //appendnew_next_sd_gsfebE31G92OUNg6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gsfebE31G92OUNg6',
        spanInst,
        'sd_gsfebE31G92OUNg6'
      );
    }
  }

  async sd_2UGVgoCDNDl96am9(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2UGVgoCDNDl96am9');
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
