function run(task, time) {
    console.clear()
    task()
    if (typeof time === 'number') {
        setInterval(task, time)
    }
}

export default {
    run,
}