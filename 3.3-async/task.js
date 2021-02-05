class AlarmClock{
  constructor() {
      this.alarmCollection = [];
      this.timerId = null;
  }

  addClock(time, callback, id) {
      if (!id) {
          throw new Error("Не задан id таймера");
      }

      if (this.alarmCollection.some(currAlarm => currAlarm.id === id)) {
          console.error(`Будильник с id = ${id} уже существует`)
          return;
      }

      this.alarmCollection.push({id, time, callback});
  }

  removeClock(id) {
      if (this.alarmCollection.findIndex(currAlarm => currAlarm.id === id) !== -1) {
          this.alarmCollection = this.alarmCollection.filter(currAlarm => currAlarm.id !== id);
          return true;
      }

      return false;
  }

  getCurrentFormattedTime(){
      const currentDate = new Date();
      const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
      const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;

      return `${hours}:${minutes}`;
  }

  start() {
      const checkClock = (alarm) => {
        if (this.getCurrentFormattedTime() === alarm.time) alarm.callback()
      }
      
      if (!this.timerId) {
          this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
      }
  }

  stop() {
      if (this.timerId) {
          clearInterval(this.timerId);
          this.timerId = null;
      }
  }

  printAlarms() {
      this.alarmCollection.forEach(currAlarm => console.log(`id: ${currAlarm.id}, time: ${currAlarm.time}`));
  }

  clearAlarms() {
      clearInterval(this.timerId);
      this.alarmCollection = [];
      this.timerId = null;
  }
}

function testCase () {
  let newCall = new AlarmClock();
  newCall.addClock('11:29', () => console.log('Пора вставать'), 1);
  newCall.addClock('11:30', () => {console.log('Давай, вставай уже!'); newCall.removeClock(2)}, 2);
  newCall.addClock('11:33', () => {
    console.log('Вставай, а то проспишь!');
    newCall.clearAlarms();
    newCall.printAlarms();
  },3);
  
  newCall.addClock('11:30', () => console.log('пора вставать'), 1);

  newCall.printAlarms();
  newCall.start();

}