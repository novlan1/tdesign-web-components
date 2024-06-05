import 'tdesign-web-components/button';

export default function Button() {
  return (
    <div style={{ gap: 16, display: 'inline-flex' }}>
      <t-button theme="default" variant="base">
        填充按钮
      </t-button>
      <t-button theme="default" variant="outline">
        描边按钮
      </t-button>
      <t-button theme="default" variant="dashed">
        虚框按钮
      </t-button>
      <t-button theme="default" variant="text">
        文字按钮
      </t-button>
    </div>
  );
}
