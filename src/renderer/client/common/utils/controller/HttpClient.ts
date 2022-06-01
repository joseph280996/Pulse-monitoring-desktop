type RequestResultType = {
  data?: any;
  error?: Error;
};

interface IHttpClient {
  get(route: string, params?: any): Promise<RequestResultType>;
  post(route: string, params?: any): Promise<RequestResultType>;
}

class HttpClient implements IHttpClient {
  private link!: string;

  get url(): string {
    return this.link;
  }

  set url(link: string) {
    this.link = link;
  }

  private controller: AbortController = new AbortController();

  private get abortController(): AbortController {
    return this.controller;
  }

  private set abortController(abortController: AbortController) {
    this.controller = abortController;
  }

  private options: RequestInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };

  private get requestOptions(): RequestInit {
    return this.options;
  }

  private set requestOptions(options: RequestInit) {
    this.options = {
      ...this.options,
      ...options,
    };
  }

  constructor(url: string, options?: RequestInit) {
    this.url = url;
    if (options) this.requestOptions = options;
  }

  async get(route: string, params?: any): Promise<RequestResultType> {
    const options = {
      ...this.requestOptions,
      method: 'GET',
      body: params ? JSON.stringify(params) : null,
    };
    try {
      const response = await (
        await fetch(`${this.url}${route}`, options)
      ).json();
      return { data: response };
    } catch (error) {
      const castedError = error as Error;
      return { error: castedError };
    }
  }

  async post(route: string, params?: any): Promise<RequestResultType> {
    this.abortController = new AbortController();
    const options = {
      ...this.requestOptions,
      signal: this.abortController.signal,
      method: 'POST',
      body: params ? JSON.stringify(params) : null,
    };
    try {
      const response = await (
        await fetch(`${this.url}${route}`, options)
      ).json();
      setTimeout(() => this.abortController.abort(), 4000);
      return { data: response };
    } catch (error) {
      const castedError = error as Error;
      return { error: castedError };
    }
  }
}

export default HttpClient;
