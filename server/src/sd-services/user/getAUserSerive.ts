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
export class getAUserSerive {
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
    this.serviceName = 'getAUserSerive';
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
      instance = new getAUserSerive(
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
      //appendnew_flow_getAUserSerive_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getAUserSerive');

    //appendnew_flow_getAUserSerive_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: getAUserSerive');
    //appendnew_flow_getAUserSerive_HttpIn
  }
  //   service flows_getAUserSerive

  async sd_bvsaR8BV73PjDuSQ(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_bvsaR8BV73PjDuSQ',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_S1VNYIEuwrxoYYXO(bh, parentSpanInst);
      //appendnew_next_sd_bvsaR8BV73PjDuSQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bvsaR8BV73PjDuSQ',
        spanInst,
        'sd_bvsaR8BV73PjDuSQ'
      );
    }
  }

  //appendnew_flow_getAUserSerive_start

  async sd_S1VNYIEuwrxoYYXO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_S1VNYIEuwrxoYYXO',
      parentSpanInst
    );
    try {
      // const { ObjectId } = require('mongodb');

      // if (ObjectId.isValid(bh.input.params.id)) {
      //   bh.local.isValid = true
      // } else {
      //  bh.local.isValid = false
      // }
      const regex = /^\d{10}$/;

      if (regex.test(bh.input.params.phone + '')) {
        bh.local.isValid = true;
      } else {
        bh.local.isValid = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_R4SC8i9tzYfdynfl(bh, parentSpanInst);
      //appendnew_next_sd_S1VNYIEuwrxoYYXO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S1VNYIEuwrxoYYXO',
        spanInst,
        'sd_S1VNYIEuwrxoYYXO'
      );
    }
  }

  async sd_R4SC8i9tzYfdynfl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R4SC8i9tzYfdynfl',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_aPzKgNBQiHrwnRJK(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zMZuZd62enr2nVWe(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R4SC8i9tzYfdynfl',
        spanInst,
        'sd_R4SC8i9tzYfdynfl'
      );
    }
  }

  async sd_aPzKgNBQiHrwnRJK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aPzKgNBQiHrwnRJK',
      parentSpanInst
    );
    try {
      bh.local.findQuery = { mobile: bh.input.params.phone };
      bh.local.collection = 'customer';
      console.log(bh.local.findQuery);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YEmftyj2disragbz(bh, parentSpanInst);
      //appendnew_next_sd_aPzKgNBQiHrwnRJK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aPzKgNBQiHrwnRJK',
        spanInst,
        'sd_aPzKgNBQiHrwnRJK'
      );
    }
  }

  async sd_YEmftyj2disragbz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YEmftyj2disragbz',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_VKhZy0xYvcoOafEG',
        bh.local.collection,
        bh.local.findQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tmQ3McPP5b1TkVwC(bh, parentSpanInst);
      //appendnew_next_sd_YEmftyj2disragbz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YEmftyj2disragbz',
        spanInst,
        'sd_YEmftyj2disragbz'
      );
    }
  }

  async sd_tmQ3McPP5b1TkVwC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tmQ3McPP5b1TkVwC',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.result.length,
          '0',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qjYUfLSojRTBK3vm(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qHY51TFSYSHelsKp(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tmQ3McPP5b1TkVwC',
        spanInst,
        'sd_tmQ3McPP5b1TkVwC'
      );
    }
  }

  async sd_qjYUfLSojRTBK3vm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qjYUfLSojRTBK3vm',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qjYUfLSojRTBK3vm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qjYUfLSojRTBK3vm',
        spanInst,
        'sd_qjYUfLSojRTBK3vm'
      );
    }
  }

  async sd_qHY51TFSYSHelsKp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qHY51TFSYSHelsKp',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'no result found',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_qHY51TFSYSHelsKp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qHY51TFSYSHelsKp',
        spanInst,
        'sd_qHY51TFSYSHelsKp'
      );
    }
  }

  async sd_zMZuZd62enr2nVWe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zMZuZd62enr2nVWe',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'number is  not valid',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_zMZuZd62enr2nVWe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zMZuZd62enr2nVWe',
        spanInst,
        'sd_zMZuZd62enr2nVWe'
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
  //appendnew_flow_getAUserSerive_Catch
}
