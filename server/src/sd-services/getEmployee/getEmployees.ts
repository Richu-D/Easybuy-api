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
export class getEmployees {
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
    this.serviceName = 'getEmployees';
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
      instance = new getEmployees(
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
      //appendnew_flow_getEmployees_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getEmployees');

    //appendnew_flow_getEmployees_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: getEmployees');

    this.app['get'](
<<<<<<< HEAD
<<<<<<< HEAD
      `${this.serviceBasePath}/admin/employee`,
=======
      `${this.serviceBasePath}/admin/employees`,
>>>>>>> employee
=======
      `${this.serviceBasePath}/admin/employees`,
>>>>>>> employee
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'employeeCheck',
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
<<<<<<< HEAD
<<<<<<< HEAD
          bh = await this.sd_ZtnxADNfrg5o2bJp(bh, parentSpanInst);
          //appendnew_next_sd_Z6qa8pWV6fxUt59c
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Z6qa8pWV6fxUt59c');
=======
=======
>>>>>>> employee
          bh = await this.sd_0uAckIrPQC3pDXEy(bh, parentSpanInst);
          //appendnew_next_sd_qbNR8yUZWCeyywkV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_qbNR8yUZWCeyywkV');
<<<<<<< HEAD
>>>>>>> employee
=======
>>>>>>> employee
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'employeeCheck',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getEmployees_HttpIn
  }
  //   service flows_getEmployees

  //appendnew_flow_getEmployees_start

<<<<<<< HEAD
<<<<<<< HEAD
  async sd_ZtnxADNfrg5o2bJp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZtnxADNfrg5o2bJp',
=======
  async sd_0uAckIrPQC3pDXEy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0uAckIrPQC3pDXEy',
>>>>>>> employee
=======
  async sd_0uAckIrPQC3pDXEy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0uAckIrPQC3pDXEy',
>>>>>>> employee
      parentSpanInst
    );
    try {
      bh.local.query = {};
      this.tracerService.sendData(spanInst, bh);
<<<<<<< HEAD
<<<<<<< HEAD
      bh = await this.sd_26Ko7MIJJeesFReg(bh, parentSpanInst);
      //appendnew_next_sd_ZtnxADNfrg5o2bJp
=======
      bh = await this.sd_bsTXOuodzDZrrjEi(bh, parentSpanInst);
      //appendnew_next_sd_0uAckIrPQC3pDXEy
>>>>>>> employee
=======
      bh = await this.sd_bsTXOuodzDZrrjEi(bh, parentSpanInst);
      //appendnew_next_sd_0uAckIrPQC3pDXEy
>>>>>>> employee
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
<<<<<<< HEAD
<<<<<<< HEAD
        'sd_ZtnxADNfrg5o2bJp',
        spanInst,
        'sd_ZtnxADNfrg5o2bJp'
=======
        'sd_0uAckIrPQC3pDXEy',
        spanInst,
        'sd_0uAckIrPQC3pDXEy'
>>>>>>> employee
=======
        'sd_0uAckIrPQC3pDXEy',
        spanInst,
        'sd_0uAckIrPQC3pDXEy'
>>>>>>> employee
      );
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
  async sd_26Ko7MIJJeesFReg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_26Ko7MIJJeesFReg',
=======
  async sd_bsTXOuodzDZrrjEi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bsTXOuodzDZrrjEi',
>>>>>>> employee
=======
  async sd_bsTXOuodzDZrrjEi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bsTXOuodzDZrrjEi',
>>>>>>> employee
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
<<<<<<< HEAD
<<<<<<< HEAD
        'sd_VRbulAroluyj85b8',
=======
        'sd_vsXSfiucndOZF9WI',
>>>>>>> employee
=======
        'sd_vsXSfiucndOZF9WI',
>>>>>>> employee
        process.env.DB_COLLECTION,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
<<<<<<< HEAD
<<<<<<< HEAD
      bh = await this.sd_QtrAESZVPDdsEf8G(bh, parentSpanInst);
      //appendnew_next_sd_26Ko7MIJJeesFReg
=======
      bh = await this.sd_XF6O2jOBzvqtDIU4(bh, parentSpanInst);
      //appendnew_next_sd_bsTXOuodzDZrrjEi
>>>>>>> employee
=======
      bh = await this.sd_XF6O2jOBzvqtDIU4(bh, parentSpanInst);
      //appendnew_next_sd_bsTXOuodzDZrrjEi
>>>>>>> employee
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
<<<<<<< HEAD
<<<<<<< HEAD
        'sd_26Ko7MIJJeesFReg',
        spanInst,
        'sd_26Ko7MIJJeesFReg'
=======
        'sd_bsTXOuodzDZrrjEi',
        spanInst,
        'sd_bsTXOuodzDZrrjEi'
>>>>>>> employee
=======
        'sd_bsTXOuodzDZrrjEi',
        spanInst,
        'sd_bsTXOuodzDZrrjEi'
>>>>>>> employee
      );
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
  async sd_QtrAESZVPDdsEf8G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QtrAESZVPDdsEf8G',
=======
  async sd_XF6O2jOBzvqtDIU4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XF6O2jOBzvqtDIU4',
>>>>>>> employee
=======
  async sd_XF6O2jOBzvqtDIU4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XF6O2jOBzvqtDIU4',
>>>>>>> employee
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        data: bh.local.result,
      };
<<<<<<< HEAD
<<<<<<< HEAD
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AXJ6XDBeV8dtSWeW(bh, parentSpanInst);
      //appendnew_next_sd_QtrAESZVPDdsEf8G
=======
=======
>>>>>>> employee

      this.tracerService.sendData(spanInst, bh);
      await this.sd_ZThD77KUeRA7EVJu(bh, parentSpanInst);
      //appendnew_next_sd_XF6O2jOBzvqtDIU4
<<<<<<< HEAD
>>>>>>> employee
=======
>>>>>>> employee
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
<<<<<<< HEAD
<<<<<<< HEAD
        'sd_QtrAESZVPDdsEf8G',
        spanInst,
        'sd_QtrAESZVPDdsEf8G'
=======
        'sd_XF6O2jOBzvqtDIU4',
        spanInst,
        'sd_XF6O2jOBzvqtDIU4'
>>>>>>> employee
=======
        'sd_XF6O2jOBzvqtDIU4',
        spanInst,
        'sd_XF6O2jOBzvqtDIU4'
>>>>>>> employee
      );
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
  async sd_AXJ6XDBeV8dtSWeW(bh, parentSpanInst) {
=======
  async sd_ZThD77KUeRA7EVJu(bh, parentSpanInst) {
>>>>>>> employee
=======
  async sd_ZThD77KUeRA7EVJu(bh, parentSpanInst) {
>>>>>>> employee
    try {
      bh.web.res.status(bh.local.response.statusCode).send(bh.local.response);

      return bh;
    } catch (e) {
<<<<<<< HEAD
<<<<<<< HEAD
      return await this.errorHandler(bh, e, 'sd_AXJ6XDBeV8dtSWeW');
=======
      return await this.errorHandler(bh, e, 'sd_ZThD77KUeRA7EVJu');
>>>>>>> employee
=======
      return await this.errorHandler(bh, e, 'sd_ZThD77KUeRA7EVJu');
>>>>>>> employee
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
  //appendnew_flow_getEmployees_Catch
}
