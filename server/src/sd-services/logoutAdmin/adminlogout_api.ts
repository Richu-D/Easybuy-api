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
import * as SSD_SERVICE_ID_sd_juY1oS6MqeJWXzjo from './adminlogout_service'; //_splitter_
//append_imports_end
export class adminlogout_api {
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
    this.serviceName = 'adminlogout_api';
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
      instance = new adminlogout_api(
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
      //appendnew_flow_adminlogout_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: adminlogout_api');

    //appendnew_flow_adminlogout_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: adminlogout_api');

    this.app['post'](
      `${this.serviceBasePath}/admin/logout`,
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
          bh = await this.sd_pvHZOfZ6Hwih2SKV(bh, parentSpanInst);
          //appendnew_next_sd_pKvjLWUv8UTdPqDp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_pKvjLWUv8UTdPqDp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_adminlogout_api_HttpIn
  }
  //   service flows_adminlogout_api

  //appendnew_flow_adminlogout_api_start

  async sd_pvHZOfZ6Hwih2SKV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pvHZOfZ6Hwih2SKV',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_juY1oS6MqeJWXzjoInstance: SSD_SERVICE_ID_sd_juY1oS6MqeJWXzjo.adminlogout_service =
        SSD_SERVICE_ID_sd_juY1oS6MqeJWXzjo.adminlogout_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_juY1oS6MqeJWXzjoInstance.adminLogoutStart(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_8Q65n4rN5QcdzaKM(bh, parentSpanInst);
      //appendnew_next_sd_pvHZOfZ6Hwih2SKV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pvHZOfZ6Hwih2SKV',
        spanInst,
        'sd_pvHZOfZ6Hwih2SKV'
      );
    }
  }

  async sd_8Q65n4rN5QcdzaKM(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8Q65n4rN5QcdzaKM');
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
  //appendnew_flow_adminlogout_api_Catch
}
