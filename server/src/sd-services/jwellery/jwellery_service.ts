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
//append_imports_end
export class jwellery_service {
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
    this.serviceName = 'jwellery_service';
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
      instance = new jwellery_service(
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
      //appendnew_flow_jwellery_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: jwellery_service');

    //appendnew_flow_jwellery_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: jwellery_service');
    //appendnew_flow_jwellery_service_HttpIn
  }
  //   service flows_jwellery_service

  async jwelleryPriceStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'jwelleryPriceStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PsmwwHBYnGVFBTvE(bh, parentSpanInst);
      //appendnew_next_jwelleryPriceStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IeLNNDldClNPSEql',
        spanInst,
        'jwelleryPriceStart'
      );
    }
  }

  //appendnew_flow_jwellery_service_start

  async sd_PsmwwHBYnGVFBTvE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PsmwwHBYnGVFBTvE',
      parentSpanInst
    );
    try {
      bh.local.url = process.env.JWELLERY_MATERIAL_API;

      // console.log("url",bh.local.url)
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_v98ngEzUxuFcyxbC(bh, parentSpanInst);
      //appendnew_next_sd_PsmwwHBYnGVFBTvE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PsmwwHBYnGVFBTvE',
        spanInst,
        'sd_PsmwwHBYnGVFBTvE'
      );
    }
  }

  async sd_v98ngEzUxuFcyxbC(bh, parentSpanInst) {
    try {
      let requestOptions = {
        url: bh.local.url,
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: undefined,
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: undefined,
        useQuerystring: false,
      };
      if (!false) {
        requestOptions.rejectUnauthorized = false;
      }
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.jwelleryPrices = responseMsg;

      bh = await this.sd_vtXUgKX4WPk532uR(bh, parentSpanInst);
      //appendnew_next_sd_v98ngEzUxuFcyxbC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v98ngEzUxuFcyxbC');
    }
  }

  async sd_vtXUgKX4WPk532uR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_vtXUgKX4WPk532uR',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        data: bh.local.jwelleryPrices,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_vtXUgKX4WPk532uR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_vtXUgKX4WPk532uR',
        spanInst,
        'sd_vtXUgKX4WPk532uR'
      );
    }
  }

  async sd_kyvY2SZYXs4efIbu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kyvY2SZYXs4efIbu',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 500,
        message: 'SOMETHING_WENT_WRONG',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_kyvY2SZYXs4efIbu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kyvY2SZYXs4efIbu',
        spanInst,
        'sd_kyvY2SZYXs4efIbu'
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
      (await this.sd_PllCyuqsiuLfqceF(bh, parentSpanInst))
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
  async sd_PllCyuqsiuLfqceF(bh, parentSpanInst) {
    const nodes = [
      'sd_IeLNNDldClNPSEql',
      'sd_PsmwwHBYnGVFBTvE',
      'sd_v98ngEzUxuFcyxbC',
      'sd_vtXUgKX4WPk532uR',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_kyvY2SZYXs4efIbu(bh, parentSpanInst);
      //appendnew_next_sd_PllCyuqsiuLfqceF
      return true;
    }
    return false;
  }
  //appendnew_flow_jwellery_service_Catch
}
