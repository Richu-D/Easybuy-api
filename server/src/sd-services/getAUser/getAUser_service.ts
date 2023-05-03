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
export class getAUser_service {
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
    this.serviceName = 'getAUser_service';
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
      instance = new getAUser_service(
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
      //appendnew_flow_getAUser_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getAUser_service');

    //appendnew_flow_getAUser_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: getAUser_service');
    //appendnew_flow_getAUser_service_HttpIn
  }
  //   service flows_getAUser_service

  async sd_uc90oALL4XbIi13s(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_uc90oALL4XbIi13s',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MgyPeqnGfpiWXMpD(bh, parentSpanInst);
      //appendnew_next_sd_uc90oALL4XbIi13s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uc90oALL4XbIi13s',
        spanInst,
        'sd_uc90oALL4XbIi13s'
      );
    }
  }

  //appendnew_flow_getAUser_service_start

  async sd_MgyPeqnGfpiWXMpD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MgyPeqnGfpiWXMpD',
      parentSpanInst
    );
    try {
      const regex = /^\d{10}$/;

      if (regex.test(bh.input.params.phone + '')) {
        bh.local.isValid = true;
      } else {
        bh.local.isValid = false;
      }

      console.log('shinas');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xIZ9s71EhQTNBMaC(bh, parentSpanInst);
      //appendnew_next_sd_MgyPeqnGfpiWXMpD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MgyPeqnGfpiWXMpD',
        spanInst,
        'sd_MgyPeqnGfpiWXMpD'
      );
    }
  }

  async sd_xIZ9s71EhQTNBMaC(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xIZ9s71EhQTNBMaC',
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
        bh = await this.sd_xyPhDeFs5sldGnfH(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rfR7Qw5jyTbGJFtG(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xIZ9s71EhQTNBMaC',
        spanInst,
        'sd_xIZ9s71EhQTNBMaC'
      );
    }
  }

  async sd_xyPhDeFs5sldGnfH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xyPhDeFs5sldGnfH',
      parentSpanInst
    );
    try {
      bh.local.findQuery = { mobile: bh.input.params.phone };
      bh.local.collection = 'customer';
      console.log(bh.local.findQuery);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SoccYjm5xLwOd7Ab(bh, parentSpanInst);
      //appendnew_next_sd_xyPhDeFs5sldGnfH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xyPhDeFs5sldGnfH',
        spanInst,
        'sd_xyPhDeFs5sldGnfH'
      );
    }
  }

  async sd_SoccYjm5xLwOd7Ab(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SoccYjm5xLwOd7Ab',
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
      bh = await this.sd_9feZyjuluseTpBG4(bh, parentSpanInst);
      //appendnew_next_sd_SoccYjm5xLwOd7Ab
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SoccYjm5xLwOd7Ab',
        spanInst,
        'sd_SoccYjm5xLwOd7Ab'
      );
    }
  }

  async sd_9feZyjuluseTpBG4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9feZyjuluseTpBG4',
      parentSpanInst
    );
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.result,
          '0',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wAksi2odnymCmFw8(bh, parentSpanInst);
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
        bh = await this.sd_CpHaFMjv5E1NzdwZ(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9feZyjuluseTpBG4',
        spanInst,
        'sd_9feZyjuluseTpBG4'
      );
    }
  }

  async sd_wAksi2odnymCmFw8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wAksi2odnymCmFw8',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: bh.local.result,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_wAksi2odnymCmFw8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wAksi2odnymCmFw8',
        spanInst,
        'sd_wAksi2odnymCmFw8'
      );
    }
  }

  async sd_CpHaFMjv5E1NzdwZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CpHaFMjv5E1NzdwZ',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'no result found',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_CpHaFMjv5E1NzdwZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CpHaFMjv5E1NzdwZ',
        spanInst,
        'sd_CpHaFMjv5E1NzdwZ'
      );
    }
  }

  async sd_rfR7Qw5jyTbGJFtG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rfR7Qw5jyTbGJFtG',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 400,
        message: 'number is  not valid',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_rfR7Qw5jyTbGJFtG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rfR7Qw5jyTbGJFtG',
        spanInst,
        'sd_rfR7Qw5jyTbGJFtG'
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
  //appendnew_flow_getAUser_service_Catch
}
