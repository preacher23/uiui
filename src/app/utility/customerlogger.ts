
import { Injectable, InjectionToken } from '@angular/core';

export const LOGGER_TOKEN = new InjectionToken<BaseLogger>('LoggerToken');

export interface ILogger {
  Log(): void;
}

export abstract class BaseLogger implements ILogger {
  abstract Log(): void;
}

@Injectable({
  providedIn: 'root',
})
export class ConsoleLogger extends BaseLogger {
  Log() {
    console.log("Using console logger");
  }
}

@Injectable({
  providedIn: 'root',
})
export class DbLogger extends BaseLogger {
  Log() {
    console.log("Using DB logger");
  }
}

@Injectable({
  providedIn: 'root',
})
export class FileLogger extends BaseLogger {
  Log() {
    console.log("Using file logger");
  }
}
