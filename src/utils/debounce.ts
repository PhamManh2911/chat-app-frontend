/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounceAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let pendingReject: ((reason?: any) => void) | null = null;

  return (...args: Parameters<T>): Promise<ReturnType<T>> => {
    if (timer) {
      clearTimeout(timer);
    }

    if (pendingReject) {
      pendingReject(new Error("Debounced"));
    }

    return new Promise((resolve, reject) => {
      pendingReject = reject;

      timer = setTimeout(async () => {
        try {
          const result = await fn(...args);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      }, delay);
    });
  };
}
