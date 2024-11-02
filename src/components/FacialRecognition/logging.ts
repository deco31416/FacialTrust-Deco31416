const dom: { log: HTMLDivElement | undefined, status: HTMLDivElement | undefined, perf: HTMLDivElement | undefined } = { log: undefined, status: undefined, perf: undefined };

export const log = (...msg: any) => {
  if (typeof document !== 'undefined') {
    if (!dom.log) dom.log = document.getElementById('log') as HTMLDivElement;
    if (dom.log) {
      dom.log.innerText += msg.join(' ') + '\n';
    } else {
      console.warn('Elemento con ID "log" no encontrado.');
    }
  }
  console.log(...msg);
};

export const status = (msg: string) => {
  if (typeof document !== 'undefined') {
    if (!dom.status) dom.status = document.getElementById('status') as HTMLDivElement;
    console.log('status', msg, dom.status?.innerText);
    if (dom.status) {
      dom.status.innerText = msg;
    } else {
      console.warn('Elemento con ID "status" no encontrado.');
    }
  }
};
