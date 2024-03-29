class EventEmitter {
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */

  constructor() {
    this.subscriptions = {};
  }

  subscribe(eventName, callback) {
    const id = Math.random();

    if (this.subscriptions.hasOwnProperty(eventName)) {
      this.subscriptions[eventName].push({ callback, id });
    } else {
      this.subscriptions[eventName] = [{ callback, id }];
    }

    return {
      unsubscribe: () => {
        const idx = this.subscriptions[eventName].findIndex(
          (sub) => sub.id === id
        );
        this.subscriptions[eventName].splice(idx, 1);

        if (this.subscriptions[eventName].length === 0) {
          delete this.subscriptions[eventName];
        }
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.subscriptions.hasOwnProperty(eventName)) {
      return [];
    }

    return this.subscriptions[eventName].map((event) =>
      event.callback.call(this, ...args)
    );
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
