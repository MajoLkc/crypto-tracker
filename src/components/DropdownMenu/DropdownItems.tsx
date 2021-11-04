import { Menu } from "antd"
import { useTranslation } from "react-i18next"

const DropdownItems = () => {
  const { t } = useTranslation(["header"])

  const setLanguageHandler = (val: any) => {
    const selectedLanguage = val.target.id
    return selectedLanguage
  }

  const dropdownItems = [
    {
      key: "sk",
      id: "ENG",
      text: t("Languages.English"),
    },
    {
      key: "en",
      id: "SVK",
      text: t("Languages.Slovak"),
    },
  ]
  return (
    <Menu>
      {dropdownItems.map((item) => (
        <Menu.Item key={item.key}>
          <span id={item.id} onClick={setLanguageHandler}>
            {item.text}
          </span>
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default DropdownItems
