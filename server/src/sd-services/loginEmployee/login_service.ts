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
export class login_service {
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
    this.serviceName = 'login_service';
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
      instance = new login_service(
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
      //appendnew_flow_login_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: login_service');

    //appendnew_flow_login_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: login_service');
    //appendnew_flow_login_service_HttpIn
  }
  //   service flows_login_service

  async loginEmployeeStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'loginEmployeeStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EC3Wkv5bmFLsHan9(bh, parentSpanInst);
      //appendnew_next_loginEmployeeStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tcJG8qzFIJLfLmVX',
        spanInst,
        'loginEmployeeStart'
      );
    }
  }

  //appendnew_flow_login_service_start

  async sd_EC3Wkv5bmFLsHan9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EC3Wkv5bmFLsHan9',
      parentSpanInst
    );
    try {
      bh.local.data = {
        employeeid: 'easybuy007',
        password: '1234',
      };
      bh.local.pipeline = [
        { $match: { employeeid: bh.local.data.employeeid } },
      ];

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WEA8gh7JxaNFiK4h(bh, parentSpanInst);
      //appendnew_next_sd_EC3Wkv5bmFLsHan9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EC3Wkv5bmFLsHan9',
        spanInst,
        'sd_EC3Wkv5bmFLsHan9'
      );
    }
  }

  async sd_WEA8gh7JxaNFiK4h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WEA8gh7JxaNFiK4h',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_vsXSfiucndOZF9WI',
        process.env.DB_COLLECTION,
        bh.local.pipeline,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3FM21Y3qMNSm90uh(bh, parentSpanInst);
      //appendnew_next_sd_WEA8gh7JxaNFiK4h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WEA8gh7JxaNFiK4h',
        spanInst,
        'sd_WEA8gh7JxaNFiK4h'
      );
    }
  }

  async sd_3FM21Y3qMNSm90uh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3FM21Y3qMNSm90uh',
      parentSpanInst
    );
    try {
      // console.log("res",bh.local.result[0])
      const bcrypt = require('bcryptjs');

      bh.local.isEmployee = false;

      if (bh.local.result[0] === undefined) {
        bh.local.isEmployee = '';
      } else {
        if (
          await bcrypt.compare(
            bh.local.data.password,
            bh.local.result[0].password
          )
        ) {
          bh.local.isEmployee = true;
        }
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_59cbk7X8atQjNFeD(bh, parentSpanInst);
      //appendnew_next_sd_3FM21Y3qMNSm90uh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3FM21Y3qMNSm90uh',
        spanInst,
        'sd_3FM21Y3qMNSm90uh'
      );
    }
  }

  async sd_59cbk7X8atQjNFeD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_59cbk7X8atQjNFeD',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isEmployee,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9BQOxvJuYoTL0y8x(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isEmployee,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zvMJzDdJ4rMXkrNZ(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.local.isEmployee,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_PYiuHtRnS1ChD6MW(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_59cbk7X8atQjNFeD',
        spanInst,
        'sd_59cbk7X8atQjNFeD'
      );
    }
  }

  async sd_9BQOxvJuYoTL0y8x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9BQOxvJuYoTL0y8x',
      parentSpanInst
    );
    try {
      bh.local.employee = {
        ...bh.local.data,
      };

      console.log('session data', bh.local.employee);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aDgJKICoi0PXVimq(bh, parentSpanInst);
      //appendnew_next_sd_9BQOxvJuYoTL0y8x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9BQOxvJuYoTL0y8x',
        spanInst,
        'sd_9BQOxvJuYoTL0y8x'
      );
    }
  }

  async sd_aDgJKICoi0PXVimq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aDgJKICoi0PXVimq',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.employee;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ib533CwWTtHEGvzK(bh, parentSpanInst);
      //appendnew_next_sd_aDgJKICoi0PXVimq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aDgJKICoi0PXVimq',
        spanInst,
        'sd_aDgJKICoi0PXVimq'
      );
    }
  }

  async sd_Ib533CwWTtHEGvzK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ib533CwWTtHEGvzK',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'EMPLOYEE_LOGED_IN',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Ib533CwWTtHEGvzK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ib533CwWTtHEGvzK',
        spanInst,
        'sd_Ib533CwWTtHEGvzK'
      );
    }
  }

  async sd_zvMJzDdJ4rMXkrNZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zvMJzDdJ4rMXkrNZ',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 401,
        message: 'INCORRECT_PASSWORD',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_zvMJzDdJ4rMXkrNZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zvMJzDdJ4rMXkrNZ',
        spanInst,
        'sd_zvMJzDdJ4rMXkrNZ'
      );
    }
  }

  async sd_PYiuHtRnS1ChD6MW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PYiuHtRnS1ChD6MW',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 404,
        message: 'EMPLOYEE_NOT_FOUND',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_PYiuHtRnS1ChD6MW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PYiuHtRnS1ChD6MW',
        spanInst,
        'sd_PYiuHtRnS1ChD6MW'
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
  //appendnew_flow_login_service_Catch
}
