interface IModel<T> {
  save: (param: any) => Promise<T>
}
export default IModel
