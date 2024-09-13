import 'tdesign-web-components/list';

import { Component } from 'omi';

export default class ListBase extends Component {
  listData = [
    { id: 1, content: '列表内容列表内容列表内容' },
    { id: 2, content: '列表内容列表内容列表内容' },
    { id: 3, content: '列表内容列表内容列表内容' },
    { id: 4, content: '列表内容列表内容列表内容' },
  ];

  render() {
    return (
      <t-list>
        {this.listData.map((item) => (
          <t-list-item
            key={item.id}
            content={<t-list-item-meta title="列表主内容" description={item.content} />}
          ></t-list-item>
        ))}
      </t-list>
    );
  }
}