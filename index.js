const {Job} = require('copha')

class JobName extends Job {
    constructor(taskConf) {
        super(taskConf)
    }
    async run(){
    	console.log('job running...')
    }
}

module.exports = JobName
