class Stack {
    constructor(arr = []) {
        this.stack = arr;
    }

    push(value) {

        return this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    /** 查看堆栈顶部的对象，但不从堆栈中移除它 */
    peek() {
        return this.stack[this.stack.length - 1];
    }

    /** 判断堆栈是否为空 */
    isEmpty() {
        return this.stack.length === 0;
    }
}
const sessionKey = '__history_keys__';
export default class AppHistory {
    constructor() {
        console.log(window.history.state.key); // 546.335
        let str = sessionStorage.getItem(sessionKey + window.history.state.key);
        let arr = str ? JSON.parse(str) : [];
        console.log(str, arr);
        // let str = sessionStorage.setItem(sessionKey, JSON.stringify(this.history.stack));
        // let json =
        // 历史记录
        this.history = new Stack(arr); // new CircularQueue(5); // []; // new Stack();

        this._pushListeners = [];
        this._backListeners = [];
        // 调整新页面是不触发该回调的
        this.nextState = null;
        window.addEventListener('popstate', ({state}) => {
            this.nextState = state;
        });
    }
    _cache() {
        this.history.stack.forEach(key => {
            this._removeCache(key);
        });
        sessionStorage.setItem(sessionKey + window.history.state.key, JSON.stringify(this.history.stack));
    }
    _removeCache(key) {
        sessionStorage.removeItem(sessionKey + key);
    }

    /**
     * 获取当前的历史记录
     */
    get last() {
        return this.history.peek();
    }

    /**
     * 添加前进的监听器
     * @param {Function} listener
     */
    addPushListener(listener) {
        this._pushListeners.push(listener);
    }

    /**
     * 删除前进的监听器
     * @param {Function} listener
     */
    removePushListener(listener) {
        let listeners = this._pushListeners;
        this._pushListeners = listeners.filter(item => item !== listener);
    }

    /**
     * 添加后退的监听器
     * @param {Function} listener
     */
    addBackListener(listener) {
        this._backListeners.push(listener);
    }

    /**
     * 删除后退的监听器
     * @param {Function} listener
     */
    removeBackListener(listener) {
        let listeners = this._backListeners;
        this._backListeners = listeners.filter(item => item !== listener);
    }

    _asyncPush() {
        setTimeout(() => {
            let state = window.history.state;
            // 入队
            let key = state && state.key;
            if (this.last && this.last === key) {
                // ignore
            } else {
                this.history.push(state && state.key);
            }

            this._cache();
        }, 100);
    }

    /**
     * 通知指定的监听器列表
     * @param listeners 监听器
     * @private
     */
    _notify(listeners = []) {
        listeners.forEach(func => func());
    }

    watch() {
        // 先取出栈顶
        let top = this.history.pop(); // 等同于回退
        this._removeCache(top);
        if (this.nextState && this.nextState.key === this.last) { // 可以是上一页或者下一页的state
            // 成功后通知
            this._notify(this._backListeners);
            this._cache();
        } else { // 跳转页面
            if (top) this.history.push(top);
            this._asyncPush();
            // 成功后通知
            this._notify(this._pushListeners);
        }

        this.nextState = null;
    }
}
