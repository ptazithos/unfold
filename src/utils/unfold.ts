/**
 * @description Data retrieved from rust side is shelled by Union.raw_hashmap.
 * This function unfolds the given data if such shell exists.
 * @param data Data to unfold
 * @param path Path to the data, separated by dot
 */
export function unfold(data: any, path: string): any {
  const paths = path.split(".");
  const wrapped = paths.reduce((acc, path) => {
    //unfold data
    const raw = acc?.Union?.raw_hashmap;
    // Try the get wanted data
    return raw?.[path];
  }, data);

  return wrapped?.Union?.raw_hashmap;
}
