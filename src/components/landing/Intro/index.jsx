import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Olá!</h1>
				<h4>Sou Elivelton Rodrigues, um Software Engineer</h4>
				<Button as={AnchorLink} href="#contact">
					Contate-me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Sou Elivelton Rodrigues e sou um Software Engineer" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
