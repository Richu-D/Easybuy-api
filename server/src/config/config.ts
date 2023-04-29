export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { __ssdGlobalMiddlewares__: 'sd_gjDViOtqknkKfAW0' },
      { __ssdGlobalMiddlewares__: 'sd_Tp9jNbUvUZ1kJnAn' },
    ],
    post: [],
    sequences: {
      employeeCheck: {
        pre: [{ pre_middleware: 'adminCheckMiddleware' }],
        post: [],
      },
    },
  },
};
