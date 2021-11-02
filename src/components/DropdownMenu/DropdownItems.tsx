import { Menu } from "antd"
import { useTranslation } from "react-i18next"

const DropdownItems = () => {
  const { t } = useTranslation(["header"])

  const dropdownItems = [
    {
      key: "profile",
      href: "/profile",
      text: t("header:Profile"),
      rel: "noopener noreferrer",
    },
    {
      key: "logout",
      href: "/",
      text: t("header:Logout"),
      rel: "noopener noreferrer",
    },
  ]
  return (
    <Menu>
      {dropdownItems.map((item) => (
        <Menu.Item>
          <a href={item.href} key={item.key} rel={item.rel}>
            {item.text}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default DropdownItems
