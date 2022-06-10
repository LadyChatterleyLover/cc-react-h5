import Space from "../../packages/space"
import Button from "../../packages/button"

const SpaceIndex = () => {
  return (
    <div className="p-5">
      <div className="m-4 text-lg font-bold">基础用法</div>
      <div>
        <Space>
          <Button type="primary">按钮1</Button>
          <Button type="primary">按钮2</Button>
          <Button type="primary">按钮3</Button>
        </Space>
      </div>

      <div className="m-4 text-lg font-bold">间距</div>
      <div>
        <Space gap={20}>
          <Button type="primary">按钮1</Button>
          <Button type="primary">按钮2</Button>
          <Button type="primary">按钮3</Button>
        </Space>
      </div>

      <div className="m-4 text-lg font-bold">换行</div>
      <div>
        <Space wrap>
          <Button type="primary">按钮1</Button>
          <Button type="primary">按钮2</Button>
          <Button type="primary">按钮3</Button>
          <Button type="primary">按钮4</Button>
          <Button type="primary">按钮5</Button>
          <Button type="primary">按钮6</Button>
          <Button type="primary">按钮7</Button>
          <Button type="primary">按钮8</Button>
          <Button type="primary">按钮9</Button>
          <Button type="primary">按钮10</Button>
          <Button type="primary">按钮11</Button>
        </Space>
      </div>

      <div className="m-4 text-lg font-bold">垂直方向</div>
      <div>
        <Space direction="vertical">
          <Button type="primary">按钮1</Button>
          <Button type="primary">按钮2</Button>
          <Button type="primary">按钮3</Button>
        </Space>
      </div>
    </div>
  )
}

export default SpaceIndex
