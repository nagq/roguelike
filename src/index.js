const readline = require('node:readline');
const process = require('node:process');

const print = (str) => {
  process.stdout.write('\x1Bc');
  process.stdout.write(`\r${str}`)
};

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

process.stdin.on('keypress', (str, key) => {
  if (key.sequence === '\u0003' || key.name === 'q') {
    print('退出程序');
    process.exit();
  }

  if (key.name) {
    print(`你按了 ${key.name} 键`);
  }

  if (key.name === 'up') {
    print('#####\n#   #\n#   #\n#####');
  }
});

// 处理程序退出
process.on('exit', () => {
  process.stdin.setRawMode(false);
  process.stdin.end();
});
