import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';

import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet
} from "../src/lib/AluraCommons";

import {
  ProfileRelationsBoxWrapper
} from "../src/components/ProfileRelationsBox";

import {
  useState
} from 'react';

const ProfileSideBar = (props) => {
  return (
    <Box>
      <img 
        src={`http://github.com/${props.user}.png`}
        style={{
          borderRadius: "8px"
        }}
      />
      
      <br />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.user}`} >
          @{props.user}
        </a>
      </p>

      <hr />
      <br />

      <AlurakutProfileSidebarMenuDefault />

    </Box>
  );
}

export default function Home() {
  const [comunidades, setComunidades] = useState([
    {
      id: new Date().toISOString(),
      comunidade: "Alura",
      urlImage: "https://alurakut.vercel.app/capa-comunidade-01.jpg"
    }
  ]);

  let counter1 = 0;
  let counter2 = 0;

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
      <AlurakutMenu githubUser={githubUser} />
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
          <Box>
            <h2>O você deseja fazer?</h2>
            <form onSubmit={(e) => {
              e.preventDefault();

              const dataForm = new FormData(e.target);

              const comunidadeObject = {
                id: new Date().toISOString(),
                comunidade: dataForm.get('title'),
                urlImage: dataForm.get('image')
              }

              setComunidades([...comunidades, comunidadeObject]);

            }}>

              <div>
                <input 
                  placeholder="Qual eh sua comunidade?"
                  name="title"
                  aria-label="Qual eh sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Qual eh sua comunidade?"
                  name="image"
                  aria-label="Qual eh sua comunidade?"
                  type="text"
                />
              </div>

              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRealationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBoxWrapper>

            <h2 className="smallTitle">
              Comunidade ({ comunidades.length })
            </h2>

            <ul>
              {
                comunidades.map(comunidade => {
                    counter1++;

                    if (counter1 > 6) {
                      return;
                    }

                    return (
                      <li key={comunidade.id}>
                          <a>
                            <img src={comunidade.urlImage} />
                          </a>
                          <span>{ comunidade.comunidade }</span>
                      </li>
                    ) 
                })
              }
            </ul>

          </ProfileRelationsBoxWrapper>
         
          <ProfileRelationsBoxWrapper>

            <h2 className="smallTitle">
              Comunidade ({ favoritePeople.length })
            </h2>

            <ul>
              {
                favoritePeople.map(person => {

                    counter2++;

                    if (counter2 > 6) {
                      return;
                    }

                    return (
                      <li key={person}>
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
