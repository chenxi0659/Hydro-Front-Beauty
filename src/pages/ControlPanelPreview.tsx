import { Badge, Button, Card, Group, Stack, Text, Title } from '@mantine/core';

/** 路径 B 的视觉原型，不直接替换 Hydro 页面。 */
export function ControlPanelPreview() {
  return (
    <Card radius="md" withBorder p="lg">
      <Stack gap="md">
        <Group justify="space-between">
          <div>
            <Title order={2}>控制面板</Title>
            <Text c="dimmed" size="sm">Hydro Front Beauty 视觉原型</Text>
          </div>
          <Badge color="blue" variant="light">Preview</Badge>
        </Group>
        <Text>该组件用于确定后台页面的卡片层级、标题节奏和操作按钮风格。</Text>
        <Group justify="flex-end">
          <Button variant="default">取消</Button>
          <Button>保存设置</Button>
        </Group>
      </Stack>
    </Card>
  );
}

