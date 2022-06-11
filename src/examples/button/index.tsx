import Button from "../../packages/button/Button"
import { Search16Regular } from "@ricons/fluent"

const ButtonIndex = () => {
  return (
    <div className="p-5">
      <div className="m-4 text-lg font-bold">基础用法</div>
      <div className="flex items-center flex-wrap">
        <div className="mr-4 mb-4">
          <Button>default</Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="primary">primary</Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="success">success</Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="warning">warning</Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="danger">danger</Button>
        </div>
      </div>

      <div className="m-4 text-lg font-bold">块级按钮</div>
      <div>
        <Button block type="primary">
          block
        </Button>
      </div>

      <div className="m-4 text-lg font-bold">圆角按钮</div>
      <div>
        <Button round type="primary">
          round
        </Button>
      </div>

      <div className="m-4 text-lg font-bold">图标</div>
      <div>
        <Button type="primary" icon={<Search16Regular />}>
          搜索
        </Button>
      </div>

      <div className="m-4 text-lg font-bold">加载状态</div>
      <div className="flex items-center flex-wrap">
        <div className="mr-4 mb-4">
          <Button loading type="primary">
            loading
          </Button>
        </div>
        <div className="mr-4 mb-4">
          <Button loading loadingType="spinner" type="primary">
            loading
          </Button>
        </div>
      </div>

      <div className="m-4 text-lg font-bold">禁用状态</div>
      <div className="flex items-center flex-wrap">
        <div className="mr-4 mb-4">
          <Button disabled type="primary">
            disabled
          </Button>
        </div>
        <div className="mr-4 mb-4">
          <Button disabled>disabled</Button>
        </div>
      </div>

      <div className="m-4 text-lg font-bold">朴素按钮</div>
      <div className="flex items-center flex-wrap">
        <div className="mr-4 mb-4">
          <Button plain>default</Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="primary" plain>
            primary
          </Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="success" plain>
            success
          </Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="warning" plain>
            warning
          </Button>
        </div>

        <div className="mr-4 mb-4">
          <Button type="danger" plain>
            danger
          </Button>
        </div>
      </div>

      <div className="m-4 text-lg font-bold">不同尺寸</div>
      <div className="flex items-center flex-wrap">
        <div className="mr-4 mb-4">
          <Button type="primary" size="mini">
            mini
          </Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="primary" size="small">
            small
          </Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="primary" size="middle">
            middle
          </Button>
        </div>
        <div className="mr-4 mb-4">
          <Button type="primary" size="large">
            large
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ButtonIndex
