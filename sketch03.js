const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')


const settings = {
  dimensions: [ 1000, 1000 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cx = width/2
    const cy = height/2
    const radius = width*0.3
    const num = 12
    const slice = math.degToRad(360/num)

    for (let i=0;i<num;i++){
      const angle = slice*i
      context.save()
      context.translate(cx,cy)
      context.rotate(-angle)
      context.lineWidth = random.range(0.2,20)
      context.beginPath()
      context.arc(0,0,radius*random.range(0.7, 1.3),-angle/3,angle/3)
      context.stroke()
      context.restore()
    }
  };
};

canvasSketch(sketch, settings);
