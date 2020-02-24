interface UserProps {
  name?: string;
  age?: number;
}

type CallBack = () => void;

export class User {
  // Events will have array of keys and array of callback functions
  events: { [key: string]: CallBack[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(UserEvent: string, CallBack: CallBack): void {
    const Handler = this.events[UserEvent] || [];
    Handler.push(CallBack);
    this.events[UserEvent] = Handler;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }
}
