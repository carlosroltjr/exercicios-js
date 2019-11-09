const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 6', () => {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(() => {
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!');
}, 20000);

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(6, 7)]
regra.hour = 19;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
});