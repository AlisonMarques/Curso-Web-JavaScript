const schedule = require('node-schedule');

// Tarefa temporizada
// ('*/5') signfiica que vai ser executada de 5 em 5 segundos
// ( * ) seria o valor do minuto, mas deixamos pra qualquer um
// ( 17 ) é a hora que queremos que execute
//  Os proximos (* *) seria o mês
// (4 - quinta-feira) É o dia da semana que voce quer q execute

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 4', function () {
  console.log('Executando Tarefa 1!', new Date().getSeconds());
});

/**
 * Cancelando o temporizador da tarefa 1
 * Após 20 segundos
 */
setTimeout(function () {
  tarefa1.cancel();
  console.log('Cancelando Tarefa 1');
}, 20000);

const regra = new schedule.RecurrenceRule();
// dias da semana (1 - 5 = de segunda a sexta)
regra.dayOfWeek = new schedule.Range(1, 5);
regra.hour = 17;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log('Executando Tarefa 2!', new Date().getSeconds());
});
