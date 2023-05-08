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
export class api {
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
    this.serviceName = 'api';
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
      instance = new api(
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
      //appendnew_flow_api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: api');

    //appendnew_flow_api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: api');

    this.app['get'](
      `${this.serviceBasePath}/payment_link`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_BlgD7G1N9ORXGyBs(bh, parentSpanInst);
          //appendnew_next_sd_EdfmCUBZa97PcFIP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_EdfmCUBZa97PcFIP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/getStatus`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_m7qVDxRKTzeEd1a0(bh, parentSpanInst);
          //appendnew_next_sd_s5LFMhMYlCzNqsdo
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_s5LFMhMYlCzNqsdo');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/payment_all`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_LslOm5CkZ7ktgclb(bh, parentSpanInst);
          //appendnew_next_sd_0c4dHF8Smrt3mYW5
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_0c4dHF8Smrt3mYW5');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_api_HttpIn
  }
  //   service flows_api

  async sd_UUXrpagU0cAjlL75(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_UUXrpagU0cAjlL75',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_edJSL6xvQgjmuRST(bh, parentSpanInst);
      //appendnew_next_sd_UUXrpagU0cAjlL75
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UUXrpagU0cAjlL75',
        spanInst,
        'sd_UUXrpagU0cAjlL75'
      );
    }
  }

  async fetchStatus(parentSpanInst, ...others) {
    const spanInst = this.tracerService.createSpan(
      'fetchStatus',
      parentSpanInst
    );
    try {
      var bh: any = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_FmuT0Y7XL5MiN8eI(bh, parentSpanInst);
      //appendnew_next_fetchStatus
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YTelYMrBQEm9uz3O',
        spanInst,
        'fetchStatus'
      );
    }
  }

  async getAllPayment(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'getAllPayment',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZcDdmrXDMdDSixZT(bh, parentSpanInst);
      //appendnew_next_getAllPayment
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cslTr1P61T1D5LSH',
        spanInst,
        'getAllPayment'
      );
    }
  }

  //appendnew_flow_api_start

  async sd_BlgD7G1N9ORXGyBs(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BlgD7G1N9ORXGyBs',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DxRJV62WiKZyoKHe(bh, parentSpanInst);
      //appendnew_next_sd_BlgD7G1N9ORXGyBs
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BlgD7G1N9ORXGyBs',
        spanInst,
        'sd_BlgD7G1N9ORXGyBs'
      );
    }
  }

  async sd_DxRJV62WiKZyoKHe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DxRJV62WiKZyoKHe',
      parentSpanInst
    );
    try {
      bh = await this.sd_UUXrpagU0cAjlL75(spanInst, bh);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_aLCJYsWFiEXvjpaM(bh, parentSpanInst);
      //appendnew_next_sd_DxRJV62WiKZyoKHe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DxRJV62WiKZyoKHe',
        spanInst,
        'sd_DxRJV62WiKZyoKHe'
      );
    }
  }

  async sd_aLCJYsWFiEXvjpaM(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aLCJYsWFiEXvjpaM');
    }
  }

  async sd_edJSL6xvQgjmuRST(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_edJSL6xvQgjmuRST',
      parentSpanInst
    );
    try {
      console.log('heyyyyy');
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      instance.paymentLink
        .create({
          amount: 500,
          currency: 'INR',
          accept_partial: true,
          first_min_partial_amount: 100,
          description: 'For XYZ purpose',
          customer: {
            name: 'Gaurav Kumar',
            email: 'muhammedrishal025@gmail.com',
            contact: '+918590265058',
          },
          notify: {
            sms: true,
            email: false,
            whatsapp: true,
          },
          reminder_enable: true,
          notes: {
            policy_name: 'Jeevan Bima',
          },
          callback_url: 'https://example-callback-url.com/',
          callback_method: 'get',
        })
        .then((response) => {
          console.log(response);
        });
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_edJSL6xvQgjmuRST
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_edJSL6xvQgjmuRST',
        spanInst,
        'sd_edJSL6xvQgjmuRST'
      );
    }
  }

  async sd_m7qVDxRKTzeEd1a0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_m7qVDxRKTzeEd1a0',
      parentSpanInst
    );
    try {
      let outputVariables = await this.fetchStatus(spanInst);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_m7qVDxRKTzeEd1a0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_m7qVDxRKTzeEd1a0',
        spanInst,
        'sd_m7qVDxRKTzeEd1a0'
      );
    }
  }

  async sd_FmuT0Y7XL5MiN8eI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_FmuT0Y7XL5MiN8eI',
      parentSpanInst
    );
    try {
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      bh.local.resultStatus = await instance.paymentLink.fetch(
        'plink_Ln3IBLtTfIslTw'
      );
      console.log(bh.local.resultStatus);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AZ33NSIT8vAvwCtU(bh, parentSpanInst);
      //appendnew_next_sd_FmuT0Y7XL5MiN8eI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FmuT0Y7XL5MiN8eI',
        spanInst,
        'sd_FmuT0Y7XL5MiN8eI'
      );
    }
  }

  async sd_AZ33NSIT8vAvwCtU(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.resultStatus);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AZ33NSIT8vAvwCtU');
    }
  }

  async sd_LslOm5CkZ7ktgclb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LslOm5CkZ7ktgclb',
      parentSpanInst
    );
    try {
      bh = await this.getAllPayment(spanInst, bh);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_62vtL5DWWn9lh5M3(bh, parentSpanInst);
      //appendnew_next_sd_LslOm5CkZ7ktgclb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LslOm5CkZ7ktgclb',
        spanInst,
        'sd_LslOm5CkZ7ktgclb'
      );
    }
  }

  async sd_62vtL5DWWn9lh5M3(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.allPaymentData);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_62vtL5DWWn9lh5M3');
    }
  }

  async sd_ZcDdmrXDMdDSixZT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZcDdmrXDMdDSixZT',
      parentSpanInst
    );
    try {
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      bh.local.allPaymentData = await instance.paymentLink.all();
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZcDdmrXDMdDSixZT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZcDdmrXDMdDSixZT',
        spanInst,
        'sd_ZcDdmrXDMdDSixZT'
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
  //appendnew_flow_api_Catch
}
