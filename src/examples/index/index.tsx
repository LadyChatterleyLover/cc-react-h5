import Icon from "../../packages/icon"
import { ChevronRight24Regular } from "@ricons/fluent"
import { useNavigate } from "react-router-dom"

interface Item {
  label: string
  title: string
  url: string
}

interface ListItem {
  title: string
  item: Item[]
}

const Index = () => {
  const navigate = useNavigate()

  const list: ListItem[] = [
    {
      title: "基础组件",
      item: [
        {
          label: "Button",
          title: "按钮",
          url: "/button",
        },
        {
          label: "Cell",
          title: "单元格",
          url: "/cell",
        },

        {
          label: "Layout",
          title: "布局",
          url: "/layout",
        },
        {
          label: "Popup",
          title: "弹出层",
          url: "/popup",
        },
        {
          label: "Toast",
          title: "轻提示",
          url: "/toast",
        },
        {
          label: "Space",
          title: "间距",
          url: "/space",
        },
      ],
    },
    {
      title: "表单组件",
      item: [
        {
          title: "Calendar",
          label: "日历",
          url: "/calendar",
        },
        {
          title: "Checkbox",
          label: "复选框",
          url: "/checkbox",
        },
        {
          title: "Field",
          label: "输入框",
          url: "/field",
        },
        {
          title: "Form",
          label: "表单",
          url: "/form",
        },
        {
          title: "NumberKeyboard",
          label: "数字键盘",
          url: "/numberKeyboard",
        },
        {
          title: "PasswordInput",
          label: "密码输入框",
          url: "/passwordInput",
        },
        {
          title: "Radio",
          label: "单选框",
          url: "/radio",
        },
        {
          title: "Rate",
          label: "评分",
          url: "/rate",
        },
        {
          title: "Search",
          label: "搜索框",
          url: "/search",
        },
        {
          title: "Slider",
          label: "滑块",
          url: "/slider",
        },
        {
          title: "Stepper",
          label: "步进器",
          url: "/stepper",
        },
        {
          title: "Switch",
          label: "开关",
          url: "/switch",
        },
        {
          title: "Checker",
          label: "选择项",
          url: "/checker",
        },
        {
          title: "Upload",
          label: "文件上传",
          url: "/upload",
        },
      ],
    },
    {
      title: "反馈组件",
      item: [
        {
          title: "ActionSheet",
          label: "动作面板",
          url: "/actionSheet",
        },
        {
          title: "Dialog",
          label: "弹出框",
          url: "/dialog",
        },
        {
          title: "DropdownMenu",
          label: "下拉菜单",
          url: "/dropdown",
        },
        {
          title: "Loading",
          label: "加载",
          url: "/loading",
        },
        {
          title: "Notify",
          label: "消息通知",
          url: "/notify",
        },
        {
          title: "overlay",
          label: "遮罩层",
          url: "/overlay",
        },
        {
          title: "SwipeCell",
          label: "滑动单元格",
          url: "/swipeCell",
        },
        {
          title: "Avatar",
          label: "头像",
          url: "/avatar",
        },
      ],
    },
    {
      title: "展示组件",
      item: [
        {
          title: "Badge",
          label: "徽标",
          url: "/badge",
        },
        {
          title: "CircleProgress",
          label: "圆形进度条",
          url: "/circleProgress",
        },
        {
          title: "Collapse",
          label: "折叠面板",
          url: "/collapse",
        },
        {
          title: "CountDown",
          label: "倒计时",
          url: "/countDown",
        },
        {
          title: "Countup",
          label: "数字滚动",
          url: "/countup",
        },
        {
          title: "Divider",
          label: "分割线",
          url: "/divider",
        },
        {
          title: "Steps",
          label: "步骤条",
          url: "/steps",
        },
        {
          title: "ImagePrediv",
          label: "图片预览",
          url: "/imagePrediv",
        },
        {
          title: "NoticeBar",
          label: "通知栏",
          url: "/noticeBar",
        },
        {
          title: "Progress",
          label: "进度条",
          url: "/progress",
        },
        {
          title: "Skeconston",
          label: "骨架屏",
          url: "/skeconston",
        },
        {
          title: "Subsection",
          label: "分段器",
          url: "/subsection",
        },
        {
          title: "Sticky",
          label: "粘性布局",
          url: "/sticky",
        },
        {
          title: "Swiper",
          label: "轮播",
          url: "/swiper",
        },
        {
          title: "Tag",
          label: "标签",
          url: "/tag",
        },
        {
          title: "OpenMore",
          label: "展开更多",
          url: "/openMore",
        },
        {
          title: "LoadMore",
          label: "加载更多",
          url: "/loadMore",
        },
        {
          title: "Gap",
          label: "间隔槽",
          url: "/gap",
        },
      ],
    },
    {
      title: "导航组件",
      item: [
        {
          title: "Grid",
          label: "宫格",
          url: "/grid",
        },
        {
          title: "IndexBar",
          label: "索引栏",
          url: "Bar",
        },
        {
          title: "NavBar",
          label: "导航栏",
          url: "/navBar",
        },
        {
          title: "Sidebar",
          label: "侧边导航",
          url: "/sidebar",
        },
        {
          title: "Tabs",
          label: "标签页",
          url: "/tabs",
        },
        {
          title: "Tabbar",
          label: "标签栏",
          url: "/tabbar",
        },
        {
          title: "Link",
          label: "超链接",
          url: "/link",
        },
        {
          title: "TreeSelect",
          label: "分类选择",
          url: "/treeSelect",
        },
      ],
    },
    {
      title: "业务组件",
      item: [
        {
          title: "AddressEdit",
          label: "地址编辑",
          url: "/addressEdit",
        },
        {
          title: "AddressList",
          label: "地址列表",
          url: "/addressList",
        },
        {
          title: "Area",
          label: "省市区选择",
          url: "/area",
        },
        {
          title: "GoodsCard",
          label: "商品卡片",
          url: "/goodsCard",
        },
        {
          title: "ContactCard",
          label: "联系人卡片",
          url: "/contactCard",
        },
        {
          title: "ContactEdit",
          label: "联系人编辑",
          url: "/contactEdit",
        },
        {
          title: "ContactList",
          label: "联系人列表",
          url: "/contactList",
        },
        {
          title: "GoodsAction",
          label: "商品导航",
          url: "/goodsAction",
        },
        {
          title: "SubmitBar",
          label: "提交订单栏",
          url: "/submitBar",
        },
        {
          title: "Coupon",
          label: "优惠券",
          url: "/coupon",
        },
      ],
    },
  ]

  const clickItem = (item: Item) => {
    navigate(item.url)
  }
  return (
    <div className="bg-slate-100 px-8 py-6">
      {list.map((item: ListItem, index: number) => {
        return (
          <div key={index}>
            <div className="text-sm mb-5 text-stone-500">{item.title}</div>
            {item.item.map((item1: Item, index1: number) => {
              return (
                <div
                  className="relative flex items-center py-5 bg-white h-11 rounded-3xl mb-3 text-base"
                  style={{ boxShadow: "0 1px 4px 0 rgb(102 102 102 / 6%)" }}
                  key={index1}
                  onClick={() => clickItem(item1)}>
                  <div className="flex items-center w-full font-bold" style={{ color: "#333" }}>
                    <div className="ml-6 w-20">{item1.label}</div>
                    <div className="ml-5 flex-1">{item1.title}</div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 top-6">
                    <Icon color='#979797' size={24}>
                      <ChevronRight24Regular></ChevronRight24Regular>
                    </Icon>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Index
