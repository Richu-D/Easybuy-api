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
export class employee_pre_middleware {
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
    this.serviceName = 'employee_pre_middleware';
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
      instance = new employee_pre_middleware(
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
      //appendnew_flow_employee_pre_middleware_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug(
      'mounting all middlewares for service :: employee_pre_middleware'
    );

    let mw_employeeCheckMiddleware: Middleware = new Middleware(
      this.serviceName,
      'employeeCheckMiddleware',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_OfGU0S4PlbB7IE0u(bh, parentSpanInst);
          //appendnew_next_sd_U3svh0c1MWuhhatd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_U3svh0c1MWuhhatd');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['employeeCheckMiddleware'] =
      mw_employeeCheckMiddleware;
    //appendnew_flow_employee_pre_middleware_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: employee_pre_middleware');
    //appendnew_flow_employee_pre_middleware_HttpIn
  }
  //   service flows_employee_pre_middleware

  //appendnew_flow_employee_pre_middleware_start

  async sd_OfGU0S4PlbB7IE0u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OfGU0S4PlbB7IE0u',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_BhkpAqtL7jriORVG(bh, parentSpanInst);
      //appendnew_next_sd_OfGU0S4PlbB7IE0u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OfGU0S4PlbB7IE0u',
        spanInst,
        'sd_OfGU0S4PlbB7IE0u'
      );
    }
  }

  async sd_BhkpAqtL7jriORVG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BhkpAqtL7jriORVG',
      parentSpanInst
    );
    try {
      bh.local.isEmployeeLoggedIn = false;

      if (bh.local.session?.data?.employeeid) {
        bh.local.isEmployeeLoggedIn = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rDOXBp9CoQmuEz0U(bh, parentSpanInst);
      //appendnew_next_sd_BhkpAqtL7jriORVG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BhkpAqtL7jriORVG',
        spanInst,
        'sd_BhkpAqtL7jriORVG'
      );
    }
  }

  async sd_rDOXBp9CoQmuEz0U(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rDOXBp9CoQmuEz0U',
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
        bh = await this.sd_ShY5TdWn0om3vwzI(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isEmployeeLoggedIn,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_1CaTDAnKvGPiZIth(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rDOXBp9CoQmuEz0U',
        spanInst,
        'sd_rDOXBp9CoQmuEz0U'
      );
    }
  }

  async sd_ShY5TdWn0om3vwzI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ShY5TdWn0om3vwzI',
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
        'sd_ShY5TdWn0om3vwzI',
        spanInst,
        'sd_ShY5TdWn0om3vwzI'
      );
    }
  }

  async sd_1CaTDAnKvGPiZIth(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1CaTDAnKvGPiZIth',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 401,
        message: 'UNAUTHORISED',
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_3cFtwqJQp6nKftpx(bh, parentSpanInst);
      //appendnew_next_sd_1CaTDAnKvGPiZIth
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1CaTDAnKvGPiZIth',
        spanInst,
        'sd_1CaTDAnKvGPiZIth'
      );
    }
  }

  async sd_3cFtwqJQp6nKftpx(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3cFtwqJQp6nKftpx');
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
  //appendnew_flow_employee_pre_middleware_Catch
}
