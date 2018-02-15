
import Emitter from '../event_emitter';

describe('Emitter', () => {
  test('should construct a new Emitter instance', () => {
    expect(new Emitter()).toBeInstanceOf(Emitter);
  });

  test('should subscibe to event', () => {
    const emitter = new Emitter();
    emitter.addListener('click', () => {});
    expect(emitter.events).toHaveProperty('click');
  });

  test('should unsubscibe from event', () => {
    const emitter = new Emitter();
    const sub = emitter.addListener('click', () => {});
    expect(emitter.events).toHaveProperty('click');
    sub.remove();
    expect(emitter.events.click).toEqual([]);
  });

  test('should emit event', () => {
    const emitter = new Emitter();
    const cb = jest.fn();
    emitter.addListener('click', cb);
    emitter.emit('click');
    expect(cb).toHaveBeenCalled();
  });
});
