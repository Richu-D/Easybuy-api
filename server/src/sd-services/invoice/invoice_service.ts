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
export class invoice_service {
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
    this.serviceName = 'invoice_service';
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
      instance = new invoice_service(
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
      //appendnew_flow_invoice_service_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: invoice_service');

    //appendnew_flow_invoice_service_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: invoice_service');
    //appendnew_flow_invoice_service_HttpIn
  }
  //   service flows_invoice_service

  async sd_VQmWfu8sYPOoR8Tw(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sd_VQmWfu8sYPOoR8Tw',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gIodzh3YvwMSGZlq(bh, parentSpanInst);
      //appendnew_next_sd_VQmWfu8sYPOoR8Tw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VQmWfu8sYPOoR8Tw',
        spanInst,
        'sd_VQmWfu8sYPOoR8Tw'
      );
    }
  }

  async sendInvoice(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'sendInvoice',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sendMail(bh, parentSpanInst);
      //appendnew_next_sendInvoice
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cm1ABcxd7ZLyf0YC',
        spanInst,
        'sendInvoice'
      );
    }
  }

  //appendnew_flow_invoice_service_start

  async sd_gIodzh3YvwMSGZlq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gIodzh3YvwMSGZlq',
      parentSpanInst
    );
    try {
      console.log(bh.input.params);
      const { ObjectId } = require('mongodb');

      const idString = bh.input.params.id;

      if (ObjectId.isValid(idString)) {
        bh.local.isIdValid = true;
      } else {
        bh.local.isIdValid = false;
      }

      bh.local.collection = 'orders';
      bh.local.query = [
        { $match: { _id: ObjectId(idString) } },
        { $unwind: '$product' },
        {
          $lookup: {
            from: 'product',
            localField: 'product.productid',
            foreignField: '_id',
            as: 'productDetails',
          },
        },
        {
          $group: {
            _id: '$_id',
            customerNumber: { $first: '$customerNumber' },
            empId: { $first: '$empId' },
            totalAmount: { $first: '$totalAmount' },
            paymentStatus: { $first: '$paymentStatus' },
            paymentid: { $first: '$paymentid' },
            discountPercentage: { $first: '$couponDetails' },
            products: {
              $push: {
                productid: '$product.productid',
                count: '$product.count',
                price: '$product.price',
                productDetails: {
                  _id: { $arrayElemAt: ['$productDetails._id', 0] },
                  name: { $arrayElemAt: ['$productDetails.name', 0] },
                  gram: {
                    $toInt: { $arrayElemAt: ['$productDetails.gram', 0] },
                  },
                },
                totalPrice: {
                  $multiply: [
                    '$product.count',
                    // { $toInt: { $arrayElemAt: ["$productDetails.gram", 0] } },
                    '$product.price',
                  ],
                },
              },
            },
          },
        },
        // {
        //   $group: {
        //     _id: '$_id',
        //     customerNumber: { $first: '$customerNumber' },
        //     empId: { $first: '$empId' },
        //     totalAmount: { $first: '$totalAmount' },
        //     paymentStatus: { $first: '$paymentStatus' },
        //     paymentid: { $first: '$paymentid' },
        //     products: {
        //       $push: {
        //         productid: '$product.productid',
        //         count: '$product.count',
        //         price: '$product.price',
        //         productDetails: {
        //         //  $push: {
        //             _id: '$productDetails._id',
        //             name: '$productDetails.name',
        //             gram: '$productDetails.gram'
        //         //  }
        //         }
        //       }
        //     }
        //   }
        // }

        //   {
        //   $group: {
        //     _id: {
        //       id: "$_id",
        //       customerNumber: "$customerNumber",
        //       empId: "$empId",
        //       paymentStatus: "$paymentStatus",
        //       paymentid: "$paymentid"
        //     },
        //     products: {
        //       $push: {
        //         productid: "$productDetails._id",
        //         count: "$productDetails.count",
        //         price: "$productDetails.product.price",
        //         productDetails: {
        //           name: "$productDetails.product.name",
        //           gram: "$productDetails.gram"
        //         },
        //         total_price: {
        //           $multiply: ["$productDetails.count", "$productDetails.product.price"]
        //         }
        //       }
        //     },
        //     totalAmount: { $sum: { $multiply: ["$productDetails.count", "$productDetails.product.price"] } }
        //   }
        // },
        // {
        //   $addFields: {
        //     "products.total_price": {
        //       $sum: "$products.total_price"
        //     }
        //   }
        // },
      ];
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sdVumFRSw5JbpqEP(bh, parentSpanInst);
      //appendnew_next_sd_gIodzh3YvwMSGZlq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gIodzh3YvwMSGZlq',
        spanInst,
        'sd_gIodzh3YvwMSGZlq'
      );
    }
  }

  async sd_sdVumFRSw5JbpqEP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sdVumFRSw5JbpqEP',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isIdValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9yGjAXNXMtOFPAsU(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isIdValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_6uW3PO29Nqz9dGcp(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sdVumFRSw5JbpqEP',
        spanInst,
        'sd_sdVumFRSw5JbpqEP'
      );
    }
  }

  async sd_9yGjAXNXMtOFPAsU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9yGjAXNXMtOFPAsU',
      parentSpanInst
    );
    try {
      console.log('valid');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OLGNasvXDlRSL3TD(bh, parentSpanInst);
      //appendnew_next_sd_9yGjAXNXMtOFPAsU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9yGjAXNXMtOFPAsU',
        spanInst,
        'sd_9yGjAXNXMtOFPAsU'
      );
    }
  }

  async sd_OLGNasvXDlRSL3TD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OLGNasvXDlRSL3TD',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().aggregate(
        'sd_qYoT2PgM4f1tomGX',
        bh.local.collection,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_OLGNasvXDlRSL3TD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OLGNasvXDlRSL3TD',
        spanInst,
        'sd_OLGNasvXDlRSL3TD'
      );
    }
  }

  async sd_6uW3PO29Nqz9dGcp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6uW3PO29Nqz9dGcp',
      parentSpanInst
    );
    try {
      console.log('not valid');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_6uW3PO29Nqz9dGcp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6uW3PO29Nqz9dGcp',
        spanInst,
        'sd_6uW3PO29Nqz9dGcp'
      );
    }
  }

  async sendMail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendMail', parentSpanInst);
    try {
      console.log(bh.input.body, typeof bh.input.body.invoice);

      const htmlMinifier = require('html-minifier').minify;
      const minifiedInvoice = htmlMinifier(bh.input.body.invoice, {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      });

      const nodemailer = require('nodemailer');

      let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: 'easybuyapi@outlook.com',
          pass: 'brototype123',
        },
      });

      transporter.sendMail({
        from: 'easybuyapi@outlook.com',
        to: bh.input.body.email,
        subject: 'Invoice',
        text: 'Here is your invoice!',
        html: `<span>${minifiedInvoice}</span>`,
      });

      //  attachments: [{   // stream as an attachment
      //           filename: 'invoice.jpg',
      //           content: bh.input.body.invoice
      //       }]

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sendMail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_F3u4BbFmLY3UFGlf',
        spanInst,
        'sendMail'
      );
    }
  }

  async sd_YZ9ErhwPKy2WPpFW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YZ9ErhwPKy2WPpFW',
      parentSpanInst
    );
    try {
      console.log(bh.error);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_YZ9ErhwPKy2WPpFW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YZ9ErhwPKy2WPpFW',
        spanInst,
        'sd_YZ9ErhwPKy2WPpFW'
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
      (await this.sd_Bi6ebXaGq6SU4RM5(bh, parentSpanInst))
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
  async sd_Bi6ebXaGq6SU4RM5(bh, parentSpanInst) {
    const nodes = ['sd_F3u4BbFmLY3UFGlf'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_YZ9ErhwPKy2WPpFW(bh, parentSpanInst);
      //appendnew_next_sd_Bi6ebXaGq6SU4RM5
      return true;
    }
    return false;
  }
  //appendnew_flow_invoice_service_Catch
}
