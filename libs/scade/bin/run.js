import {supervise} from '../platform/Checker'
import {run} from '../utils/Task'
import {selector, attribute, checks, pattern, time} from '../tasks/ccb'

function task() {
    supervise(selector, attribute, checks, pattern)
}

run(task, time)
