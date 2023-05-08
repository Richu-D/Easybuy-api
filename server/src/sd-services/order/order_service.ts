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
export class order_service {
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
    this.serviceName = 'order_service';
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
      instance = new order_service(
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
      //appendnew_flow_order_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: order_service');

    //appendnew_flow_order_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: order_service');
    //appendnew_flow_order_service_HttpIn
  }
  //   service flows_order_service

  async createOrder(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'createOrder',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DKydWL8w0LPjBsvB(bh, parentSpanInst);
      //appendnew_next_createOrder
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IpSVNkbTiDlHuR4b',
        spanInst,
        'createOrder'
      );
    }
  }

  async createPlaceOrder(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'createPlaceOrder',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HXSlgMwQB38G7Pel(bh, parentSpanInst);
      //appendnew_next_createPlaceOrder
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Jxl8T3BV9xhp9XHp',
        spanInst,
        'createPlaceOrder'
      );
    }
  }

  //appendnew_flow_order_service_start

  async sd_DKydWL8w0LPjBsvB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DKydWL8w0LPjBsvB',
      parentSpanInst
    );
    try {
      bh.local.collection = 'orders';

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JsdEMqwtxNcCaDId(bh, parentSpanInst);
      //appendnew_next_sd_DKydWL8w0LPjBsvB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DKydWL8w0LPjBsvB',
        spanInst,
        'sd_DKydWL8w0LPjBsvB'
      );
    }
  }

  async sd_JsdEMqwtxNcCaDId(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JsdEMqwtxNcCaDId',
      parentSpanInst
    );
    try {
      console.log(bh.input.body, 'heyyyyy');
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
            contact: `+91${bh.input.body.userPhoneNumber}`,
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
          callback_url: 'https://google.com',
          callback_method: 'get',
        })
        .then((response) => {
          console.log(response);
        });
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_B0d0DSpjmuevaSbL(bh, parentSpanInst);
      //appendnew_next_sd_JsdEMqwtxNcCaDId
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JsdEMqwtxNcCaDId',
        spanInst,
        'sd_JsdEMqwtxNcCaDId'
      );
    }
  }

  async sd_B0d0DSpjmuevaSbL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_B0d0DSpjmuevaSbL',
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
      bh = await this.sd_00YKSZmMcrTD2gfN(bh, parentSpanInst);
      //appendnew_next_sd_B0d0DSpjmuevaSbL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_B0d0DSpjmuevaSbL',
        spanInst,
        'sd_B0d0DSpjmuevaSbL'
      );
    }
  }

  async sd_00YKSZmMcrTD2gfN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_00YKSZmMcrTD2gfN',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        body: 'order created successfully!',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_00YKSZmMcrTD2gfN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_00YKSZmMcrTD2gfN',
        spanInst,
        'sd_00YKSZmMcrTD2gfN'
      );
    }
  }

  async sd_XgDo6WDxCJiMBYCz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XgDo6WDxCJiMBYCz',
      parentSpanInst
    );
    try {
      bh.local.response = bh.error;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_XgDo6WDxCJiMBYCz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XgDo6WDxCJiMBYCz',
        spanInst,
        'sd_XgDo6WDxCJiMBYCz'
      );
    }
  }

  async sd_HXSlgMwQB38G7Pel(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HXSlgMwQB38G7Pel',
      parentSpanInst
    );
    try {
      // bh.local.collection = 'orders';

      const arr = bh.input.body.product.map((p) => p.productid);

      bh.local.query = { _id: { $in: arr } };
      bh.local.collection = 'product';
      bh.local.orderCollection = 'orders';
      bh.local.couponCollection = 'coupon';
      bh.local.findQuery = { couponcode: bh.input.body.couponcode };

      bh.local.filter = {
        projection: {
          price: 1,
        },
      };
      // bh.local.result = arr
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_kj2TTaVA8iBqMpbv(bh, parentSpanInst);
      //appendnew_next_sd_HXSlgMwQB38G7Pel
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HXSlgMwQB38G7Pel',
        spanInst,
        'sd_HXSlgMwQB38G7Pel'
      );
    }
  }

  async sd_kj2TTaVA8iBqMpbv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kj2TTaVA8iBqMpbv',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.collection,
        bh.local.query,
        bh.local.filter
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_O2pItd3j5mzgk25Q(bh, parentSpanInst);
      //appendnew_next_sd_kj2TTaVA8iBqMpbv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kj2TTaVA8iBqMpbv',
        spanInst,
        'sd_kj2TTaVA8iBqMpbv'
      );
    }
  }

  async sd_O2pItd3j5mzgk25Q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_O2pItd3j5mzgk25Q',
      parentSpanInst
    );
    try {
      let arr = bh.input.body.product.map((x) => {
        bh.local.result.find((y) => {
          if (x.productid == y._id) {
            x.price = y.price;
          }
        });
        return x;
      });

      bh.local.total = arr.reduce((acc, curr) => {
        acc = acc + curr.price * curr.count;
        return acc;
      }, 0);

      bh.local.orderCreated = {
        customerNumber: bh.input.body.userPhoneNumber,
        empId: bh.input.body.employeeId,
        totalAmount: bh.local.total,
        product: arr,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CT0i6ritVFz9JNhp(bh, parentSpanInst);
      //appendnew_next_sd_O2pItd3j5mzgk25Q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_O2pItd3j5mzgk25Q',
        spanInst,
        'sd_O2pItd3j5mzgk25Q'
      );
    }
  }

  async sd_CT0i6ritVFz9JNhp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CT0i6ritVFz9JNhp',
      parentSpanInst
    );
    try {
      bh.local.couponFind = await MongoPersistance.getInstance().find(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.couponCollection,
        bh.local.findQuery,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AswNpWZEpOaTfMLV(bh, parentSpanInst);
      //appendnew_next_sd_CT0i6ritVFz9JNhp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CT0i6ritVFz9JNhp',
        spanInst,
        'sd_CT0i6ritVFz9JNhp'
      );
    }
  }

  async sd_AswNpWZEpOaTfMLV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AswNpWZEpOaTfMLV',
      parentSpanInst
    );
    try {
      console.log(bh.local.couponFind);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.check(bh, parentSpanInst);
      //appendnew_next_sd_AswNpWZEpOaTfMLV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AswNpWZEpOaTfMLV',
        spanInst,
        'sd_AswNpWZEpOaTfMLV'
      );
    }
  }

  async check(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('check', parentSpanInst);
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.couponFind,
          '0',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Br7e96bgYxaN2zxn(bh, parentSpanInst);
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
        bh = await this.sd_Hp8gItFudSH0fAcU(bh, parentSpanInst);
        otherwiseFlag = false;
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_l11SHFGqNOmy628x',
        spanInst,
        'check'
      );
    }
  }

  async sd_Br7e96bgYxaN2zxn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Br7e96bgYxaN2zxn',
      parentSpanInst
    );
    try {
      const discountPercentage = bh.local.couponFind[0]?.percentage;

      const totalAmount = bh.local.orderCreated.totalAmount;
      const discoutedPrice =
        totalAmount - (discountPercentage / 100) * totalAmount;

      bh.local.orderCreated.totalAmount = discoutedPrice;
      bh.local.orderCreated.couponDetails = bh.local.couponFind[0]?.percentage;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1aKatrQ39tIIjatI(bh, parentSpanInst);
      //appendnew_next_sd_Br7e96bgYxaN2zxn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Br7e96bgYxaN2zxn',
        spanInst,
        'sd_Br7e96bgYxaN2zxn'
      );
    }
  }

  async sd_1aKatrQ39tIIjatI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1aKatrQ39tIIjatI',
      parentSpanInst
    );
    try {
      const Razorpay = require('razorpay');
      var instance = new Razorpay({
        key_id: 'rzp_test_JK2eMcWr8sfXEU',
        key_secret: 'LwCYMNILRX63OEKmwIzORX0f',
      });

      // instance.paymentLink.create({
      //   amount: Math.round(bh.local.orderCreated.totalAmount),
      //   currency: "INR",
      //   accept_partial: true,
      //   first_min_partial_amount: 100,
      //   description: "For XYZ purpose",
      //   customer: {
      //     contact: `+91${bh.input.body.userPhoneNumber}`
      //   },
      //   notify: {
      //     sms: true,
      //     email: false,
      //     whatsapp: true
      //   },
      //   reminder_enable: true,
      //   notes: {
      //     policy_name: "Jeevan Bima"
      //   },
      //   callback_url: "https://google.com",
      //   callback_method: "get"
      // }).then((response) => {
      //   console.log(response)
      //   bh.local.result = response;
      // })

      const resp = await instance.paymentLink.create({
        amount: Math.round(bh.local.orderCreated.totalAmount),
        currency: 'INR',
        accept_partial: true,
        first_min_partial_amount: 100,
        description: 'For XYZ purpose',
        customer: {
          contact: `+91${bh.input.body.userPhoneNumber}`,
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
        callback_url: 'https://google.com',
        callback_method: 'get',
      });

      bh.local.razorresp = resp;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CjZ81CJf4kyTD2uD(bh, parentSpanInst);
      //appendnew_next_sd_1aKatrQ39tIIjatI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1aKatrQ39tIIjatI',
        spanInst,
        'sd_1aKatrQ39tIIjatI'
      );
    }
  }

  async sd_CjZ81CJf4kyTD2uD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CjZ81CJf4kyTD2uD',
      parentSpanInst
    );
    try {
      bh.local.orderCreated.paymentStatus = bh.local.razorresp.status;
      bh.local.orderCreated.paymentid = bh.local.razorresp.id;

      // bh.local.orderCreated.product.forEach((x)=>{
      //     x.productid = ObjectId(x.productid)
      // })

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cjLmFd0z2K4JvvvL(bh, parentSpanInst);
      //appendnew_next_sd_CjZ81CJf4kyTD2uD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CjZ81CJf4kyTD2uD',
        spanInst,
        'sd_CjZ81CJf4kyTD2uD'
      );
    }
  }

  async sd_cjLmFd0z2K4JvvvL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cjLmFd0z2K4JvvvL',
      parentSpanInst
    );
    try {
      bh.local.insertresp = await MongoPersistance.getInstance().insertOne(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.orderCollection,
        bh.local.orderCreated,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iAaLFv9i6sSko6od(bh, parentSpanInst);
      //appendnew_next_sd_cjLmFd0z2K4JvvvL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cjLmFd0z2K4JvvvL',
        spanInst,
        'sd_cjLmFd0z2K4JvvvL'
      );
    }
  }

  async sd_iAaLFv9i6sSko6od(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iAaLFv9i6sSko6od',
      parentSpanInst
    );
    try {
      bh.local.result = bh.local.orderCreated;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_iAaLFv9i6sSko6od
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iAaLFv9i6sSko6od',
        spanInst,
        'sd_iAaLFv9i6sSko6od'
      );
    }
  }

  async sd_Hp8gItFudSH0fAcU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Hp8gItFudSH0fAcU',
      parentSpanInst
    );
    try {
      bh.local.orderCreated.couponDetails = 0;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_1aKatrQ39tIIjatI(bh, parentSpanInst);
      //appendnew_next_sd_Hp8gItFudSH0fAcU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Hp8gItFudSH0fAcU',
        spanInst,
        'sd_Hp8gItFudSH0fAcU'
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
      (await this.sd_mUkecRpT5ovyMta9(bh, parentSpanInst))
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
  async sd_mUkecRpT5ovyMta9(bh, parentSpanInst) {
    const nodes = ['sd_hPw3YDcFCVuCLedU'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_XgDo6WDxCJiMBYCz(bh, parentSpanInst);
      //appendnew_next_sd_mUkecRpT5ovyMta9
      return true;
    }
    return false;
  }
  //appendnew_flow_order_service_Catch
}
