class President {
    constructor(shield) {
        this._shield = shield
        this._frequency = 0
    }

    intrusion(command) {
        let cmd = command
        const last_CS = cmd.lastIndexOf('CS')

        const _change = (i, j) => {
            let buffer = cmd.split('')
            buffer[i] = cmd[j]
            buffer[j] = cmd[i]
            cmd = buffer.join('')
        }       

        if(last_CS !== -1) {
            _change(last_CS, last_CS + 1)
        }

        return cmd
    }

    defend(damage) {
        if(damage <= this._shield) {
            return true
        }
        return false
    }

    addFrequency() {
        this._frequency++
    }

    get frequency() {
        return this._frequency
    }

    get shield() {
        return this._shield
    }
}

module.exports = President