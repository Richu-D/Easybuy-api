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
export class logout_service {
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
    this.serviceName = 'logout_service';
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
      instance = new logout_service(
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
      //appendnew_flow_logout_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: logout_service');

    //appendnew_flow_logout_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: logout_service');
    //appendnew_flow_logout_service_HttpIn
  }
  //   service flows_logout_service

  async logoutEmployeeStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'logoutEmployeeStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_a4fh3JRuqXlnUPxz(bh, parentSpanInst);
      //appendnew_next_logoutEmployeeStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fORybs776InzpFCq',
        spanInst,
        'logoutEmployeeStart'
      );
    }
  }

  //appendnew_flow_logout_service_start

  async sd_a4fh3JRuqXlnUPxz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_a4fh3JRuqXlnUPxz',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k9e5cPL9GRPYXqRK(bh, parentSpanInst);
      //appendnew_next_sd_a4fh3JRuqXlnUPxz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_a4fh3JRuqXlnUPxz',
        spanInst,
        'sd_a4fh3JRuqXlnUPxz'
      );
    }
  }

  async sd_k9e5cPL9GRPYXqRK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k9e5cPL9GRPYXqRK',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'EMPLOYEE_LOG_OUT',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_k9e5cPL9GRPYXqRK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k9e5cPL9GRPYXqRK',
        spanInst,
        'sd_k9e5cPL9GRPYXqRK'
      );
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
  //appendnew_flow_logout_service_Catch
}
