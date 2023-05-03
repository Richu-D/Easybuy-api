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
import * as SSD_SERVICE_ID_sd_bZU7Vj7Ltc7cfnhY from './registerUser_service'; //_splitter_
//append_imports_end
export class registerUser_api {
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
    this.serviceName = 'registerUser_api';
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
      instance = new registerUser_api(
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
      //appendnew_flow_registerUser_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: registerUser_api');

    //appendnew_flow_registerUser_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: registerUser_api');

    this.app['post'](
      `${this.serviceBasePath}/user`,
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
          bh = await this.sd_WcENCvLM3tnJ5zZP(bh, parentSpanInst);
          //appendnew_next_sd_nb1Abc9iS3OrdJfF
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nb1Abc9iS3OrdJfF');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_registerUser_api_HttpIn
  }
  //   service flows_registerUser_api

  //appendnew_flow_registerUser_api_start

  async sd_WcENCvLM3tnJ5zZP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WcENCvLM3tnJ5zZP',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_bZU7Vj7Ltc7cfnhYInstance: SSD_SERVICE_ID_sd_bZU7Vj7Ltc7cfnhY.registerUser_service =
        SSD_SERVICE_ID_sd_bZU7Vj7Ltc7cfnhY.registerUser_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_bZU7Vj7Ltc7cfnhYInstance.sd_K9vqfyJYHSVf6Ivy(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fxd0HuRDgCccm8ku(bh, parentSpanInst);
      //appendnew_next_sd_WcENCvLM3tnJ5zZP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WcENCvLM3tnJ5zZP',
        spanInst,
        'sd_WcENCvLM3tnJ5zZP'
      );
    }
  }

  async sd_fxd0HuRDgCccm8ku(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fxd0HuRDgCccm8ku',
      parentSpanInst
    );
    try {
      console.log(bh.local.response);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_jaBCkzDrlFFizBt5(bh, parentSpanInst);
      //appendnew_next_sd_fxd0HuRDgCccm8ku
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fxd0HuRDgCccm8ku',
        spanInst,
        'sd_fxd0HuRDgCccm8ku'
      );
    }
  }

  async sd_jaBCkzDrlFFizBt5(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jaBCkzDrlFFizBt5');
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
  //appendnew_flow_registerUser_api_Catch
}
