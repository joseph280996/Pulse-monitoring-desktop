export interface IGetService<P, R> {
  getAsync(param: P): Promise<R>;
}
export interface IPostService<P, R> {
  postAsync(param: P): Promise<R>;
}

type IService<P, R> = IGetService<P, R> & IPostService<P, R>;

export default IService;
