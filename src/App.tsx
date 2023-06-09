import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Photo from './components/Main/Photo/Photo'
import Description from './components/Main/Description/Description'
// icons:
import { ReactComponent as MailIcon } from './assets/icons/mail.svg'
import { ReactComponent as PhoneIcon } from './assets/icons/phone.svg'
import Title from './components/Main/Title/Title'
import { useReactToPrint } from 'react-to-print'
import Range from './components/Main/Range/Range'
{
  /* <Photo isSquare={false} /> */
}
interface ItemsProps {
  itemsCenter: boolean
}

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 1000px;
  margin: 2rem auto;
  padding: 1rem 2rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section<ItemsProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`
const App: React.FC = () => {
  const [skillsCounter, setSkillsCounter] = useState<number>(1)
  const [worksCounter, setWorksCounter] = useState<number>(1)

  const componentRef = useRef<HTMLDivElement>(null)
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="ui-wrapper">
      <Header onClick={handlePrintClick} />
      <div className="ui-content-wrapper">
        <Wrapper>
          <div className="ui-container" ref={componentRef}>
            <Row itemsCenter>
              <Sidebar>
                <Photo isSquare={false} />
              </Sidebar>
              <Content>
                <Title
                  size={1}
                  isUppercase={false}
                  isShowButton={false}
                  onClick={function (): void {}}
                >
                  Joe Doe
                </Title>
                <Description isPrimary={false} isSecondary={false}>
                  Experienced Software & Machine Learning Engineer
                </Description>
              </Content>
            </Row>

            <Row itemsCenter={false}>
              <Sidebar>
                <Title
                  size={3}
                  isUppercase
                  isShowButton={false}
                  onClick={function (): void {}}
                >
                  About me:
                </Title>
                <Description isPrimary={false} isSecondary={false}>
                  Software Engineer
                </Description>
                <Description isSecondary isPrimary={false}>
                  Lviv, Ukraine | Github
                </Description>

                <Description isPrimary isSecondary={false}>
                  <MailIcon style={{ marginRight: '0.6rem' }} />
                  joedoe@gmail.com
                </Description>
                <Description isPrimary isSecondary={false}>
                  <PhoneIcon style={{ marginRight: '0.6rem' }} />
                  +1 333-6504
                </Description>
              </Sidebar>

              <Content>
                <Title
                  size={3}
                  isUppercase
                  isShowButton={false}
                  onClick={function (): void {}}
                >
                  Education:
                </Title>
                <Description isPrimary={false} isSecondary={false}>
                  MIT University - BS Software Engineering
                </Description>

                <Title
                  size={3}
                  isUppercase
                  isShowButton
                  onClick={() => setWorksCounter(worksCounter + 1)}
                  style={{ marginTop: '3.6rem' }}
                >
                  Work experience:
                </Title>
                {new Array(worksCounter).fill(1).map((_, i) => (
                  <Description key={i} isPrimary={false} isSecondary={false}>
                    {i + 1}. Solutions Architect, Stripe.
                  </Description>
                ))}

                <Title
                  size={3}
                  isUppercase
                  isShowButton
                  onClick={() => setSkillsCounter(skillsCounter + 1)}
                  style={{ marginTop: '3rem' }}
                >
                  Skills:
                </Title>
                {new Array(skillsCounter).fill(1).map((_, i) => (
                  <Range key={i} />
                ))}
              </Content>
            </Row>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  )
}

export default App
