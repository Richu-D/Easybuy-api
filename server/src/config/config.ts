export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
<<<<<<< HEAD
<<<<<<< HEAD
      { __ssdGlobalMiddlewares__: 'sd_gjDViOtqknkKfAW0' },
=======
      { __ssdGlobalMiddlewares__: 'sd_2hBZjlncSVhHsAYH' },
>>>>>>> employee
=======
      { __ssdGlobalMiddlewares__: 'sd_2hBZjlncSVhHsAYH' },
>>>>>>> employee
      { __ssdGlobalMiddlewares__: 'sd_Tp9jNbUvUZ1kJnAn' },
    ],
    post: [],
    sequences: {
      employeeCheck: {
<<<<<<< HEAD
<<<<<<< HEAD
        pre: [{ pre_middleware: 'adminCheckMiddleware' }],
=======
        pre: [{ pre_middleware: 'employeeCheckMiddleware' }],
>>>>>>> employee
=======
        pre: [{ pre_middleware: 'employeeCheckMiddleware' }],
>>>>>>> employee
        post: [],
      },
    },
  },
};
