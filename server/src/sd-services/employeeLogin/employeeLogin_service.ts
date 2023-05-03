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
export class employeeLogin_service {
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
    this.serviceName = 'employeeLogin_service';
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
      instance = new employeeLogin_service(
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
      //appendnew_flow_employeeLogin_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: employeeLogin_service');

    //appendnew_flow_employeeLogin_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: employeeLogin_service');
    //appendnew_flow_employeeLogin_service_HttpIn
  }
  //   service flows_employeeLogin_service

  async employeeLoginStart(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'employeeLoginStart',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_rTxx2jEntbU5XTud(bh, parentSpanInst);
      //appendnew_next_employeeLoginStart
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6WucQmrOLZVw2f4R',
        spanInst,
        'employeeLoginStart'
      );
    }
  }

  //appendnew_flow_employeeLogin_service_start

  async sd_rTxx2jEntbU5XTud(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_rTxx2jEntbU5XTud',
      parentSpanInst
    );
    try {
      // bh.local.data={
      //     employeeid:"easybuy007",
      //     password:"1234"
      // }
      bh.local.pipeline = [
        { $match: { employeeid: bh.input.body.employeeid } },
      ];

      bh.local.collection = 'employees';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_zm3c984Vx4sXY9P3(bh, parentSpanInst);
      //appendnew_next_sd_rTxx2jEntbU5XTud
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_rTxx2jEntbU5XTud',
        spanInst,
        'sd_rTxx2jEntbU5XTud'
      );
    }
  }

  async sd_zm3c984Vx4sXY9P3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zm3c984Vx4sXY9P3',
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
      bh = await this.sd_uJjBivHwJx72wg33(bh, parentSpanInst);
      //appendnew_next_sd_zm3c984Vx4sXY9P3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zm3c984Vx4sXY9P3',
        spanInst,
        'sd_zm3c984Vx4sXY9P3'
      );
    }
  }

  async sd_uJjBivHwJx72wg33(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uJjBivHwJx72wg33',
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
            bh.input.body.password,
            bh.local.result[0].password
          )
        ) {
          bh.local.isEmployee = true;
        }
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MqS7oTSiLUVlo4dN(bh, parentSpanInst);
      //appendnew_next_sd_uJjBivHwJx72wg33
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uJjBivHwJx72wg33',
        spanInst,
        'sd_uJjBivHwJx72wg33'
      );
    }
  }

  async sd_MqS7oTSiLUVlo4dN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MqS7oTSiLUVlo4dN',
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
        bh = await this.sd_ELnSjBc2E9WIyOhP(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isEmployee,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_H81lTqJRhKcMjeer(bh, parentSpanInst);
      } else if (
        this.sdService.operators['empty'](
          bh.local.isEmployee,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_OrE7FtQuqwst1P0Z(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MqS7oTSiLUVlo4dN',
        spanInst,
        'sd_MqS7oTSiLUVlo4dN'
      );
    }
  }

  async sd_ELnSjBc2E9WIyOhP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ELnSjBc2E9WIyOhP',
      parentSpanInst
    );
    try {
      bh.local.employee = {
        ...bh.input.body,
      };

      // console.log("session data",bh.local.employee)
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ztsz0UI767ZGJmXa(bh, parentSpanInst);
      //appendnew_next_sd_ELnSjBc2E9WIyOhP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ELnSjBc2E9WIyOhP',
        spanInst,
        'sd_ELnSjBc2E9WIyOhP'
      );
    }
  }

  async sd_Ztsz0UI767ZGJmXa(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ztsz0UI767ZGJmXa',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.employee;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5F0HOY5oGC4RlE7j(bh, parentSpanInst);
      //appendnew_next_sd_Ztsz0UI767ZGJmXa
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ztsz0UI767ZGJmXa',
        spanInst,
        'sd_Ztsz0UI767ZGJmXa'
      );
    }
  }

  async sd_5F0HOY5oGC4RlE7j(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5F0HOY5oGC4RlE7j',
      parentSpanInst
    );
    try {
      let { password, ...data } = bh.local.result[0];

      bh.local.response = {
        statusCode: 200,
        message: 'EMPLOYEE_LOGED_IN',
        data,
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5F0HOY5oGC4RlE7j
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5F0HOY5oGC4RlE7j',
        spanInst,
        'sd_5F0HOY5oGC4RlE7j'
      );
    }
  }

  async sd_H81lTqJRhKcMjeer(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H81lTqJRhKcMjeer',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 401,
        message: 'INCORRECT_PASSWORD',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_H81lTqJRhKcMjeer
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H81lTqJRhKcMjeer',
        spanInst,
        'sd_H81lTqJRhKcMjeer'
      );
    }
  }

  async sd_OrE7FtQuqwst1P0Z(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OrE7FtQuqwst1P0Z',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 404,
        message: 'EMPLOYEE_NOT_FOUND',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OrE7FtQuqwst1P0Z
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OrE7FtQuqwst1P0Z',
        spanInst,
        'sd_OrE7FtQuqwst1P0Z'
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
  //appendnew_flow_employeeLogin_service_Catch
}
