---
title: Dialog 对话框
description: 对话框是一种临时窗口，通常在不想中断整体任务流程，但又需要为用户展示信息或获得用户响应时，在页面中打开一个对话框承载相应的信息及操作。
isComponent: true
usage: { title: '', description: '' }
spline: message
---

### 确认类对话框

指带有取消及主要操作，指导用户进行二次确认的对话框。常用于反馈或容错的场景。

{{ base }}

### 反馈类对话框

指显示某操作结果的对话框，标题区域有图标，仅有一个确认按钮。常用于操作后结果的展示，或危险、警告等信息的展示。

{{ warning }}

### 异步加载类对话框

按钮带加载标识，操作需要异步完成的对话框。适用于当前操作需要异步完成，等待后再自动关闭对话框。

{{ async }}

### 自定义类对话框

可自定义对话框内容和底部按钮。

{{ custom }}

### 模态与非模态类对话框

模态对话框会中断用户操作，必须处理当前对话框内容后才能进行其他操作。非模态框不中断用户操作。

{{ modal }}

### 弹出位置

可以通过 `placement` 和 `top` 属性来自定义控制对话框位置。

{{ position }}

## API


### Dialog Props

| 名称                  | 类型            | 默认值    | 描述                                                                                                                                                                                                                                                                                                                    | 必传 |
| --------------------- | --------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| className             | String          | -         | 类名                                                                                                                                                                                                                                                                                                                    | N    |
| style                 | Object          | -         | 样式，TS 类型：`React.CSSProperties`                                                                                                                                                                                                                                                                                    | N    |
| body                  | TNode           | -         | 对话框内容。TS 类型：`string \| TNode`。                                                                                                                                                                                                                                                                                | N    |
| cancelBtn             | TNode           | -         | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件。TS 类型：`string \| ButtonProps \| TNode \| null`，[Button API Documents](./button?tab=api)。                                            | N    |
| children              | TNode           | -         | 对话框内容，同 body。TS 类型：`string \| TNode`。                                                                                                                                                                                                                                                                       | N    |
| closeBtn              | TNode           | true      | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例。TS 类型：`string \| boolean \| TNode`。                                                                                                                | N    |
| closeOnEscKeydown     | Boolean         | true      | 按下 ESC 时是否触发对话框关闭事件                                                                                                                                                                                                                                                                                       | N    |
| closeOnOverlayClick   | Boolean         | true      | 点击蒙层时是否触发关闭事件                                                                                                                                                                                                                                                                                              | N    |
| confirmBtn            | TNode           | -         | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件。TS 类型：`string \| ButtonProps \| TNode \| null`。                                                                                                | N    |
| confirmLoading        | Boolean         | undefined | 确认按钮加载状态                                                                                                                                                                                                                                                                                                        | N    |
| confirmOnEnter        | Boolean         | -         | 是否在按下回车键时，触发确认事件                                                                                                                                                                                                                                                                                        | N    |
| destroyOnClose        | Boolean         | false     | 是否在关闭弹框的时候销毁子元素                                                                                                                                                                                                                                                                                          | N    |
| dialogClassName       | String          | -         | 弹框元素类名，示例：'t-class-dialog-first t-class-dialog-second'                                                                                                                                                                                                                                                        | N    |
| draggable             | Boolean         | false     | 对话框是否可以拖拽（仅在非模态对话框时有效）                                                                                                                                                                                                                                                                            | N    |
| footer                | TNode           | true      | 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 不显示任何内容，值类型为 Function 表示自定义底部内容。TS 类型：`boolean \| TNode`。                                                                                                                                                  | N    |
| forceRender           | Boolean         | false     | 是否强制渲染Dialog                                                                                                                                                                                                                                                                                                      | N    |
| header                | TNode           | true      | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 string 则直接显示值，值类型为 Function 表示自定义头部内容。TS 类型：`string \| boolean \| TNode`。                                                                                                                                                | N    |
| mode                  | String          | modal     | 对话框类型，有 3 种：模态对话框、非模态对话框、全屏对话框。弹出「模态对话框」时，只能操作对话框里面的内容，不能操作其他内容。弹出「非模态对话框」时，则可以操作页面内所有内容。「普通对话框」是指没有脱离文档流的对话框，可以在这个基础上开发更多的插件。可选项：modal/modeless/full-screen                             | N    |
| placement             | String          | top       | 对话框位置，内置两种：垂直水平居中显示 和 靠近顶部（top:20%）显示。默认情况，为避免贴顶或贴底，顶部和底部距离最小为 `48px`，可通过调整 `top` 覆盖默认大小。可选项：top/center                                                                                                                                           | N    |
| preventScrollThrough  | Boolean         | true      | 防止滚动穿透                                                                                                                                                                                                                                                                                                            | N    |
| showInAttachedElement | Boolean         | false     | 仅在挂载元素中显示抽屉，默认在浏览器可视区域显示。父元素需要有定位属性，如：position: relative                                                                                                                                                                                                                          | N    |
| showOverlay           | Boolean         | true      | 是否显示遮罩层                                                                                                                                                                                                                                                                                                          | N    |
| theme                 | String          | default   | 对话框风格。可选项：default/info/warning/danger/success                                                                                                                                                                                                                                                                 | N    |
| top                   | String / Number | -         | 用于弹框具体窗口顶部的距离，优先级大于 placement                                                                                                                                                                                                                                                                        | N    |
| visible               | Boolean         | -         | 控制对话框是否显示                                                                                                                                                                                                                                                                                                      | N    |
| width                 | String / Number | -         | 对话框宽度，示例：320, '500px', '80%'                                                                                                                                                                                                                                                                                   | N    |
| zIndex                | Number          | -         | 对话框层级，Web 侧样式默认为 2500，移动端和小程序样式默认为 1500                                                                                                                                                                                                                                                        | N    |
| onCancel              | Function        |           | TS 类型：`(context: { e: MouseEvent }) => void`<br/>如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件                                                                                                                                                                                                        | N    |
| onClose               | Function        |           | TS 类型：`(context: DialogCloseContext) => void`<br/>关闭事件，点击取消按钮、点击关闭按钮、点击蒙层、按下 ESC 等场景下触发。。<br/>`type DialogEventSource = 'esc' \| 'close-btn' \| 'cancel' \| 'overlay'`<br/><br/>`interface DialogCloseContext { trigger: DialogEventSource; e: MouseEvent \| KeyboardEvent }`<br/> | N    |
| onCloseBtnClick       | Function        |           | TS 类型：`(context: { e: MouseEvent }) => void`<br/>点击右上角关闭按钮时触发                                                                                                                                                                                                                                            | N    |
| onClosed              | Function        |           | TS 类型：`() => void`<br/>对话框消失动画效果结束后触发                                                                                                                                                                                                                                                                  | N    |
| onConfirm             | Function        |           | TS 类型：`(context: { e: MouseEvent \| KeyboardEvent }) => void`<br/>如果“确认”按钮存在，则点击“确认”按钮时触发，或者键盘按下回车键时触发                                                                                                                                                                               | N    |
| onEscKeydown          | Function        |           | TS 类型：`(context: { e: KeyboardEvent }) => void`<br/>按下 ESC 时触发事件                                                                                                                                                                                                                                              | N    |
| onOpened              | Function        |           | TS 类型：`() => void`<br/>对话框弹出动画效果结束后触发                                                                                                                                                                                                                                                                  | N    |
| onOverlayClick        | Function        |           | TS 类型：`(context: { e: MouseEvent }) => void`<br/>如果蒙层存在，点击蒙层时触发                                                                                                                                                                                                                                        | N    |