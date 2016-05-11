// JavaScript Documentfunction init() {

      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      draw(ctx);
    }

    function draw(ctx) {

      // layer1/Compound Path
      ctx.save();
      ctx.beginPath();

      // layer1/Compound Path/Path
      ctx.moveTo(25.8, 46.3);
      ctx.lineTo(32.5, 46.3);
      ctx.lineTo(32.5, 30.0);
      ctx.lineTo(37.0, 30.0);
      ctx.lineTo(37.6, 24.4);
      ctx.lineTo(32.5, 24.4);
      ctx.lineTo(32.5, 21.6);
      ctx.bezierCurveTo(32.5, 20.1, 32.7, 19.3, 34.8, 19.3);
      ctx.lineTo(37.6, 19.3);
      ctx.lineTo(37.6, 13.7);
      ctx.lineTo(33.1, 13.7);
      ctx.bezierCurveTo(27.7, 13.7, 25.8, 16.4, 25.8, 21.0);
      ctx.lineTo(25.8, 24.4);
      ctx.lineTo(22.4, 24.4);
      ctx.lineTo(22.4, 30.0);
      ctx.lineTo(25.8, 30.0);
      ctx.lineTo(25.8, 46.3);
      ctx.closePath();

      // layer1/Compound Path/Path
      ctx.moveTo(30.0, 60.0);
      ctx.bezierCurveTo(13.4, 60.0, 0.0, 46.6, 0.0, 30.0);
      ctx.bezierCurveTo(0.0, 13.4, 13.4, 0.0, 30.0, 0.0);
      ctx.bezierCurveTo(46.6, 0.0, 60.0, 13.4, 60.0, 30.0);
      ctx.bezierCurveTo(60.0, 46.6, 46.6, 60.0, 30.0, 60.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(121, 131, 124)";
      ctx.fill();
      ctx.restore();
    }