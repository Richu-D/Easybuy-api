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
import { validateNode } from '../../utils/ndefault-datamodel/find/validateUtil'; //_splitter_
import * as SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomF from './service'; //_splitter_
//append_imports_end
export class api {
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
    this.serviceName = 'api';
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
      instance = new api(
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
      //appendnew_flow_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: api');

    //appendnew_flow_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: api');

    this.app['post'](
      `${this.serviceBasePath}/admin/coupon`,
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
          bh = await this.sd_lkToXN55d62jcQSV(bh, parentSpanInst);
          //appendnew_next_sd_7DCGiYiRjpFOPMSo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7DCGiYiRjpFOPMSo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-coupon/:couponcode`,
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
          bh = await this.sd_MwWWrR8nyPJcmZSj(bh, parentSpanInst);
          //appendnew_next_sd_qaUHLndtgXtStQQK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qaUHLndtgXtStQQK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_api_HttpIn
  }
  //   service flows_api

  //appendnew_flow_api_start

  async sd_lkToXN55d62jcQSV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lkToXN55d62jcQSV',
      parentSpanInst
    );
    try {
      validateNode('_EN_o1v7os5w7s', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2EHljA1h21anfASk(bh, parentSpanInst);
      //appendnew_next_sd_lkToXN55d62jcQSV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lkToXN55d62jcQSV',
        spanInst,
        'sd_lkToXN55d62jcQSV'
      );
    }
  }

  async sd_2EHljA1h21anfASk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2EHljA1h21anfASk',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomFInstance: SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomF.service =
        SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomF.service.getInstance();
      bh = await SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomFInstance.addCouponService(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XSSlV4H9wJ9BLXyA(bh, parentSpanInst);
      //appendnew_next_sd_2EHljA1h21anfASk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2EHljA1h21anfASk',
        spanInst,
        'sd_2EHljA1h21anfASk'
      );
    }
  }

  async sd_XSSlV4H9wJ9BLXyA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XSSlV4H9wJ9BLXyA',
      parentSpanInst
    );
    try {
      console.log('hiiiii');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_tMbBmJO4QaWMh6BI(bh, parentSpanInst);
      //appendnew_next_sd_XSSlV4H9wJ9BLXyA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XSSlV4H9wJ9BLXyA',
        spanInst,
        'sd_XSSlV4H9wJ9BLXyA'
      );
    }
  }

  async sd_tMbBmJO4QaWMh6BI(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.isCouponCode).send(bh.local.isCouponMsg);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tMbBmJO4QaWMh6BI');
    }
  }

  async sd_I8koTTun8xQ5pQbD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_I8koTTun8xQ5pQbD',
      parentSpanInst
    );
    try {
      let instancePath = bh.error.error[0].instancePath.split('');
      let spliced = instancePath.splice(1, instancePath.length);
      let str = spliced.join('');
      bh.local.errMsg = str + ' ' + bh.error.error[0].message;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_KzMJIJmzYSfA8y2Q(bh, parentSpanInst);
      //appendnew_next_sd_I8koTTun8xQ5pQbD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_I8koTTun8xQ5pQbD',
        spanInst,
        'sd_I8koTTun8xQ5pQbD'
      );
    }
  }

  async sd_KzMJIJmzYSfA8y2Q(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.local.errMsg);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KzMJIJmzYSfA8y2Q');
    }
  }

  async sd_MwWWrR8nyPJcmZSj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MwWWrR8nyPJcmZSj',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomFInstance: SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomF.service =
        SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomF.service.getInstance();
      bh = await SSD_SERVICE_ID_sd_hPcHtfWB2Wb8YomFInstance.getCouponService(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      await this.sd_qImlhKm6xflrRiyO(bh, parentSpanInst);
      //appendnew_next_sd_MwWWrR8nyPJcmZSj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MwWWrR8nyPJcmZSj',
        spanInst,
        'sd_MwWWrR8nyPJcmZSj'
      );
    }
  }

  async sd_qImlhKm6xflrRiyO(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qImlhKm6xflrRiyO');
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
      false ||
      (await this.sd_2fzYfOFLV3ugEX0o(bh, parentSpanInst))
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
  async sd_2fzYfOFLV3ugEX0o(bh, parentSpanInst) {
    const nodes = ['sd_lkToXN55d62jcQSV'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_I8koTTun8xQ5pQbD(bh, parentSpanInst);
      //appendnew_next_sd_2fzYfOFLV3ugEX0o
      return true;
    }
    return false;
  }
  //appendnew_flow_api_Catch
}
