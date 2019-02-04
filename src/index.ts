/**
 * 求和
 */
export function sum(...args: number[]) {
  return args.reduce((all, num) => all + num, 0)
}
