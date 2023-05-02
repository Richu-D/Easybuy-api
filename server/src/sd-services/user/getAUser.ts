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
import * as SSD_SERVICE_ID_sd_seUnVBxJEZr9CTHx from './getAUserSerive'; //_splitter_
//append_imports_end
export class getAUser {
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
    this.serviceName = 'getAUser';
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
      instance = new getAUser(
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
      //appendnew_flow_getAUser_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getAUser');

    //appendnew_flow_getAUser_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: getAUser');

    this.app['get'](
      `${this.serviceBasePath}/user/:phone`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
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
          bh = await this.sd_gh9lf2sW8W9BdpPA(bh, parentSpanInst);
          //appendnew_next_sd_KLpVEMpZ7Xi7SxUd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_KLpVEMpZ7Xi7SxUd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getAUser_HttpIn
  }
  //   service flows_getAUser

  //appendnew_flow_getAUser_start

  async sd_gh9lf2sW8W9BdpPA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gh9lf2sW8W9BdpPA',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_seUnVBxJEZr9CTHxInstance: SSD_SERVICE_ID_sd_seUnVBxJEZr9CTHx.getAUserSerive =
        SSD_SERVICE_ID_sd_seUnVBxJEZr9CTHx.getAUserSerive.getInstance();
      bh = await SSD_SERVICE_ID_sd_seUnVBxJEZr9CTHxInstance.sd_bvsaR8BV73PjDuSQ(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_gcUgYCXofN8NWjuS(bh, parentSpanInst);
      //appendnew_next_sd_gh9lf2sW8W9BdpPA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gh9lf2sW8W9BdpPA',
        spanInst,
        'sd_gh9lf2sW8W9BdpPA'
      );
    }
  }

  async sd_gcUgYCXofN8NWjuS(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(bh.local.response.statusCode)
        .send(bh.local.response.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gcUgYCXofN8NWjuS');
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
  //appendnew_flow_getAUser_Catch
}
