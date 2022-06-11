import React from "react"
import Loading from "../../packages/loading/Loading"

const LoadingIndex = () => {
  return (
    <div className="p-5">
      <div className="m-4 text-lg font-bold">基础用法</div>
      <div className="flex items-center flex-wrap">
        <div className="mr-4 mb-4">
          <Loading></Loading>
        </div>
        <div className="mr-4 mb-4">
          <Loading type="spinner"></Loading>
        </div>
      </div>

      <div className="m-4 text-lg font-bold">自定义颜色</div>
      <div className="mr-4 mb-4">
        <Loading color="#0081ff"></Loading>
      </div>

      <div className="m-4 text-lg font-bold">自定义尺寸</div>
      <div className="mr-4 mb-4">
        <Loading size={30}></Loading>
      </div>

      <div className="m-4 text-lg font-bold">加载文案</div>
      <div className="mr-4 mb-4">
        <Loading>加载中...</Loading>
      </div>

      <div className="m-4 text-lg font-bold">加载文案</div>
      <div className="mr-4 mb-4">
        <Loading vertical>加载中...</Loading>
      </div>

      <div className="m-4 text-lg font-bold">自定义文本颜色和大小</div>
      <div className="mr-4 mb-4">
        <Loading textColor="#0081ff" textSize="20">加载中...</Loading>
      </div>
    </div>
  )
}

export default LoadingIndex
