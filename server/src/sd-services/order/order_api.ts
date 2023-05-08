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
import * as SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAd from './order_service'; //_splitter_
//append_imports_end
export class order_api {
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
    this.serviceName = 'order_api';
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
      instance = new order_api(
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
      //appendnew_flow_order_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: order_api');

    //appendnew_flow_order_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: order_api');

    this.app['post'](
      `${this.serviceBasePath}/order`,
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
          bh = await this.sd_zkmPbbknk57IC1ae(bh, parentSpanInst);
          //appendnew_next_sd_qnSOdNo9li3Rgm8u
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qnSOdNo9li3Rgm8u');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/place-order`,
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
          bh = await this.sd_7iS8m9xJ3Eh8vsbC(bh, parentSpanInst);
          //appendnew_next_sd_B8gDTWePkBAkl7Ml
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_B8gDTWePkBAkl7Ml');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_order_api_HttpIn
  }
  //   service flows_order_api

  //appendnew_flow_order_api_start

  async sd_zkmPbbknk57IC1ae(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zkmPbbknk57IC1ae',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAdInstance: SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAd.order_service =
        SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAd.order_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAdInstance.createOrder(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_lDyCpZqwUIxiTOHl(bh, parentSpanInst);
      //appendnew_next_sd_zkmPbbknk57IC1ae
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zkmPbbknk57IC1ae',
        spanInst,
        'sd_zkmPbbknk57IC1ae'
      );
    }
  }

  async sd_lDyCpZqwUIxiTOHl(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lDyCpZqwUIxiTOHl');
    }
  }

  async sd_7iS8m9xJ3Eh8vsbC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7iS8m9xJ3Eh8vsbC',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAdInstance: SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAd.order_service =
        SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAd.order_service.getInstance();
      bh = await SSD_SERVICE_ID_sd_hU73HCE9PDt8KaAdInstance.createPlaceOrder(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_pnMYmeqPtoLSHlFh(bh, parentSpanInst);
      //appendnew_next_sd_7iS8m9xJ3Eh8vsbC
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7iS8m9xJ3Eh8vsbC',
        spanInst,
        'sd_7iS8m9xJ3Eh8vsbC'
      );
    }
  }

  async sd_pnMYmeqPtoLSHlFh(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pnMYmeqPtoLSHlFh');
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
  //appendnew_flow_order_api_Catch
}
