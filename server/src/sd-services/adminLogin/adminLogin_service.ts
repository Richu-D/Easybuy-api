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
export class adminLogin_service {
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
    this.serviceName = 'adminLogin_service';
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
      instance = new adminLogin_service(
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
      //appendnew_flow_adminLogin_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: adminLogin_service');

    //appendnew_flow_adminLogin_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: adminLogin_service');
    //appendnew_flow_adminLogin_service_HttpIn
  }
  //   service flows_adminLogin_service

  async adminLoginStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'adminLoginStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KIj4RD6f3KVjbDqO(bh, parentSpanInst);
      //appendnew_next_adminLoginStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zwdzAAt98VdNJNc5',
        spanInst,
        'adminLoginStart'
      );
    }
  }

  //appendnew_flow_adminLogin_service_start

  async sd_KIj4RD6f3KVjbDqO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KIj4RD6f3KVjbDqO',
      parentSpanInst
    );
    try {
      // bh.input.body={
      //     email:"admin@gmail.com",
      //     password:"admin"
      // }

      bh.local.isAdminLogin = false;

      if (!bh.input.body?.email || !bh.input.body?.password) {
        bh.local.isAdminLogin = '';
      } else {
        if (
          bh.input.body.email === process.env.ADMIN_EMAIL &&
          bh.input.body.password === process.env.ADMIN_PASSWORD
        ) {
          bh.local.isAdminLogin = true;
        }
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DGNwfaCBhWNTPXRp(bh, parentSpanInst);
      //appendnew_next_sd_KIj4RD6f3KVjbDqO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KIj4RD6f3KVjbDqO',
        spanInst,
        'sd_KIj4RD6f3KVjbDqO'
      );
    }
  }

  async sd_DGNwfaCBhWNTPXRp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DGNwfaCBhWNTPXRp',
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
        bh = await this.sd_wu4VrrP4dXdGQMCn(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isAdminLogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_NTdyeeqc4FBCZips(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.local.isAdminLogin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wwPhtamg4ljXOB9w(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DGNwfaCBhWNTPXRp',
        spanInst,
        'sd_DGNwfaCBhWNTPXRp'
      );
    }
  }

  async sd_wu4VrrP4dXdGQMCn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wu4VrrP4dXdGQMCn',
      parentSpanInst
    );
    try {
      bh.local.admin = {
        ...bh.input.body,
        isAdmin: true,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S6uabqR7yNv1Za1s(bh, parentSpanInst);
      //appendnew_next_sd_wu4VrrP4dXdGQMCn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wu4VrrP4dXdGQMCn',
        spanInst,
        'sd_wu4VrrP4dXdGQMCn'
      );
    }
  }

  async sd_S6uabqR7yNv1Za1s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S6uabqR7yNv1Za1s',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.admin;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pU794Dure1mGZD39(bh, parentSpanInst);
      //appendnew_next_sd_S6uabqR7yNv1Za1s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S6uabqR7yNv1Za1s',
        spanInst,
        'sd_S6uabqR7yNv1Za1s'
      );
    }
  }

  async sd_pU794Dure1mGZD39(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pU794Dure1mGZD39',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'ADMIN_LOG_IN',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_pU794Dure1mGZD39
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pU794Dure1mGZD39',
        spanInst,
        'sd_pU794Dure1mGZD39'
      );
    }
  }

  async sd_NTdyeeqc4FBCZips(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NTdyeeqc4FBCZips',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 401,
        message: 'EMAIL_OR_PASSWORD_INCOREECT_OR_BOTH',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_NTdyeeqc4FBCZips
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NTdyeeqc4FBCZips',
        spanInst,
        'sd_NTdyeeqc4FBCZips'
      );
    }
  }

  async sd_wwPhtamg4ljXOB9w(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wwPhtamg4ljXOB9w',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'EMAIL_AND_PASSWORD_REQUIRED',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_wwPhtamg4ljXOB9w
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wwPhtamg4ljXOB9w',
        spanInst,
        'sd_wwPhtamg4ljXOB9w'
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
  //appendnew_flow_adminLogin_service_Catch
}
