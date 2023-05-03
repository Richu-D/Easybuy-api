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
export class employeeLogout_service {
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
    this.serviceName = 'employeeLogout_service';
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
      instance = new employeeLogout_service(
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
      //appendnew_flow_employeeLogout_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: employeeLogout_service');

    //appendnew_flow_employeeLogout_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: employeeLogout_service');
    //appendnew_flow_employeeLogout_service_HttpIn
  }
  //   service flows_employeeLogout_service

  async employeeLogoutStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'employeeLogoutStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dYtp1MbFDeJflxYE(bh, parentSpanInst);
      //appendnew_next_employeeLogoutStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dLgBsYlsMCALI8Ve',
        spanInst,
        'employeeLogoutStart'
      );
    }
  }

  //appendnew_flow_employeeLogout_service_start

  async sd_dYtp1MbFDeJflxYE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dYtp1MbFDeJflxYE',
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
      bh = await this.sd_qXsHbqZONWSIIofC(bh, parentSpanInst);
      //appendnew_next_sd_dYtp1MbFDeJflxYE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dYtp1MbFDeJflxYE',
        spanInst,
        'sd_dYtp1MbFDeJflxYE'
      );
    }
  }

  async sd_qXsHbqZONWSIIofC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qXsHbqZONWSIIofC',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'EMPLOYEE_LOG_OUT',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qXsHbqZONWSIIofC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qXsHbqZONWSIIofC',
        spanInst,
        'sd_qXsHbqZONWSIIofC'
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
  //appendnew_flow_employeeLogout_service_Catch
}
