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
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class service {
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
    this.serviceName = 'service';
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
      instance = new service(
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
      //appendnew_flow_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: service');

    //appendnew_flow_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: service');
    //appendnew_flow_service_HttpIn
  }
  //   service flows_service

  async addCouponService(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'addCouponService',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_plvIz0vn2Ik0QC8S(bh, parentSpanInst);
      //appendnew_next_addCouponService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Klde6g00qH7GYvww',
        spanInst,
        'addCouponService'
      );
    }
  }

  //appendnew_flow_service_start

  async sd_plvIz0vn2Ik0QC8S(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_plvIz0vn2Ik0QC8S',
      parentSpanInst
    );
    try {
      console.log(bh.input.body);
      bh.local.collection = 'coupon';
      bh.local.findCoupon = { couponcode: bh.input.body.couponcode };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MTupO75GxHlJmqyD(bh, parentSpanInst);
      //appendnew_next_sd_plvIz0vn2Ik0QC8S
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_plvIz0vn2Ik0QC8S',
        spanInst,
        'sd_plvIz0vn2Ik0QC8S'
      );
    }
  }

  async sd_MTupO75GxHlJmqyD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MTupO75GxHlJmqyD',
      parentSpanInst
    );
    try {
      bh.local.coupons = await MongoPersistance.getInstance().find(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.collection,
        bh.local.findCoupon,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AHkuRacUiBgYpkN9(bh, parentSpanInst);
      //appendnew_next_sd_MTupO75GxHlJmqyD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MTupO75GxHlJmqyD',
        spanInst,
        'sd_MTupO75GxHlJmqyD'
      );
    }
  }

  async sd_AHkuRacUiBgYpkN9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AHkuRacUiBgYpkN9',
      parentSpanInst
    );
    try {
      if (bh.local.coupons.length === 0) {
        bh.local.isCoupon = false;
        bh.local.isCouponCode = 200;
        bh.local.isCouponMsg = 'coupon added successfully';
      } else {
        bh.local.isCoupon = true;
        bh.local.isCouponCode = 404;
        bh.local.isCouponMsg = 'coupon already added';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ckbp48t8pNtvDSWw(bh, parentSpanInst);
      //appendnew_next_sd_AHkuRacUiBgYpkN9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AHkuRacUiBgYpkN9',
        spanInst,
        'sd_AHkuRacUiBgYpkN9'
      );
    }
  }

  async sd_Ckbp48t8pNtvDSWw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ckbp48t8pNtvDSWw',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
      } else if (
        this.sdService.operators['false'](
          bh.local.isCoupon,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_srmxlBZGEpdLhQ47(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ckbp48t8pNtvDSWw',
        spanInst,
        'sd_Ckbp48t8pNtvDSWw'
      );
    }
  }

  async sd_srmxlBZGEpdLhQ47(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_srmxlBZGEpdLhQ47',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.collection,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_srmxlBZGEpdLhQ47
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_srmxlBZGEpdLhQ47',
        spanInst,
        'sd_srmxlBZGEpdLhQ47'
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
  //appendnew_flow_service_Catch
}
