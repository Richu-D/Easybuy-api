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
import { SDBaseService } from '../../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../../middleware/Middleware'; //_splitter_
import * as settings from '../../../config/config'; //_splitter_
import log from '../../../utils/Logger'; //_splitter_
import { TracerService } from '../../../services/TracerService'; //_splitter_
import * as SSD_SERVICE_ID_sd_yfSJ4R2RTExGsqjD from './Service'; //_splitter_
//append_imports_end
export class AddProduct {
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
    this.serviceName = 'AddProduct';
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
      instance = new AddProduct(
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
      //appendnew_flow_AddProduct_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: AddProduct');

    //appendnew_flow_AddProduct_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: AddProduct');

    this.app['post'](
      `${this.serviceBasePath}/product`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'sequence_2660262600',
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'memory',
        options: [{ name: 'image', maxCount: 1 }],
      }),

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
          bh = await this.sd_KZ0ObT9g7hEkCf6z(bh, parentSpanInst);
          //appendnew_next_sd_dffJFSTkn5SOtGcz
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dffJFSTkn5SOtGcz');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'sequence_2660262600',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_AddProduct_HttpIn
  }
  //   service flows_AddProduct

  //appendnew_flow_AddProduct_start

  async sd_KZ0ObT9g7hEkCf6z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KZ0ObT9g7hEkCf6z',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_yfSJ4R2RTExGsqjDInstance: SSD_SERVICE_ID_sd_yfSJ4R2RTExGsqjD.Service =
        SSD_SERVICE_ID_sd_yfSJ4R2RTExGsqjD.Service.getInstance();
      bh = await SSD_SERVICE_ID_sd_yfSJ4R2RTExGsqjDInstance.addProductService(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_jjg6zfSyEER8mA4U(bh, parentSpanInst);
      //appendnew_next_sd_KZ0ObT9g7hEkCf6z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KZ0ObT9g7hEkCf6z',
        spanInst,
        'sd_KZ0ObT9g7hEkCf6z'
      );
    }
  }

  async sd_jjg6zfSyEER8mA4U(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        "'Content-Type'": "'image/png'",
        "'Content-Length'": 'bh.local.png.length',
      });

      bh.web.res
        .status(bh.local.response.statusCode)
        .send(bh.local.response.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jjg6zfSyEER8mA4U');
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
  //appendnew_flow_AddProduct_Catch
}
