import React from "react"
import Loading from "../loading/Loading"
import Popup from "../popup/Popup"

export interface Action {
  key: string
  text: string
  disabled?: boolean
  loading?: boolean
  color?: string
}

export interface ActionSheetProps {
  visible: boolean
  actions: Action[]
  cancelText?: React.ReactNode
  description?: React.ReactNode
  onAction?: (action: Action, index: number) => void
  onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onCancel?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  getContainer?: HTMLElement | (() => HTMLElement | null)
  closeOnAction?: boolean
}

const ActionSheet = (props: ActionSheetProps) => {
  const {
    visible,
    actions,
    description,
    cancelText,
    onCancel,
    onAction,
    onClose,
    onMaskClick,
    getContainer,
    closeOnAction,
  } = props

  const clickItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: Action, index: number) => {
    if (item.disabled) {
      return
    }
    if (closeOnAction) {
      onMaskClick?.(e!)
    }

    onAction?.(item, index)
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onMaskClick?.(e)
    onClose?.(e)
  }

  return (
    <Popup visible={visible} getContainer={getContainer} onMaskClick={(e) => handleClose(e)} position="bottom" round>
      {description ? (
        <div
          className="px-5 py-6 text-sm leading-5 text-center border-b border-solid"
          style={{ borderColor: "#ebedf0", color: '#c8c9cc' }}>
          {description}
        </div>
      ) : null}
      {actions.map((item, index) => {
        return (
          <div
            className={
              `
              leading-5 
              w-full 
              px-3 
              py-4 
              flex
              justify-center
              ${item.disabled ? 'cursor-not-allowed opacity-20' : 'cursor-pointer'}
              `
            }
            style={{
              color: item.color
            }}
            key={item.key}
            onClick={(e) => clickItem(e, item, index)}>
            <div>
              {
                item.loading ? <Loading /> : item.text
              }
            </div>
          </div>
        )
      })}
      {cancelText ? (
        <div>
          <div className="h-2" style={{ background: "#f7f8fa" }}></div>
          <div
            className="
            leading-5 
            w-full 
            px-3 
            py-4 
            text-center 
            cursor-pointer"
            onClick={(e) => {
              onClose?.(e)
              onCancel?.(e)
            }}>
            {cancelText}
          </div>
        </div>
      ) : null}
    </Popup>
  )
}

export default ActionSheet
