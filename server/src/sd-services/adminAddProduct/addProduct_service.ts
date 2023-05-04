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
export class addProduct_service {
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
    this.serviceName = 'addProduct_service';
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
      instance = new addProduct_service(
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
      //appendnew_flow_addProduct_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: addProduct_service');

    //appendnew_flow_addProduct_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: addProduct_service');
    //appendnew_flow_addProduct_service_HttpIn
  }
  //   service flows_addProduct_service

  async sd_C4K7yVlBWTkyDi0x(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_C4K7yVlBWTkyDi0x',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2VlY1gvnXtHOebBw(bh, parentSpanInst);
      //appendnew_next_sd_C4K7yVlBWTkyDi0x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_C4K7yVlBWTkyDi0x',
        spanInst,
        'sd_C4K7yVlBWTkyDi0x'
      );
    }
  }

  //appendnew_flow_addProduct_service_start

  async sd_2VlY1gvnXtHOebBw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2VlY1gvnXtHOebBw',
      parentSpanInst
    );
    try {
      bh.local.isImage = bh.input.files?.image;
      console.log(bh.input);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_mTUX2NmKcEhegym8(bh, parentSpanInst);
      //appendnew_next_sd_2VlY1gvnXtHOebBw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2VlY1gvnXtHOebBw',
        spanInst,
        'sd_2VlY1gvnXtHOebBw'
      );
    }
  }

  async sd_mTUX2NmKcEhegym8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mTUX2NmKcEhegym8',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['null'](
          bh.local.isImage,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jZleK088QykB3kgs(bh, parentSpanInst);
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
        bh = await this.sd_BsdnO1vdnlj542Mi(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mTUX2NmKcEhegym8',
        spanInst,
        'sd_mTUX2NmKcEhegym8'
      );
    }
  }

  async sd_BsdnO1vdnlj542Mi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BsdnO1vdnlj542Mi',
      parentSpanInst
    );
    try {
      validateNode('_EN_psnsdlfz8t', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QtpqGHnGhOHUbhk0(bh, parentSpanInst);
      //appendnew_next_sd_BsdnO1vdnlj542Mi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BsdnO1vdnlj542Mi',
        spanInst,
        'sd_BsdnO1vdnlj542Mi'
      );
    }
  }

  async sd_QtpqGHnGhOHUbhk0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QtpqGHnGhOHUbhk0',
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
      bh = await this.sd_rb0bQt43usUv6aG7(bh, parentSpanInst);
      //appendnew_next_sd_QtpqGHnGhOHUbhk0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QtpqGHnGhOHUbhk0',
        spanInst,
        'sd_QtpqGHnGhOHUbhk0'
      );
    }
  }

  async sd_rb0bQt43usUv6aG7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rb0bQt43usUv6aG7',
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
        bh = await this.sd_9ThPGk4VAORjNTBo(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4lUj9DXgwQB1jSSZ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rb0bQt43usUv6aG7',
        spanInst,
        'sd_rb0bQt43usUv6aG7'
      );
    }
  }

  async sd_9ThPGk4VAORjNTBo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9ThPGk4VAORjNTBo',
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

      bh.input.body._id = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_khoBFH8EWsG4uodr(bh, parentSpanInst);
      //appendnew_next_sd_9ThPGk4VAORjNTBo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9ThPGk4VAORjNTBo',
        spanInst,
        'sd_9ThPGk4VAORjNTBo'
      );
    }
  }

  async sd_khoBFH8EWsG4uodr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_khoBFH8EWsG4uodr',
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
      bh = await this.sd_mfucgqMZPb1pM0Wa(bh, parentSpanInst);
      //appendnew_next_sd_khoBFH8EWsG4uodr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_khoBFH8EWsG4uodr',
        spanInst,
        'sd_khoBFH8EWsG4uodr'
      );
    }
  }

  async sd_mfucgqMZPb1pM0Wa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_mfucgqMZPb1pM0Wa',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_mfucgqMZPb1pM0Wa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mfucgqMZPb1pM0Wa',
        spanInst,
        'sd_mfucgqMZPb1pM0Wa'
      );
    }
  }

  async sd_4lUj9DXgwQB1jSSZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4lUj9DXgwQB1jSSZ',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.local.message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_4lUj9DXgwQB1jSSZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4lUj9DXgwQB1jSSZ',
        spanInst,
        'sd_4lUj9DXgwQB1jSSZ'
      );
    }
  }

  async sd_jZleK088QykB3kgs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jZleK088QykB3kgs',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'must need image',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_jZleK088QykB3kgs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jZleK088QykB3kgs',
        spanInst,
        'sd_jZleK088QykB3kgs'
      );
    }
  }

  async sd_eReSr4m4ZRMMVyTr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eReSr4m4ZRMMVyTr',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: bh.error.error[0].message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_eReSr4m4ZRMMVyTr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eReSr4m4ZRMMVyTr',
        spanInst,
        'sd_eReSr4m4ZRMMVyTr'
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
      (await this.sd_Wgg3iAiMLiETzP54(bh, parentSpanInst))
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
  async sd_Wgg3iAiMLiETzP54(bh, parentSpanInst) {
    const nodes = ['sd_BsdnO1vdnlj542Mi'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_eReSr4m4ZRMMVyTr(bh, parentSpanInst);
      //appendnew_next_sd_Wgg3iAiMLiETzP54
      return true;
    }
    return false;
  }
  //appendnew_flow_addProduct_service_Catch
}
