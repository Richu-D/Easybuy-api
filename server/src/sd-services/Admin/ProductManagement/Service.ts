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
      bh = await this.sd_ex9FrSgL412ZGsJp(bh, parentSpanInst);
      //appendnew_next_validate
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BFZRsHqeZH7OFlty',
        spanInst,
        'validate'
      );
    }
  }

  async sd_ex9FrSgL412ZGsJp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ex9FrSgL412ZGsJp',
      parentSpanInst
    );
    try {
      bh.local.isValid = true;
      if (!bh.input.body.name) {
        bh.local.isValid = false;
        bh.local.message = 'empty field name';
      } else if (!bh.input.body.gram) {
        bh.local.isValid = false;
        bh.local.message = 'empty field price';
      } else if (!bh.input.body.description) {
        bh.local.isValid = false;
        bh.local.message = 'empty field description';
      } else if (!bh.input.body.category) {
        bh.local.isValid = false;
        bh.local.message = 'empty field category';
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hei03P4cMV3qCZ6O(bh, parentSpanInst);
      //appendnew_next_sd_ex9FrSgL412ZGsJp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ex9FrSgL412ZGsJp',
        spanInst,
        'sd_ex9FrSgL412ZGsJp'
      );
    }
  }

  async sd_hei03P4cMV3qCZ6O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hei03P4cMV3qCZ6O',
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
        bh = await this.sd_5I9xGGU9SGpmrTZe(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_MOnTfoRh6qSeEHKm(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hei03P4cMV3qCZ6O',
        spanInst,
        'sd_hei03P4cMV3qCZ6O'
      );
    }
  }

  async sd_5I9xGGU9SGpmrTZe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5I9xGGU9SGpmrTZe',
      parentSpanInst
    );
    try {
      const axios = require('axios');

      bh.local.findQuery = { name: bh.input.body.name };
      const key = bh.input.body.category;
      bh.local.collection = 'product';
      bh.input.body.image = bh.input.files.image;
      const api = 'https://api.exchangerate-api.com/v4/latest/USD';
      const metalpriceapi = 'https://api.metals.live/v1/spot';

      let metalprice = await axios.get(metalpriceapi);

      let currency = await axios.get(api);

      const result = metalprice.data.find((obj) => obj.hasOwnProperty(key));
      const price = result[key];
      let fromRate = currency.data.rates.USD;
      let toRate = currency.data.rates.INR;
      let convertedPrice = ((toRate / fromRate) * price).toFixed(2) / 31.1035;
      bh.input.body.price = convertedPrice * bh.input.body.gram;

      console.log(bh.input.body);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.addProduct(bh, parentSpanInst);
      //appendnew_next_sd_5I9xGGU9SGpmrTZe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5I9xGGU9SGpmrTZe',
        spanInst,
        'sd_5I9xGGU9SGpmrTZe'
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
      bh = await this.sd_L8uhEDl0U0BE4hEM(bh, parentSpanInst);
      //appendnew_next_addProduct
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RJPTDGnIHPRWCi5q',
        spanInst,
        'addProduct'
      );
    }
  }

  async sd_L8uhEDl0U0BE4hEM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L8uhEDl0U0BE4hEM',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_L8uhEDl0U0BE4hEM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L8uhEDl0U0BE4hEM',
        spanInst,
        'sd_L8uhEDl0U0BE4hEM'
      );
    }
  }

  async sd_MOnTfoRh6qSeEHKm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MOnTfoRh6qSeEHKm',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.local.message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_MOnTfoRh6qSeEHKm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MOnTfoRh6qSeEHKm',
        spanInst,
        'sd_MOnTfoRh6qSeEHKm'
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
        'sd_8J43VVks7D0SoDWg',
        spanInst,
        'barCodeScript'
      );
    }
  }

  async sd_ZxJNmLiMde9QkcH7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZxJNmLiMde9QkcH7',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.error.error[0].message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZxJNmLiMde9QkcH7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZxJNmLiMde9QkcH7',
        spanInst,
        'sd_ZxJNmLiMde9QkcH7'
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
    const nodes = ['sd_BFZRsHqeZH7OFlty'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ZxJNmLiMde9QkcH7(bh, parentSpanInst);
      //appendnew_next_errorHandlingForValidateNode
      return true;
    }
    return false;
  }
  //appendnew_flow_Service_Catch
}
