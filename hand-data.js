// Stylized illustration of the 21-point MediaPipe hand topology. These are not inference results.
export const landmarks = [
  [0, -.72, 0], [-.28, -.35, .08], [-.49, -.12, .08], [-.68, .05, .06], [-.85, .16, .02],
  [-.23, .06, 0], [-.31, .47, .01], [-.32, .78, .02], [-.31, 1.04, .01],
  [.04, .13, 0], [.02, .61, .01], [.03, .98, .02], [.05, 1.23, .01],
  [.28, .09, 0], [.34, .52, .01], [.39, .83, .02], [.43, 1.04, .01],
  [.49, -.03, 0], [.63, .27, .02], [.73, .49, .02], [.81, .65, .01]
];

export const landmarkNames = [
  'WRIST',
  'THUMB_CMC', 'THUMB_MCP', 'THUMB_IP', 'THUMB_TIP',
  'INDEX_MCP', 'INDEX_PIP', 'INDEX_DIP', 'INDEX_TIP',
  'MIDDLE_MCP', 'MIDDLE_PIP', 'MIDDLE_DIP', 'MIDDLE_TIP',
  'RING_MCP', 'RING_PIP', 'RING_DIP', 'RING_TIP',
  'PINKY_MCP', 'PINKY_PIP', 'PINKY_DIP', 'PINKY_TIP'
];

export const keyLandmarks = [0, 4, 8, 12, 16, 20];

export const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [5, 9], [9, 10], [10, 11], [11, 12],
  [9, 13], [13, 14], [14, 15], [15, 16],
  [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]
];

export function createHandPoints(count = 4200) {
  let seed = 6723;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const output = [];
  for (let i = 0; i < count; i++) {
    const kind = random();
    let x, y, z;
    if (kind < .55) {
      const finger = Math.floor(random() * 5);
      const joint = Math.floor(random() * 3);
      const start = finger === 0 ? 1 : 5 + (finger - 1) * 4;
      const a = landmarks[start + joint];
      const b = landmarks[start + joint + 1];
      const t = random();
      const theta = random() * Math.PI * 2;
      const radius = (finger === 0 ? .075 : .066) * (1 - .25 * (joint + t) / 3);
      const r = Math.sqrt(random()) * radius;
      x = a[0] + (b[0] - a[0]) * t + Math.cos(theta) * r;
      y = a[1] + (b[1] - a[1]) * t + Math.sin(theta) * r * .35;
      z = a[2] + Math.sin(theta) * r;
    } else if (kind < .9) {
      const a = random() * Math.PI * 2;
      const r = Math.sqrt(random());
      x = .1 + Math.cos(a) * r * .48;
      y = -.25 + Math.sin(a) * r * .48;
      z = (random() - .5) * .21 * (1 - .35 * r);
    } else {
      x = .07 + (random() - .5) * .44;
      y = -.67 - random() * .47;
      z = (random() - .5) * .17;
    }
    output.push(x, y, z);
  }
  return new Float32Array(output);
}
