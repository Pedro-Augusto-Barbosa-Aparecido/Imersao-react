import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';

import {
  AlurakutMenu,
  OrkutNostalgicIconSet
} from "../src/lib/AluraCommons";

import {
  ProfileRelationsBoxWrapper
} from "../src/components/ProfileRelationsBox";

const ProfileSideBar = (props) => {
  return (
    <Box>
      <img 
        src={`http://github.com/${props.user}.png`}
        style={{
          borderRadius: "8px"
        }}
      />
    </Box>
  );
}

export default function Home() {

  const githubUser = "Pedro-Augusto-Barbosa-Aparecido";
  const favoritePeople = [
        "juunegreiros", 
        "omariosouto", 
        "peas", 
        "rafaballerini",
        "marcobrunodev",
        "felipefialho"
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar user={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
              Bem vindo (a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRealationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBoxWrapper>

            <h2 className="smallTitle">
              Comunidade ({ favoritePeople.length })
            </h2>

            <ul>
              {
                favoritePeople.map(person => {
                    return (
                      <li>
                        <a href={`https://github.com/${person}`} key={person}>
                          <img src={`https://github.com/${person}.png`} />
                          <span>{ person }</span>
                        </a>
                      </li>
                    ) 
                })
              }
            </ul>
          
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
