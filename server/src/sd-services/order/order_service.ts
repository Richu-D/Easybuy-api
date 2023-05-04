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
export class order_service {
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
    this.serviceName = 'order_service';
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
      instance = new order_service(
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
      //appendnew_flow_order_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: order_service');

    //appendnew_flow_order_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: order_service');
    //appendnew_flow_order_service_HttpIn
  }
  //   service flows_order_service

  async createOrder(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'createOrder',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DKydWL8w0LPjBsvB(bh, parentSpanInst);
      //appendnew_next_createOrder
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IpSVNkbTiDlHuR4b',
        spanInst,
        'createOrder'
      );
    }
  }

  //appendnew_flow_order_service_start

  async sd_DKydWL8w0LPjBsvB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DKydWL8w0LPjBsvB',
      parentSpanInst
    );
    try {
      bh.local.collection = 'orders';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JsdEMqwtxNcCaDId(bh, parentSpanInst);
      //appendnew_next_sd_DKydWL8w0LPjBsvB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DKydWL8w0LPjBsvB',
        spanInst,
        'sd_DKydWL8w0LPjBsvB'
      );
    }
  }

  async sd_JsdEMqwtxNcCaDId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JsdEMqwtxNcCaDId',
      parentSpanInst
    );
    try {
      console.log(bh.input.body, 'heyyyyy');
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      instance.paymentLink
        .create({
          amount: 500,
          currency: 'INR',
          accept_partial: true,
          first_min_partial_amount: 100,
          description: 'For XYZ purpose',
          customer: {
            contact: `+91${bh.input.body.userPhoneNumber}`,
          },
          notify: {
            sms: true,
            email: false,
            whatsapp: true,
          },
          reminder_enable: true,
          notes: {
            policy_name: 'Jeevan Bima',
          },
          callback_url: 'https://google.com',
          callback_method: 'get',
        })
        .then((response) => {
          console.log(response);
        });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B0d0DSpjmuevaSbL(bh, parentSpanInst);
      //appendnew_next_sd_JsdEMqwtxNcCaDId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JsdEMqwtxNcCaDId',
        spanInst,
        'sd_JsdEMqwtxNcCaDId'
      );
    }
  }

  async sd_B0d0DSpjmuevaSbL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B0d0DSpjmuevaSbL',
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
      bh = await this.sd_00YKSZmMcrTD2gfN(bh, parentSpanInst);
      //appendnew_next_sd_B0d0DSpjmuevaSbL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B0d0DSpjmuevaSbL',
        spanInst,
        'sd_B0d0DSpjmuevaSbL'
      );
    }
  }

  async sd_00YKSZmMcrTD2gfN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_00YKSZmMcrTD2gfN',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        body: 'order created successfully!',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_00YKSZmMcrTD2gfN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_00YKSZmMcrTD2gfN',
        spanInst,
        'sd_00YKSZmMcrTD2gfN'
      );
    }
  }

  async sd_XgDo6WDxCJiMBYCz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XgDo6WDxCJiMBYCz',
      parentSpanInst
    );
    try {
      bh.local.response = bh.error;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_XgDo6WDxCJiMBYCz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XgDo6WDxCJiMBYCz',
        spanInst,
        'sd_XgDo6WDxCJiMBYCz'
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
      false ||
      (await this.sd_mUkecRpT5ovyMta9(bh, parentSpanInst))
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
  async sd_mUkecRpT5ovyMta9(bh, parentSpanInst) {
    const nodes = ['sd_hPw3YDcFCVuCLedU'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_XgDo6WDxCJiMBYCz(bh, parentSpanInst);
      //appendnew_next_sd_mUkecRpT5ovyMta9
      return true;
    }
    return false;
  }
  //appendnew_flow_order_service_Catch
}
