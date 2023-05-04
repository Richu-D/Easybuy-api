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
export class getAProduct_service {
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
    this.serviceName = 'getAProduct_service';
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
      instance = new getAProduct_service(
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
      //appendnew_flow_getAProduct_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getAProduct_service');

    //appendnew_flow_getAProduct_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: getAProduct_service');
    //appendnew_flow_getAProduct_service_HttpIn
  }
  //   service flows_getAProduct_service

  async sd_t1YbYlQHl9Sl0mn5(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_t1YbYlQHl9Sl0mn5',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VpXJMowTVWH9oAus(bh, parentSpanInst);
      //appendnew_next_sd_t1YbYlQHl9Sl0mn5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t1YbYlQHl9Sl0mn5',
        spanInst,
        'sd_t1YbYlQHl9Sl0mn5'
      );
    }
  }

  //appendnew_flow_getAProduct_service_start

  async sd_VpXJMowTVWH9oAus(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VpXJMowTVWH9oAus',
      parentSpanInst
    );
    try {
      bh.local.findQuery = { _id: bh.input.params.id };
      console.log(bh.input.params);
      bh.local.collection = 'product';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_R8LeAZ9gbFB58gFH(bh, parentSpanInst);
      //appendnew_next_sd_VpXJMowTVWH9oAus
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VpXJMowTVWH9oAus',
        spanInst,
        'sd_VpXJMowTVWH9oAus'
      );
    }
  }

  async sd_R8LeAZ9gbFB58gFH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R8LeAZ9gbFB58gFH',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.collection,
        bh.local.findQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JdBKjOPF1kKKNlds(bh, parentSpanInst);
      //appendnew_next_sd_R8LeAZ9gbFB58gFH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R8LeAZ9gbFB58gFH',
        spanInst,
        'sd_R8LeAZ9gbFB58gFH'
      );
    }
  }

  async sd_JdBKjOPF1kKKNlds(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JdBKjOPF1kKKNlds',
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
        bh = await this.sd_ofD4dHIVyaDDqQAY(bh, parentSpanInst);
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
        bh = await this.sd_cBp9L1sldiJzirWh(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JdBKjOPF1kKKNlds',
        spanInst,
        'sd_JdBKjOPF1kKKNlds'
      );
    }
  }

  async sd_ofD4dHIVyaDDqQAY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ofD4dHIVyaDDqQAY',
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
        weight: product.gram,
        category: product.category,
      };

      bh.local.response = {
        statusCode: 200,
        result: resp,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ofD4dHIVyaDDqQAY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ofD4dHIVyaDDqQAY',
        spanInst,
        'sd_ofD4dHIVyaDDqQAY'
      );
    }
  }

  async sd_cBp9L1sldiJzirWh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cBp9L1sldiJzirWh',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'no result found',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_cBp9L1sldiJzirWh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cBp9L1sldiJzirWh',
        spanInst,
        'sd_cBp9L1sldiJzirWh'
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
  //appendnew_flow_getAProduct_service_Catch
}
