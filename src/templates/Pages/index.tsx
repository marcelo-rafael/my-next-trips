import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const PageTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My next trips</S.Heading>

    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores veniam
        est perspiciatis laudantium quia eum. Quos totam reiciendis nostrum
        dignissimos pariatur quibusdam doloribus odio nemo, velit, est voluptas
        fugit eius.
      </p>
    </S.Body>
  </S.Content>
)

export default PageTemplate
