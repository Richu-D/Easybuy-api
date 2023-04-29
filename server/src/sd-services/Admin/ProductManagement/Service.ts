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
import { validateNode } from '../../../utils/ndefault-datamodel/find/validateUtil'; //_splitter_
import { MongoPersistance } from '../../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class Service {
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
    this.serviceName = 'Service';
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
      instance = new Service(
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
      //appendnew_flow_Service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Service');

    //appendnew_flow_Service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Service');
    //appendnew_flow_Service_HttpIn
  }
  //   service flows_Service

  async addProductService(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'addProductService',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Vs4oMMd7deQTLA9E(bh, parentSpanInst);
      //appendnew_next_addProductService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4OcMfGQynfBUHMXz',
        spanInst,
        'addProductService'
      );
    }
  }

  //appendnew_flow_Service_start

  async sd_Vs4oMMd7deQTLA9E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vs4oMMd7deQTLA9E',
      parentSpanInst
    );
    try {
      console.log(bh.input.files.image);
      bh.local.isImage = bh.input.files.image;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nwfOwnEq2QVpFKmx(bh, parentSpanInst);
      //appendnew_next_sd_Vs4oMMd7deQTLA9E
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vs4oMMd7deQTLA9E',
        spanInst,
        'sd_Vs4oMMd7deQTLA9E'
      );
    }
  }

  async sd_nwfOwnEq2QVpFKmx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nwfOwnEq2QVpFKmx',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nnull'](
          bh.local.isImage,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.validate(bh, parentSpanInst);
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
        bh = await this.sd_YfZMTgymTlIXfoOL(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nwfOwnEq2QVpFKmx',
        spanInst,
        'sd_nwfOwnEq2QVpFKmx'
      );
    }
  }

  async sd_YfZMTgymTlIXfoOL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YfZMTgymTlIXfoOL',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'must need image',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_YfZMTgymTlIXfoOL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YfZMTgymTlIXfoOL',
        spanInst,
        'sd_YfZMTgymTlIXfoOL'
      );
    }
  }

  async validate(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('validate', parentSpanInst);
    try {
      validateNode('_EN_o1grd7mckn', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7nNM2uxMLSdaXvBU(bh, parentSpanInst);
      //appendnew_next_validate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QYgfUBbT7g2AKl0p',
        spanInst,
        'validate'
      );
    }
  }

  async sd_7nNM2uxMLSdaXvBU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7nNM2uxMLSdaXvBU',
      parentSpanInst
    );
    try {
      bh.local.findQuery = { name: bh.input.body.name };
      bh.local.collection = 'product';
      bh.input.body.image = bh.input.files.image;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.findingTheSimilar(bh, parentSpanInst);
      //appendnew_next_sd_7nNM2uxMLSdaXvBU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7nNM2uxMLSdaXvBU',
        spanInst,
        'sd_7nNM2uxMLSdaXvBU'
      );
    }
  }

  async findingTheSimilar(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'findingTheSimilar',
      parentSpanInst
    );
    try {
      bh.local.duplicate = await MongoPersistance.getInstance().find(
        'sd_VKhZy0xYvcoOafEG',
        bh.local.collection,
        bh.local.findQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HZlEbbU330jxFzaX(bh, parentSpanInst);
      //appendnew_next_findingTheSimilar
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ss5b8vjNW6DQ6sZR',
        spanInst,
        'findingTheSimilar'
      );
    }
  }

  async sd_HZlEbbU330jxFzaX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HZlEbbU330jxFzaX',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['eq'](
          bh.local.duplicate.length,
          '0',
          undefined,
          undefined
        )
      ) {
        bh = await this.addProduct(bh, parentSpanInst);
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
        bh = await this.sd_FpSK2LpYZAaG8ZIc(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HZlEbbU330jxFzaX',
        spanInst,
        'sd_HZlEbbU330jxFzaX'
      );
    }
  }

  async addProduct(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'addProduct',
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
      bh = await this.barcode(bh, parentSpanInst);
      //appendnew_next_addProduct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RmeIALuASG6pVABr',
        spanInst,
        'addProduct'
      );
    }
  }

  async barcode(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('barcode', parentSpanInst);
    try {
      const qrcode = require('qrcode');
      bh.local.uniqueId = bh.local.result.insertedId.toString();

      function generateQRCode(data) {
        return new Promise((resolve, reject) => {
          qrcode.toBuffer(data, (err, png) => {
            if (err) {
              reject(err);
            } else {
              resolve(png);
            }
          });
        });
      }

      bh.local.png = await generateQRCode(bh.local.uniqueId);

      bh.local.response = {
        statusCode: 200,
        message: bh.local.png,
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_barcode
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_37pGKZXuaVat8POv',
        spanInst,
        'barcode'
      );
    }
  }

  async sd_FpSK2LpYZAaG8ZIc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FpSK2LpYZAaG8ZIc',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: {
          data: 'its already added..',
        },
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_FpSK2LpYZAaG8ZIc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FpSK2LpYZAaG8ZIc',
        spanInst,
        'sd_FpSK2LpYZAaG8ZIc'
      );
    }
  }

  async barCodeScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'barCodeScript',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: { success: false, message: 'Error generating QR code' },
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_barCodeScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LXcEgNGJsIkUvixl',
        spanInst,
        'barCodeScript'
      );
    }
  }

  async sd_jwp9fzjhQUp6BFO8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jwp9fzjhQUp6BFO8',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.error.error[0].message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_jwp9fzjhQUp6BFO8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jwp9fzjhQUp6BFO8',
        spanInst,
        'sd_jwp9fzjhQUp6BFO8'
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
      (await this.barCodeErrorHandling(bh, parentSpanInst)) ||
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
  async barCodeErrorHandling(bh, parentSpanInst) {
    const nodes = ['sd_37pGKZXuaVat8POv'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.barCodeScript(bh, parentSpanInst);
      //appendnew_next_barCodeErrorHandling
      return true;
    }
    return false;
  }
  async errorHandlingForValidateNode(bh, parentSpanInst) {
    const nodes = ['sd_QYgfUBbT7g2AKl0p'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_jwp9fzjhQUp6BFO8(bh, parentSpanInst);
      //appendnew_next_errorHandlingForValidateNode
      return true;
    }
    return false;
  }
  //appendnew_flow_Service_Catch
}
