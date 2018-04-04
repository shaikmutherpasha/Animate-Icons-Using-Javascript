    // battery Charge
    function batteryCharge(){
    let battery = document.getElementById('battery');
    battery.innerHTML = '&#xf244';

    setTimeout(function(){
      battery.innerHTML = '&#xf243';
    },1000);
    setTimeout(function(){
      battery.innerHTML = '&#xf242';
    },2000);
    setTimeout(function(){
      battery.innerHTML = '&#xf241';
    },3000);
    setTimeout(function(){
      battery.innerHTML = '&#xf240';
    },4000);
  }

  batteryCharge();

  setInterval(batteryCharge,5000);

  // Thermometer
   function thermometer(){
    let thermometer = document.getElementById('thermometer');
    thermometer.innerHTML = '&#xf2cb';

    setTimeout(function(){
      thermometer.innerHTML = '&#xf2ca';
    },1000);

     setTimeout(function(){
      thermometer.innerHTML = '&#xf2c9';
    },2000);

    setTimeout(function(){
      thermometer.innerHTML = '&#xf2c8';
    },3000);

  setTimeout(function(){
      thermometer.innerHTML = '&#xf2c7';
    },4000);

  }

  thermometer();

  setInterval(thermometer,5000);

  //  hour glass animation

     function hourGlass(){
    let hourGlass = document.getElementById('hourGlass');
    hourGlass.innerHTML = '&#xf251';

     setTimeout(function(){
      hourGlass.innerHTML = '&#xf252';
    },1000);

    setTimeout(function(){
      hourGlass.innerHTML = '&#xf253';
    },2000);

  setTimeout(function(){
      hourGlass.innerHTML = '&#xf254';
    },3000);

  }

  hourGlass();

  setInterval(hourGlass,4000);
