export const queuedClass = (instancePromise) => {
    let queueClassInstance = null;
    const queue = {}
    let pending = false;
  
    return (classProperty, arg) => {
      if (queueClassInstance) {
        queueClassInstance[classProperty](arg);
      } else {
        if (!queue.classProperty) {
          queue.classProperty = []
        }
        queue[classProperty].push(arg);
  
        if (!pending) {
          pending = true;
          instancePromise
            .then((classRef) => {
              queueClassInstance = classRef;
              queue[classProperty].forEach(classRef[classProperty]);
              queue.classProperty = [];
            })
            .catch((err) => console.log(`Error getting queued function`));
        }
      }
    };
  };

  /*
const fetchProxyInstanceWithQueue = queuedClass(
    import("infrastructure-remote/Fetch").then(({ default: classRef }) => new classRef)
);
*/
