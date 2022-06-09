// 复制文本

type Callback = (e?: any) => void

export const useCopy = (val: string, onSuccess?: Callback, onError?: Callback) => {
  const copy = async () => {
    try {
      await window.navigator.clipboard.writeText(val)
    } catch (e) {
      onError && onError(e)
    }
    onSuccess && onSuccess()
  }

  return {
    copy
  }
}