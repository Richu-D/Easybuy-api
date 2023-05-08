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
export class customerList_service {
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
    this.serviceName = 'customerList_service';
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
      instance = new customerList_service(
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
      //appendnew_flow_customerList_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: customerList_service');

    //appendnew_flow_customerList_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: customerList_service');
    //appendnew_flow_customerList_service_HttpIn
  }
  //   service flows_customerList_service

  async cutomerListService(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'cutomerListService',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2aSel4ihaOfnoenA(bh, parentSpanInst);
      //appendnew_next_cutomerListService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tOAKy4hUcy2nkaWw',
        spanInst,
        'cutomerListService'
      );
    }
  }

  //appendnew_flow_customerList_service_start

  async sd_2aSel4ihaOfnoenA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2aSel4ihaOfnoenA',
      parentSpanInst
    );
    try {
      bh.local.collection = 'orders';
      // bh.local.query = {empId: bh.local.employee.data.employeeid};

      bh.local.aggregate = [
        {
          $match: { empId: bh.input.params.empId },
        },
        {
          $project: {
            product: {
              $arrayElemAt: ['$product', 0],
            },
            customerNumber: 1,
            totalAmount: 1,
            paymentStatus: 1,
            paymentid: 1,
          },
        },
        {
          $lookup: {
            from: 'product',
            localField: 'product.productid',
            foreignField: '_id',
            as: 'productDetails',
          },
        },
        {
          $project: {
            customerNumber: 1,
            totalAmount: 1,
            paymentStatus: 1,
            paymentid: 1,
            productDetails: {
              $arrayElemAt: ['$productDetails', 0],
            },
          },
        },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kjF3CBejwgttWfnB(bh, parentSpanInst);
      //appendnew_next_sd_2aSel4ihaOfnoenA
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2aSel4ihaOfnoenA',
        spanInst,
        'sd_2aSel4ihaOfnoenA'
      );
    }
  }

  async sd_kjF3CBejwgttWfnB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kjF3CBejwgttWfnB',
      parentSpanInst
    );
    try {
      bh.local.aggResult = await MongoPersistance.getInstance().aggregate(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.collection,
        bh.local.aggregate,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2Sr5lwEip8ST9Ckg(bh, parentSpanInst);
      //appendnew_next_sd_kjF3CBejwgttWfnB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kjF3CBejwgttWfnB',
        spanInst,
        'sd_kjF3CBejwgttWfnB'
      );
    }
  }

  async sd_2Sr5lwEip8ST9Ckg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2Sr5lwEip8ST9Ckg',
      parentSpanInst
    );
    try {
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      for (let i = 0; i < bh.local.aggResult.length; i++) {
        let result = await instance.paymentLink.fetch(
          bh.local.aggResult[i].paymentid
        );
        bh.local.aggResult[i].payment = result;
        // .payment
        // bh.local.aggResult[i].productDetails = null
      }

      bh.local.out = bh.local.aggResult;

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_2Sr5lwEip8ST9Ckg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2Sr5lwEip8ST9Ckg',
        spanInst,
        'sd_2Sr5lwEip8ST9Ckg'
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
  //appendnew_flow_customerList_service_Catch
}
