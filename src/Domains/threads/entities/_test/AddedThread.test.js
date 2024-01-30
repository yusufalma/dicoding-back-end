const AddedThread = require('../AddedThread');

describe('AddedThread entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      id: 'thread-123',
    };

    // Action and Assert
    expect(() => new AddedThread(payload))
      .toThrowError('ADDED_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      title: true,
      owner: {},
    };

    // Action and Assert
    expect(() => new AddedThread(payload))
      .toThrowError('ADDED_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create addedThread object correctly', () => {
    /**
     * @TODO 2
     * Lengkapi pengujian pada skenario berhasil membuat objek addedThread.
     * Pastikan terdapat proses `assertion`
     * yang mengecek nilai-nilai properti yang berada di dalam objek `addedThread`.
     */
	
    const payload = {
      id: 'thread-123',
      title: 'dicoding',
      owner: 'Dicoding Indonesia',
    };

    const addedThread = new AddedThread(payload);

    expect(addedThread.id).toEqual(payload.id);
    expect(addedThread.title).toEqual(payload.title);
    expect(addedThread.owner).toEqual(payload.owner);
  });
});
