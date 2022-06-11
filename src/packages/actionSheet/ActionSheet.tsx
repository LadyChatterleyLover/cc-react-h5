import React from 'react'

export interface Action {
  key: string,
  text: string,
  disabled?: boolean,
  danger?: boolean,
  description?: string,
  onClick?: (item: Action, index: number) => void
} 

export interface ActionSheetProps {
  visible: boolean,
  actions: Action[],
  cancelText?: React.ReactNode,
  onAction?: (action: Action, index: number) => void,
  onClose?: () => void,
  onMaskClick?: () => void
  getContainer?: HTMLElement | (() => HTMLElement | null),
  
}

const ActionSheet = () => {
  return (
    <div>ActionSheet</div>
  )
}

export default ActionSheet