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
export class employee_service {
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
    this.serviceName = 'employee_service';
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
      instance = new employee_service(
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
      //appendnew_flow_employee_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: employee_service');

    //appendnew_flow_employee_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: employee_service');
    //appendnew_flow_employee_service_HttpIn
  }
  //   service flows_employee_service

  async addEmployeeStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'addEmployeeStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AhD0Z2GbwTnbhano(bh, parentSpanInst);
      //appendnew_next_addEmployeeStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OEA6EwMj1chuK4Hq',
        spanInst,
        'addEmployeeStart'
      );
    }
  }

  //appendnew_flow_employee_service_start

  async sd_AhD0Z2GbwTnbhano(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AhD0Z2GbwTnbhano',
      parentSpanInst
    );
    try {
      validateNode('_EN_5v2p7vodho', bh.input.body, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ONhuQmpbAZZK81ac(bh, parentSpanInst);
      //appendnew_next_sd_AhD0Z2GbwTnbhano
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AhD0Z2GbwTnbhano',
        spanInst,
        'sd_AhD0Z2GbwTnbhano'
      );
    }
  }

  async sd_ONhuQmpbAZZK81ac(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ONhuQmpbAZZK81ac',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcryptjs');

      const salt = await bcrypt.genSalt(10);
      bh.local.hashedPassword = await bcrypt.hash(bh.input.body.password, salt);

      bh.local.queryData = {
        name: bh.input.body.name,
        employeeid: bh.input.body.employeeid,
        password: bh.local.hashedPassword,
      };

      bh.local.pipeline = [
        { $match: { employeeid: bh.local.queryData.employeeid } },
      ];

      bh.local.collection = 'employees';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VbR9j0NNX7ebMH1D(bh, parentSpanInst);
      //appendnew_next_sd_ONhuQmpbAZZK81ac
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ONhuQmpbAZZK81ac',
        spanInst,
        'sd_ONhuQmpbAZZK81ac'
      );
    }
  }

  async sd_VbR9j0NNX7ebMH1D(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VbR9j0NNX7ebMH1D',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.collection,
        bh.local.pipeline,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NdqW7oYDlF1yoNJR(bh, parentSpanInst);
      //appendnew_next_sd_VbR9j0NNX7ebMH1D
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VbR9j0NNX7ebMH1D',
        spanInst,
        'sd_VbR9j0NNX7ebMH1D'
      );
    }
  }

  async sd_NdqW7oYDlF1yoNJR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NdqW7oYDlF1yoNJR',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_NiwBsiMALKkbjHI9(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nempty'](
          bh.local.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Vko6KiksboF2r1lo(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NdqW7oYDlF1yoNJR',
        spanInst,
        'sd_NdqW7oYDlF1yoNJR'
      );
    }
  }

  async sd_NiwBsiMALKkbjHI9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NiwBsiMALKkbjHI9',
      parentSpanInst
    );
    try {
      bh.local.finalResult = await MongoPersistance.getInstance().insertOne(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.collection,
        bh.local.queryData,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sP70UwHbCPqXxSJQ(bh, parentSpanInst);
      //appendnew_next_sd_NiwBsiMALKkbjHI9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NiwBsiMALKkbjHI9',
        spanInst,
        'sd_NiwBsiMALKkbjHI9'
      );
    }
  }

  async sd_sP70UwHbCPqXxSJQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sP70UwHbCPqXxSJQ',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 201,
        data: bh.local.finalResult,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_sP70UwHbCPqXxSJQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sP70UwHbCPqXxSJQ',
        spanInst,
        'sd_sP70UwHbCPqXxSJQ'
      );
    }
  }

  async sd_Vko6KiksboF2r1lo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Vko6KiksboF2r1lo',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 409,
        data: 'Already Exist',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Vko6KiksboF2r1lo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Vko6KiksboF2r1lo',
        spanInst,
        'sd_Vko6KiksboF2r1lo'
      );
    }
  }

  async sd_ZGTZH6xKG8mUVYEE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZGTZH6xKG8mUVYEE',
      parentSpanInst
    );
    try {
      bh.local.errorMessage = bh.error.error.map((value: any) => {
        return value.message;
      });

      bh.local.response = {
        statusCode: 401,
        data: bh.local.errorMessage,
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZGTZH6xKG8mUVYEE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZGTZH6xKG8mUVYEE',
        spanInst,
        'sd_ZGTZH6xKG8mUVYEE'
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
      (await this.sd_nHi0MI0G0XOqx88i(bh, parentSpanInst))
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
  async sd_nHi0MI0G0XOqx88i(bh, parentSpanInst) {
    const nodes = ['sd_AhD0Z2GbwTnbhano'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ZGTZH6xKG8mUVYEE(bh, parentSpanInst);
      //appendnew_next_sd_nHi0MI0G0XOqx88i
      return true;
    }
    return false;
  }
  //appendnew_flow_employee_service_Catch
}
