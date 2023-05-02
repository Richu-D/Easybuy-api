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
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class RegisterUserService {
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
    this.serviceName = 'RegisterUserService';
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
      instance = new RegisterUserService(
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
      //appendnew_flow_RegisterUserService_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: RegisterUserService');

    //appendnew_flow_RegisterUserService_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: RegisterUserService');
    //appendnew_flow_RegisterUserService_HttpIn
  }
  //   service flows_RegisterUserService

  async sd_IstEWMWXk9ViSga1(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_IstEWMWXk9ViSga1',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9Yh36tWoUB8ITOil(bh, parentSpanInst);
      //appendnew_next_sd_IstEWMWXk9ViSga1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IstEWMWXk9ViSga1',
        spanInst,
        'sd_IstEWMWXk9ViSga1'
      );
    }
  }

  //appendnew_flow_RegisterUserService_start

  async sd_9Yh36tWoUB8ITOil(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9Yh36tWoUB8ITOil',
      parentSpanInst
    );
    try {
      validateNode('_EN_jwyo47vmky', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Wxt8zrEKsOB6RQ6K(bh, parentSpanInst);
      //appendnew_next_sd_9Yh36tWoUB8ITOil
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9Yh36tWoUB8ITOil',
        spanInst,
        'sd_9Yh36tWoUB8ITOil'
      );
    }
  }

  async sd_Wxt8zrEKsOB6RQ6K(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Wxt8zrEKsOB6RQ6K',
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

      if (regex.test(bh.input.body.mobile)) {
        bh.local.isValid = true;
      } else {
        bh.local.isValid = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_repNBr8i52epiVGz(bh, parentSpanInst);
      //appendnew_next_sd_Wxt8zrEKsOB6RQ6K
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Wxt8zrEKsOB6RQ6K',
        spanInst,
        'sd_Wxt8zrEKsOB6RQ6K'
      );
    }
  }

  async sd_repNBr8i52epiVGz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_repNBr8i52epiVGz',
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
        bh = await this.sd_Rcx8gBIQOuhAmCyH(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ToH0zI0QElzDFuBy(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_repNBr8i52epiVGz',
        spanInst,
        'sd_repNBr8i52epiVGz'
      );
    }
  }

  async sd_Rcx8gBIQOuhAmCyH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Rcx8gBIQOuhAmCyH',
      parentSpanInst
    );
    try {
      bh.local.isValid = true;
      if (!bh.input.body.name) {
        bh.local.isValid = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JRlQIIm3zByRK36u(bh, parentSpanInst);
      //appendnew_next_sd_Rcx8gBIQOuhAmCyH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Rcx8gBIQOuhAmCyH',
        spanInst,
        'sd_Rcx8gBIQOuhAmCyH'
      );
    }
  }

  async sd_JRlQIIm3zByRK36u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JRlQIIm3zByRK36u',
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
        bh = await this.sd_wmS59vJEsS56cAPS(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ie3csF8a5z0Eittw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JRlQIIm3zByRK36u',
        spanInst,
        'sd_JRlQIIm3zByRK36u'
      );
    }
  }

  async sd_wmS59vJEsS56cAPS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wmS59vJEsS56cAPS',
      parentSpanInst
    );
    try {
      bh.local.findQuery = { mobile: bh.input.body.mobile };
      bh.local.collection = 'customer';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QXXJDEQmhDbrZ0K0(bh, parentSpanInst);
      //appendnew_next_sd_wmS59vJEsS56cAPS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wmS59vJEsS56cAPS',
        spanInst,
        'sd_wmS59vJEsS56cAPS'
      );
    }
  }

  async sd_QXXJDEQmhDbrZ0K0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QXXJDEQmhDbrZ0K0',
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
      bh = await this.sd_y0DGqY4gUzUmzIrW(bh, parentSpanInst);
      //appendnew_next_sd_QXXJDEQmhDbrZ0K0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QXXJDEQmhDbrZ0K0',
        spanInst,
        'sd_QXXJDEQmhDbrZ0K0'
      );
    }
  }

  async sd_y0DGqY4gUzUmzIrW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y0DGqY4gUzUmzIrW',
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
        bh = await this.sd_z3mJBGkJjChvebBY(bh, parentSpanInst);
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
        bh = await this.sd_EoH7RrKGTugPqlFv(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y0DGqY4gUzUmzIrW',
        spanInst,
        'sd_y0DGqY4gUzUmzIrW'
      );
    }
  }

  async sd_z3mJBGkJjChvebBY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z3mJBGkJjChvebBY',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'user already with name' + bh.local.result[0].name + 'exists',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_z3mJBGkJjChvebBY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z3mJBGkJjChvebBY',
        spanInst,
        'sd_z3mJBGkJjChvebBY'
      );
    }
  }

  async sd_EoH7RrKGTugPqlFv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EoH7RrKGTugPqlFv',
      parentSpanInst
    );
    try {
      bh.local.collection = 'customer';
      bh.input.body.useCoupons = [];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.addCustomer(bh, parentSpanInst);
      //appendnew_next_sd_EoH7RrKGTugPqlFv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EoH7RrKGTugPqlFv',
        spanInst,
        'sd_EoH7RrKGTugPqlFv'
      );
    }
  }

  async addCustomer(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addCustomer',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_VKhZy0xYvcoOafEG',
        bh.local.collection,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gbeVKyCLb09UtHOS(bh, parentSpanInst);
      //appendnew_next_addCustomer
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FniLbKfPea7eguQ5',
        spanInst,
        'addCustomer'
      );
    }
  }

  async sd_gbeVKyCLb09UtHOS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gbeVKyCLb09UtHOS',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_gbeVKyCLb09UtHOS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gbeVKyCLb09UtHOS',
        spanInst,
        'sd_gbeVKyCLb09UtHOS'
      );
    }
  }

  async sd_ie3csF8a5z0Eittw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ie3csF8a5z0Eittw',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'must need name field',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ie3csF8a5z0Eittw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ie3csF8a5z0Eittw',
        spanInst,
        'sd_ie3csF8a5z0Eittw'
      );
    }
  }

  async sd_ToH0zI0QElzDFuBy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ToH0zI0QElzDFuBy',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'number is  not valid',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ToH0zI0QElzDFuBy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ToH0zI0QElzDFuBy',
        spanInst,
        'sd_ToH0zI0QElzDFuBy'
      );
    }
  }

  async sd_wLulqJZAYO1XIHPi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wLulqJZAYO1XIHPi',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.error.error[0].message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_wLulqJZAYO1XIHPi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wLulqJZAYO1XIHPi',
        spanInst,
        'sd_wLulqJZAYO1XIHPi'
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
      (await this.errorHandlingForValidateNode(bh, parentSpanInst))
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
  async errorHandlingForValidateNode(bh, parentSpanInst) {
    const nodes = ['sd_9Yh36tWoUB8ITOil'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_wLulqJZAYO1XIHPi(bh, parentSpanInst);
      //appendnew_next_errorHandlingForValidateNode
      return true;
    }
    return false;
  }
  //appendnew_flow_RegisterUserService_Catch
}
