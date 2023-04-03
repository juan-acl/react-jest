import { getData } from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamado a la API y retorno de datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '1234567890' }));
    getData('https://google.com').then((response) => {
      expect(response.data).toEqual('1234567890');
    });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
