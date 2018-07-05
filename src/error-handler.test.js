import errorHandler from './error-handler';

describe('errorHandler', () => {
  /**
   * Mocked Express Arguments.
   */
  let req;
  let res;
  const next = jest.fn();

  /**
   * Reset the `req` and `res` object before each test is ran.
   */
  beforeEach(() => {
    req = {
      params: {},
      body: {},
    };

    res = {
      data: null,
      code: null,
      status(status) {
        this.code = status;
        return this;
      },
      render(type, payload) {
        this.data = payload.message;
      },
    };

    next.mockClear();
  });

  it('should handle error', () => {
    errorHandler(new Error(), req, res, next);

    expect(res.code).toBeDefined();
    expect(res.code).toBe(500);

    expect(res.data).toBeDefined();
    expect(res.data).toBe('Something went wrong and error was triggered!');
  });
});
