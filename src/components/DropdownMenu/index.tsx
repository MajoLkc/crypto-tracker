import { Dropdown, Button } from "antd"
import { EllipsisOutlined } from "@ant-design/icons"

import menu from "./menu"

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu}>
    <Button
      style={{
        border: "none",
        padding: 0,
      }}
    >
      <EllipsisOutlined
        style={{
          fontSize: 20,
          verticalAlign: "top",
        }}
      />
    </Button>
  </Dropdown>
)

export default DropdownMenu
