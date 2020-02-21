import React from 'react'
import * as S from './styled'

const PostItem = () => (
  <S.PostItemLink to="slug">
    <S.PostItemWrapper>
      <S.PostItemTag>MISC</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>21 de fevereiro de 2020</S.PostItemDate>
        <S.PostItemTitle>Primeiro Post</S.PostItemTitle>
        <S.PostItemDescription>
          Alô alô, vocês sabem quem sou eu?
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
