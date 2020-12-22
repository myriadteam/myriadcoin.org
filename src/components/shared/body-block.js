import React from "react"
import { useTranslation, Trans } from "react-i18next"
import tw from "twin.macro"
import {
  PageContainer,
  MediumBoldText,
  BodyText,
  LinkButton,
} from "../../common/elements"

const BodyBlock = ({ translationKey }) => {
  const { t } = useTranslation()
  const link = t(`${translationKey}.link`, { returnObjects: true })
  return (
    <div tw="max-w-2xl mb-32 last:mb-0">
      <MediumBoldText>{t(`${translationKey}.title`)}</MediumBoldText>
      <Trans
        i18nKey={`${translationKey}.body`}
        components={[<BodyText tw="mb-6" />]}
      />
      {link && link.title && link.url && (
        <LinkButton href={link.url} tw="mt-10 mb-0">
          {link.title}
        </LinkButton>
      )}
    </div>
  )
}

export default BodyBlock
