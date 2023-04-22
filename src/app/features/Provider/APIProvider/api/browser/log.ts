import log from "loglevel";

export function initAPI() {
  registerPersister();
  log.setLevel("trace", true);
}

function registerPersister() {
  const factory = log.methodFactory;
  log.methodFactory = (methodName, logLevel, loggerName) => {
    const log = factory(methodName, logLevel, loggerName);
    return (message) => {
      log("A" + message);
    };
  };
}
