class EmptyTask {
    async init(){
        this.log.info('some init things')
    }
    async runBefore(){
        this.log.info('Called before the task runs')
    }
    async run(){
        this.log.info(`start run task:`)
    }
}

module.exports = EmptyTask
