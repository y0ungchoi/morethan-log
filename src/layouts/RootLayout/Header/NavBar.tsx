import styled from "@emotion/styled"
import Link from "next/link"
import { useState } from "react"

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "/about" }]
  const [toggleChoco, setToggleChoco] = useState(false)

  const handleToggleChoco = () => {
    setToggleChoco(!toggleChoco)
  }
  return (
    <StyledWrapper className="">
      <button onClick={handleToggleChoco}>Toggle Choco</button>
      {toggleChoco && (
        <div className="choco">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  .choco {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.bronze11};
    top: 3rem;
    right: 0rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
