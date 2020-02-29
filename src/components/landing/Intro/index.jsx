import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev2.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail, Links } from './styles'
import social from './social.json';

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Olá!</h1>
				<h4>Sou Elivelton Rodrigues, um Software Engineer</h4>
				<Links>
					{social.map(({ id, name, link, icon, style }) => (
						<a
							key={id}
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`follow me on ${name}`}
						>
							<img width="30" style={style} src={icon} alt={name} />
						</a>
					))}
				</Links>
				<Button as={AnchorLink} href="#contact">
					Contato
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Sou Elivelton Rodrigues, um Software Engineer" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)