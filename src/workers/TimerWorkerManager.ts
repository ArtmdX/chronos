import { TaskStateModel } from '../models/TaskStateModel';

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      instance = new TimerWorkerManager();
    }

    return instance;
  }

  postMessage(message: TaskStateModel) {
    this.worker.postMessage(message);
  }

  onMessage(callback: (e: MessageEvent) => void) {
    this.worker.onmessage = callback;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
