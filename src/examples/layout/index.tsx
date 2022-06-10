import React from "react"
import Col from "../../packages/col"
import Row from "../../packages/row"

const LayoutIndex = () => {
  return (
    <div className="p-5">
      <div className="m-4 text-lg font-bold">基础用法</div>
      <Row>
        <Col span={6}>
          <div className="bg-blue-200 leading-8 text-center">span: 6</div>
        </Col>
        <Col span={6}>
          <div className="bg-blue-300 leading-8 text-center">span: 6</div>
        </Col>
        <Col span={6}>
          <div className="bg-blue-200 leading-8 text-center">span: 6</div>
        </Col>
        <Col span={6}>
          <div className="bg-blue-300 leading-8 text-center">span: 6</div>
        </Col>
      </Row>

      <div className="m-4 text-lg font-bold">偏移量</div>
      <div className="mb-4">
        <Row>
          <Col span={4}>
            <div className="bg-blue-200 leading-8 text-center">span: 4</div>
          </Col>
          <Col span={10} offset={4}>
            <div className="bg-blue-300 leading-8 text-center">offset: 4, span: 10</div>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col span={12} offset={12}>
            <div className="bg-blue-200 leading-8 text-center">offset: 12, span: 12</div>
          </Col>
        </Row>
      </div>

      <div className="m-4 text-lg font-bold">间距</div>
      <Row gutter={20}>
        <Col span={6}>
          <div className="bg-blue-200 leading-8 text-center">span: 6</div>
        </Col>
        <Col span={6}>
          <div className="bg-blue-300 leading-8 text-center">span: 6</div>
        </Col>
        <Col span={6}>
          <div className="bg-blue-200 leading-8 text-center">span: 6</div>
        </Col>
        <Col span={6}>
          <div className="bg-blue-300 leading-8 text-center">span: 6</div>
        </Col>
      </Row>

      <div className="m-4 text-lg font-bold">对齐方式</div>
      <div className="mb-4">
        <Row justify="center">
          <Col span={6}>
            <div className="bg-blue-200 leading-8 text-center">span: 6</div>
          </Col>
          <Col span={6}>
            <div className="bg-blue-300 leading-8 text-center">span: 6</div>
          </Col>
          <Col span={6}>
            <div className="bg-blue-200 leading-8 text-center">span: 6</div>
          </Col>
        </Row>
      </div>
      <div className="mb-4">
        <Row justify="end">
          <Col span={6}>
            <div className="bg-blue-200 leading-8 text-center">span: 6</div>
          </Col>
          <Col span={6}>
            <div className="bg-blue-300 leading-8 text-center">span: 6</div>
          </Col>
          <Col span={6}>
            <div className="bg-blue-200 leading-8 text-center">span: 6</div>
          </Col>
        </Row>
      </div>
      <div className="mb-4">
        <Row justify="space-between">
          <Col span={6}>
            <div className="bg-blue-200 leading-8 text-center">span: 6</div>
          </Col>
          <Col span={6}>
            <div className="bg-blue-300 leading-8 text-center">span: 6</div>
          </Col>
          <Col span={6}>
            <div className="bg-blue-200 leading-8 text-center">span: 6</div>
          </Col>
        </Row>
      </div>
      <div className="mb-4">
        <Row justify="space-around">
          <Col span={6}>
            <div className="bg-blue-200 leading-8 text-center">span: 6</div>
          </Col>
          <Col span={6}>
            <div className="bg-blue-300 leading-8 text-center">span: 6</div>
          </Col>
          <Col span={6}>
            <div className="bg-blue-200 leading-8 text-center">span: 6</div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default LayoutIndex
