export default class Storage {
    static set(key, value, storage = 'sessionStorage') {
        return window[storage].setItem(key, value)
    }

    static get(key, storage = 'sessionStorage') {
        return window[storage].getItem(key)
    }

    static remove(key, storage = 'sessionStorage') {
        return window[storage].removeItem(key)
    }

    static clear(storage = 'sessionStorage') {
        return window[storage].clear()
    }
}


// Storage.set('name', 'czf')
// Storage.get('name')