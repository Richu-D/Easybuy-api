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

  async createEmployeeStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'createEmployeeStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_atLJndaLUh671ely(bh, parentSpanInst);
      //appendnew_next_createEmployeeStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7elixkgvExQAAml8',
        spanInst,
        'createEmployeeStart'
      );
    }
  }

  //appendnew_flow_employee_service_start

  async sd_atLJndaLUh671ely(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_atLJndaLUh671ely',
      parentSpanInst
    );
    try {
      const bcrypt = require('bcryptjs');

      bh.local.objectData = {
        employeename: 'Ameen',
        employeeid: 'easybuy007',
        password: '1234',
      };

      const salt = await bcrypt.genSalt(10);
      bh.local.hashedPassword = await bcrypt.hash(
        bh.local.objectData.password,
        salt
      );

      bh.local.queryData = {
        employeename: 'Ameen',
        employeeid: 'easybuy007',
        password: bh.local.hashedPassword,
      };

      bh.local.pipeline = [
        { $match: { employeeid: bh.local.queryData.employeeid } },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fnYucrPjmuLvBMrq(bh, parentSpanInst);
      //appendnew_next_sd_atLJndaLUh671ely
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_atLJndaLUh671ely',
        spanInst,
        'sd_atLJndaLUh671ely'
      );
    }
  }

  async sd_fnYucrPjmuLvBMrq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fnYucrPjmuLvBMrq',
      parentSpanInst
    );
    try {
      validateNode('_EN_6e0s6g3ak9', bh.local.objectData, true);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_yoLdjP5kkKfwAQFQ(bh, parentSpanInst);
      //appendnew_next_sd_fnYucrPjmuLvBMrq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fnYucrPjmuLvBMrq',
        spanInst,
        'sd_fnYucrPjmuLvBMrq'
      );
    }
  }

  async sd_yoLdjP5kkKfwAQFQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_yoLdjP5kkKfwAQFQ',
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
      bh = await this.sd_bv1jUcsLOpQKBWpq(bh, parentSpanInst);
      //appendnew_next_sd_yoLdjP5kkKfwAQFQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yoLdjP5kkKfwAQFQ',
        spanInst,
        'sd_yoLdjP5kkKfwAQFQ'
      );
    }
  }

  async sd_bv1jUcsLOpQKBWpq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bv1jUcsLOpQKBWpq',
      parentSpanInst
    );
    try {
      console.log('result data', bh.local.result);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0xDdUR8Qp4qqb3VE(bh, parentSpanInst);
      //appendnew_next_sd_bv1jUcsLOpQKBWpq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bv1jUcsLOpQKBWpq',
        spanInst,
        'sd_bv1jUcsLOpQKBWpq'
      );
    }
  }

  async sd_0xDdUR8Qp4qqb3VE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0xDdUR8Qp4qqb3VE',
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
        bh = await this.sd_VHuzeyT8EKCJllHP(bh, parentSpanInst);
      } else if (
        this.sdService.operators['nempty'](
          bh.local.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_TsKfIZ8FC0DiWNOQ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0xDdUR8Qp4qqb3VE',
        spanInst,
        'sd_0xDdUR8Qp4qqb3VE'
      );
    }
  }

  async sd_VHuzeyT8EKCJllHP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VHuzeyT8EKCJllHP',
      parentSpanInst
    );
    try {
      bh.local.finalResult = await MongoPersistance.getInstance().insertOne(
        'sd_vsXSfiucndOZF9WI',
        process.env.DB_COLLECTION,
        bh.local.queryData,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WOusLUIlxqo4b0fY(bh, parentSpanInst);
      //appendnew_next_sd_VHuzeyT8EKCJllHP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VHuzeyT8EKCJllHP',
        spanInst,
        'sd_VHuzeyT8EKCJllHP'
      );
    }
  }

  async sd_WOusLUIlxqo4b0fY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WOusLUIlxqo4b0fY',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 201,
        data: bh.local.finalResult,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_WOusLUIlxqo4b0fY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WOusLUIlxqo4b0fY',
        spanInst,
        'sd_WOusLUIlxqo4b0fY'
      );
    }
  }

  async sd_TsKfIZ8FC0DiWNOQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TsKfIZ8FC0DiWNOQ',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 409,
        data: 'Already Exist',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_TsKfIZ8FC0DiWNOQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TsKfIZ8FC0DiWNOQ',
        spanInst,
        'sd_TsKfIZ8FC0DiWNOQ'
      );
    }
  }

  async sd_bdSaWqUUvllUAKAn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bdSaWqUUvllUAKAn',
      parentSpanInst
    );
    try {
      // console.log("err",bh.error.error[0].message)

      bh.local.errorMessage = bh.error.error.map((value: any) => {
        return value.message;
      });

      //  console.log("eroor msgs",bh.local.errorMessage)

      bh.local.response = {
        statusCode: 401,
        data: bh.local.errorMessage,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_bdSaWqUUvllUAKAn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bdSaWqUUvllUAKAn',
        spanInst,
        'sd_bdSaWqUUvllUAKAn'
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
      (await this.sd_2BTGft7iAjx3NoxG(bh, parentSpanInst))
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
  async sd_2BTGft7iAjx3NoxG(bh, parentSpanInst) {
    const nodes = ['sd_fnYucrPjmuLvBMrq'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_bdSaWqUUvllUAKAn(bh, parentSpanInst);
      //appendnew_next_sd_2BTGft7iAjx3NoxG
      return true;
    }
    return false;
  }
  //appendnew_flow_employee_service_Catch
}
