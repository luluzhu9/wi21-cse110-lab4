var nIntervId;
nIntervId = setInterval(updateTime, 1000);

function updateTime(){
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
