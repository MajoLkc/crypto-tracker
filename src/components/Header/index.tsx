import { PageHeader, Button } from "antd"
import { useTranslation } from "react-i18next"

import configData from "../../config.json"
import DropdownMenu from "../DropdownMenu"
import "./Header.css"

const Header = () => {
  const { t } = useTranslation(["header"])

  return (
    <PageHeader
      title={configData.appName}
      className="site-page-header"
      subTitle={t("header:SubText")}
      extra={[
        <Button key="2">{t("header:NewPurchase")}</Button>,
        <Button key="1" type="primary">
          {t("header:Portfolio")}
        </Button>,
        <DropdownMenu key="more" />,
      ]}
    ></PageHeader>
  )
}

export default Header
