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
export class registerUser_service {
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
    this.serviceName = 'registerUser_service';
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
      instance = new registerUser_service(
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
      //appendnew_flow_registerUser_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: registerUser_service');

    //appendnew_flow_registerUser_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: registerUser_service');
    //appendnew_flow_registerUser_service_HttpIn
  }
  //   service flows_registerUser_service

  async sd_K9vqfyJYHSVf6Ivy(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_K9vqfyJYHSVf6Ivy',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2Kdr5DgnV17YNSYW(bh, parentSpanInst);
      //appendnew_next_sd_K9vqfyJYHSVf6Ivy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K9vqfyJYHSVf6Ivy',
        spanInst,
        'sd_K9vqfyJYHSVf6Ivy'
      );
    }
  }

  //appendnew_flow_registerUser_service_start

  async sd_2Kdr5DgnV17YNSYW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2Kdr5DgnV17YNSYW',
      parentSpanInst
    );
    try {
      validateNode('_EN_9qz5m7dj92', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SDJhsohmonY1V2u3(bh, parentSpanInst);
      //appendnew_next_sd_2Kdr5DgnV17YNSYW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2Kdr5DgnV17YNSYW',
        spanInst,
        'sd_2Kdr5DgnV17YNSYW'
      );
    }
  }

  async sd_SDJhsohmonY1V2u3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SDJhsohmonY1V2u3',
      parentSpanInst
    );
    try {
      const regex = /^\d{10}$/;

      if (regex.test(bh.input.body.mobile)) {
        bh.local.isValid = true;
      } else {
        bh.local.isValid = false;
      }

      console.log('[[[[[[[[]]]]]]]]]]]]');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lJVSLL1f5FRZkTBm(bh, parentSpanInst);
      //appendnew_next_sd_SDJhsohmonY1V2u3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SDJhsohmonY1V2u3',
        spanInst,
        'sd_SDJhsohmonY1V2u3'
      );
    }
  }

  async sd_lJVSLL1f5FRZkTBm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lJVSLL1f5FRZkTBm',
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
        bh = await this.sd_cSTxACH88fN05zvO(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_VIqTsYOXdHQtaSVO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lJVSLL1f5FRZkTBm',
        spanInst,
        'sd_lJVSLL1f5FRZkTBm'
      );
    }
  }

  async sd_cSTxACH88fN05zvO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cSTxACH88fN05zvO',
      parentSpanInst
    );
    try {
      bh.local.isValid = true;
      if (!bh.input.body.name) {
        bh.local.isValid = false;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qhsYYIje6J8mX3ya(bh, parentSpanInst);
      //appendnew_next_sd_cSTxACH88fN05zvO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cSTxACH88fN05zvO',
        spanInst,
        'sd_cSTxACH88fN05zvO'
      );
    }
  }

  async sd_qhsYYIje6J8mX3ya(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qhsYYIje6J8mX3ya',
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
        bh = await this.sd_sbplKljsB7649gGx(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_P5nEoVHLNCg3D6yU(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qhsYYIje6J8mX3ya',
        spanInst,
        'sd_qhsYYIje6J8mX3ya'
      );
    }
  }

  async sd_sbplKljsB7649gGx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sbplKljsB7649gGx',
      parentSpanInst
    );
    try {
      bh.local.findQuery = { mobile: bh.input.body.mobile };
      bh.local.collection = 'customer';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jOapHpGpHFy6sayd(bh, parentSpanInst);
      //appendnew_next_sd_sbplKljsB7649gGx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sbplKljsB7649gGx',
        spanInst,
        'sd_sbplKljsB7649gGx'
      );
    }
  }

  async sd_jOapHpGpHFy6sayd(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jOapHpGpHFy6sayd',
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
      bh = await this.sd_hTvZaV8PYFaOHNTF(bh, parentSpanInst);
      //appendnew_next_sd_jOapHpGpHFy6sayd
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jOapHpGpHFy6sayd',
        spanInst,
        'sd_jOapHpGpHFy6sayd'
      );
    }
  }

  async sd_hTvZaV8PYFaOHNTF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hTvZaV8PYFaOHNTF',
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
        bh = await this.sd_gtRHBFqnyUMj4WtR(bh, parentSpanInst);
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
        bh = await this.sd_5xptnClI1g6YGbw1(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hTvZaV8PYFaOHNTF',
        spanInst,
        'sd_hTvZaV8PYFaOHNTF'
      );
    }
  }

  async sd_gtRHBFqnyUMj4WtR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gtRHBFqnyUMj4WtR',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'user already with name' + bh.local.result[0].name + 'exists',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_gtRHBFqnyUMj4WtR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gtRHBFqnyUMj4WtR',
        spanInst,
        'sd_gtRHBFqnyUMj4WtR'
      );
    }
  }

  async sd_5xptnClI1g6YGbw1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5xptnClI1g6YGbw1',
      parentSpanInst
    );
    try {
      bh.local.collection = 'customer';
      bh.input.body.useCoupons = [];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JmeMff8dRAdDRyXY(bh, parentSpanInst);
      //appendnew_next_sd_5xptnClI1g6YGbw1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5xptnClI1g6YGbw1',
        spanInst,
        'sd_5xptnClI1g6YGbw1'
      );
    }
  }

  async sd_JmeMff8dRAdDRyXY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JmeMff8dRAdDRyXY',
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
      bh = await this.sd_P1EQMHpWKx8wQcaZ(bh, parentSpanInst);
      //appendnew_next_sd_JmeMff8dRAdDRyXY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JmeMff8dRAdDRyXY',
        spanInst,
        'sd_JmeMff8dRAdDRyXY'
      );
    }
  }

  async sd_P1EQMHpWKx8wQcaZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P1EQMHpWKx8wQcaZ',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_P1EQMHpWKx8wQcaZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P1EQMHpWKx8wQcaZ',
        spanInst,
        'sd_P1EQMHpWKx8wQcaZ'
      );
    }
  }

  async sd_P5nEoVHLNCg3D6yU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_P5nEoVHLNCg3D6yU',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'must need name field',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_P5nEoVHLNCg3D6yU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_P5nEoVHLNCg3D6yU',
        spanInst,
        'sd_P5nEoVHLNCg3D6yU'
      );
    }
  }

  async sd_VIqTsYOXdHQtaSVO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VIqTsYOXdHQtaSVO',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'number is  not valid',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_VIqTsYOXdHQtaSVO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VIqTsYOXdHQtaSVO',
        spanInst,
        'sd_VIqTsYOXdHQtaSVO'
      );
    }
  }

  async sd_GmO6d6Amt0m1Ws4I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GmO6d6Amt0m1Ws4I',
      parentSpanInst
    );
    try {
      console.log('[[[[[[[[]]]]]]]]]]]]');
      bh.local.response = {
        statusCode: 400,
        message: bh.error.error[0].message,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GmO6d6Amt0m1Ws4I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GmO6d6Amt0m1Ws4I',
        spanInst,
        'sd_GmO6d6Amt0m1Ws4I'
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
      (await this.sd_xw4WW26TkPcxCrF1(bh, parentSpanInst))
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
  async sd_xw4WW26TkPcxCrF1(bh, parentSpanInst) {
    const nodes = ['sd_2Kdr5DgnV17YNSYW'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_GmO6d6Amt0m1Ws4I(bh, parentSpanInst);
      //appendnew_next_sd_xw4WW26TkPcxCrF1
      return true;
    }
    return false;
  }
  //appendnew_flow_registerUser_service_Catch
}
