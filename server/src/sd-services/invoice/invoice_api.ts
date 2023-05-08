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
import * as SSD_SERVICE_ID_sd_6D5Q5UozZdfajRte from './invoice_service'; //_splitter_
//append_imports_end
export class invoice_api {
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
    this.serviceName = 'invoice_api';
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
      instance = new invoice_api(
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
      //appendnew_flow_invoice_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: invoice_api');

    //appendnew_flow_invoice_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: invoice_api');

    this.app['get'](
      `${this.serviceBasePath}/invoice/:id`,
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
          bh = await this.sd_BOJ74bu25DJeqRcn(bh, parentSpanInst);
          //appendnew_next_sd_cIQojfYNhm3vaupR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cIQojfYNhm3vaupR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/invoice`,
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
          bh = await this.sd_TJomGx6dg0g8mN7q(bh, parentSpanInst);
          //appendnew_next_sd_XtmK2LDlCg7yICpm
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XtmK2LDlCg7yICpm');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_invoice_api_HttpIn
  }
  //   service flows_invoice_api

  //appendnew_flow_invoice_api_start

  async sd_BOJ74bu25DJeqRcn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BOJ74bu25DJeqRcn',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_6D5Q5UozZdfajRteInstance: SSD_SERVICE_ID_sd_6D5Q5UozZdfajRte.invoice_service =
        SSD_SERVICE_ID_sd_6D5Q5UozZdfajRte.invoice_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_6D5Q5UozZdfajRteInstance.sd_VQmWfu8sYPOoR8Tw(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_JWjw4UV3kQQK6GmJ(bh, parentSpanInst);
      //appendnew_next_sd_BOJ74bu25DJeqRcn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BOJ74bu25DJeqRcn',
        spanInst,
        'sd_BOJ74bu25DJeqRcn'
      );
    }
  }

  async sd_JWjw4UV3kQQK6GmJ(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JWjw4UV3kQQK6GmJ');
    }
  }

  async sd_TJomGx6dg0g8mN7q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TJomGx6dg0g8mN7q',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_6D5Q5UozZdfajRteInstance: SSD_SERVICE_ID_sd_6D5Q5UozZdfajRte.invoice_service =
        SSD_SERVICE_ID_sd_6D5Q5UozZdfajRte.invoice_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_6D5Q5UozZdfajRteInstance.sendInvoice(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_WosEMFEDL9ziDI7U(bh, parentSpanInst);
      //appendnew_next_sd_TJomGx6dg0g8mN7q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TJomGx6dg0g8mN7q',
        spanInst,
        'sd_TJomGx6dg0g8mN7q'
      );
    }
  }

  async sd_WosEMFEDL9ziDI7U(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send('ok');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WosEMFEDL9ziDI7U');
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
  //appendnew_flow_invoice_api_Catch
}
