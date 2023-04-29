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
export class getProductService {
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
    this.serviceName = 'getProductService';
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
      instance = new getProductService(
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
      //appendnew_flow_getProductService_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getProductService');

    //appendnew_flow_getProductService_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: getProductService');
    //appendnew_flow_getProductService_HttpIn
  }
  //   service flows_getProductService

  async sd_kX1EIAakgLLK9PSm(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_kX1EIAakgLLK9PSm',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_u1NrzFsiathSPEDQ(bh, parentSpanInst);
      //appendnew_next_sd_kX1EIAakgLLK9PSm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kX1EIAakgLLK9PSm',
        spanInst,
        'sd_kX1EIAakgLLK9PSm'
      );
    }
  }

  //appendnew_flow_getProductService_start

  async sd_u1NrzFsiathSPEDQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_u1NrzFsiathSPEDQ',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');

      if (ObjectId.isValid(bh.input.params.id)) {
        bh.local.isValid = true;
      } else {
        bh.local.isValid = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9xTt1NjIhTx09qr0(bh, parentSpanInst);
      //appendnew_next_sd_u1NrzFsiathSPEDQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u1NrzFsiathSPEDQ',
        spanInst,
        'sd_u1NrzFsiathSPEDQ'
      );
    }
  }

  async sd_9xTt1NjIhTx09qr0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9xTt1NjIhTx09qr0',
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
        bh = await this.sd_GM7M6xWlvUSTOJ4l(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_T1aPMMGxPxIBYU5g(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9xTt1NjIhTx09qr0',
        spanInst,
        'sd_9xTt1NjIhTx09qr0'
      );
    }
  }

  async sd_GM7M6xWlvUSTOJ4l(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GM7M6xWlvUSTOJ4l',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');

      bh.local.findQuery = { _id: ObjectId(bh.input.params.id) };
      bh.local.collection = 'product';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_4FG4nCshBCVoLU8I(bh, parentSpanInst);
      //appendnew_next_sd_GM7M6xWlvUSTOJ4l
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GM7M6xWlvUSTOJ4l',
        spanInst,
        'sd_GM7M6xWlvUSTOJ4l'
      );
    }
  }

  async sd_4FG4nCshBCVoLU8I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4FG4nCshBCVoLU8I',
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
      bh = await this.sd_A9GPF6MhDTfbezon(bh, parentSpanInst);
      //appendnew_next_sd_4FG4nCshBCVoLU8I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4FG4nCshBCVoLU8I',
        spanInst,
        'sd_4FG4nCshBCVoLU8I'
      );
    }
  }

  async sd_A9GPF6MhDTfbezon(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_A9GPF6MhDTfbezon',
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
        bh = await this.sd_9BviOtWUinIENQt7(bh, parentSpanInst);
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
        bh = await this.sd_4daO9lKJdpRovY0u(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_A9GPF6MhDTfbezon',
        spanInst,
        'sd_A9GPF6MhDTfbezon'
      );
    }
  }

  async sd_9BviOtWUinIENQt7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9BviOtWUinIENQt7',
      parentSpanInst
    );
    try {
      const product = bh.local.result[0];
      const imageData = {
        data: product.image[0].buffer.toString('base64'),
        contentType: product.image[0].mimetype,
      };

      const resp = {
        id: product._id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: imageData,
      };

      bh.local.response = {
        statusCode: 200,
        message: resp,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_9BviOtWUinIENQt7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9BviOtWUinIENQt7',
        spanInst,
        'sd_9BviOtWUinIENQt7'
      );
    }
  }

  async sd_4daO9lKJdpRovY0u(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4daO9lKJdpRovY0u',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'no result found',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_4daO9lKJdpRovY0u
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4daO9lKJdpRovY0u',
        spanInst,
        'sd_4daO9lKJdpRovY0u'
      );
    }
  }

  async sd_T1aPMMGxPxIBYU5g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T1aPMMGxPxIBYU5g',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'its not valid',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_T1aPMMGxPxIBYU5g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T1aPMMGxPxIBYU5g',
        spanInst,
        'sd_T1aPMMGxPxIBYU5g'
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
  //appendnew_flow_getProductService_Catch
}
