function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
class RNUUIDGenerator {
  getRandomUUID(callback) {
    callback(uuidv4());
  }
  getName() {
    return 'RNUUIDGenerator';
  }
}
export default new RNUUIDGenerator();
