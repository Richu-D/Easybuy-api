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
export class adminlogin_service {
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
    this.serviceName = 'adminlogin_service';
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
      instance = new adminlogin_service(
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
      //appendnew_flow_adminlogin_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: adminlogin_service');

    //appendnew_flow_adminlogin_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: adminlogin_service');
    //appendnew_flow_adminlogin_service_HttpIn
  }
  //   service flows_adminlogin_service

  async loginAdminStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'loginAdminStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wLYaxslhDGyo4kYt(bh, parentSpanInst);
      //appendnew_next_loginAdminStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eZ2zF5Z7RYrx4W1c',
        spanInst,
        'loginAdminStart'
      );
    }
  }

  //appendnew_flow_adminlogin_service_start

  async sd_wLYaxslhDGyo4kYt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wLYaxslhDGyo4kYt',
      parentSpanInst
    );
    try {
      bh.local.data = {
        email: 'admin@gmail.com',
        // password:"admin"
      };

      bh.local.isAdminLogin = false;

      if (!bh.local.data?.email || !bh.local.data?.password) {
        bh.local.isAdminLogin = '';
      } else {
        if (
          bh.local.data.email === process.env.ADMIN_EMAIL &&
          bh.local.data.password === process.env.ADMIN_PASSWORD
        ) {
          bh.local.isAdminLogin = true;
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_s28wD1cIVMflAqOa(bh, parentSpanInst);
      //appendnew_next_sd_wLYaxslhDGyo4kYt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wLYaxslhDGyo4kYt',
        spanInst,
        'sd_wLYaxslhDGyo4kYt'
      );
    }
  }

  async sd_s28wD1cIVMflAqOa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_s28wD1cIVMflAqOa',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isAdminLogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yCORVnFtBC5ey7YZ(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isAdminLogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_umRfnhi2sgBbtrig(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.local.isAdminLogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_tcmowRvvp2djIIqX(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s28wD1cIVMflAqOa',
        spanInst,
        'sd_s28wD1cIVMflAqOa'
      );
    }
  }

  async sd_yCORVnFtBC5ey7YZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yCORVnFtBC5ey7YZ',
      parentSpanInst
    );
    try {
      bh.local.admin = {
        ...bh.local.data,
        isAdmin: true,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tJZ6MV5fGXp7vOwm(bh, parentSpanInst);
      //appendnew_next_sd_yCORVnFtBC5ey7YZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yCORVnFtBC5ey7YZ',
        spanInst,
        'sd_yCORVnFtBC5ey7YZ'
      );
    }
  }

  async sd_tJZ6MV5fGXp7vOwm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tJZ6MV5fGXp7vOwm',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.admin;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4cufU7tX7l6tsWpl(bh, parentSpanInst);
      //appendnew_next_sd_tJZ6MV5fGXp7vOwm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tJZ6MV5fGXp7vOwm',
        spanInst,
        'sd_tJZ6MV5fGXp7vOwm'
      );
    }
  }

  async sd_4cufU7tX7l6tsWpl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4cufU7tX7l6tsWpl',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'ADMIN_LOG_IN',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_4cufU7tX7l6tsWpl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4cufU7tX7l6tsWpl',
        spanInst,
        'sd_4cufU7tX7l6tsWpl'
      );
    }
  }

  async sd_umRfnhi2sgBbtrig(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_umRfnhi2sgBbtrig',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 401,
        message: 'EMAIL_OR_PASSWORD_INCOREECT_OR_BOTH',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_umRfnhi2sgBbtrig
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_umRfnhi2sgBbtrig',
        spanInst,
        'sd_umRfnhi2sgBbtrig'
      );
    }
  }

  async sd_tcmowRvvp2djIIqX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tcmowRvvp2djIIqX',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'EMAIL_AND_PASSWORD_REQUIRED',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_tcmowRvvp2djIIqX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tcmowRvvp2djIIqX',
        spanInst,
        'sd_tcmowRvvp2djIIqX'
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
  //appendnew_flow_adminlogin_service_Catch
}
