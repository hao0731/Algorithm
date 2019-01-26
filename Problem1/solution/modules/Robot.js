class Robot {
    constructor(command) {
        this._command = command
        this._damage = this.calc()
    }

    calc() {
        let point = 1
        let result = 0
        for(let i = 0;i < this._command.length;i++) {
            switch (this._command[i]) {
                case 'C':
                    point *= 2
                    break
                case 'S':
                    result += point
            }
        }
        return result
    }

    get damage() {
        return this._damage
    }

    get command() {
        return this._command
    }

    set input(command) {
        this._command = command
        this._damage = this.calc()
    }
}

module.exports = Robot