const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThreadUseCase = require('../AddThreadUseCase');

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */
	 
	// Arrange
    const useCasePayload = {
      title: 'dicoding',
      body: 'secret',
      owner: 'Dicoding Indonesia',
    };
    const mockNewThread = new NewThread({
	  threadId: '123'
      title: useCasePayload.title,
      body: useCasePayload.body,
      owner: useCasePayload.owner,
    });

    /** creating dependency of use case */
    const mockThreadRepository = new ThreadRepository();

    /** mocking needed function */
    mockThreadRepository.isThreadExist = jest.fn()
      .mockImplementation(() => Promise.resolve());
	mockThreadRepository.getThreadById = jest.fn()
      .mockImplementation(() => Promise.resolve());
	mockThreadRepository.addThread = jest.fn()
      .mockImplementation(() => Promise.resolve(mockNewThread));

    /** creating use case instance */
    const getThreadUseCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });

    // Action
    const newThread = await getThreadUseCase.execute(useCasePayload);

    // Assert
    expect(newThread).toStrictEqual(new NewThread({
      title: useCasePayload.title,
      body: useCasePayload.body,
      owner: useCasePayload.owner,
    }));
    expect(mockThreadRepository.isThreadExist).toBeCalledWith(useCasePayload.threadId);
    expect(mockThreadRepository.getThreadById).toBeCalledWith(useCasePayload.threadId);
    expect(mockThreadRepository.addThread).toBeCalledWith(new NewThread({
      title: useCasePayload.title,
      body: useCasePayload.body,
      owner: useCasePayload.owner,
    }));

  });
});
