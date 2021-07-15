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
  useEffect,
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

function ProfileRelationsBox (props) {
  return (
      <ProfileRelationsBoxWrapper>

          <h2 className="smallTitle">
            { props.title } ({ props.items.length })
          </h2>

          <ul>
            {/* {
              
            } */}
          </ul>
      
      </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = useState([]);
  const [seguidores, setSegudores] = useState([]);

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

  useEffect(() => {
      fetch("https://api.github.com/users/peas/follewers/")
        .then(response => {
          return response.json();
        })
        .then(data => {
          setSegudores([...seguidores, data]);
        })
        .catch(err => {
          console.log(err);
        });

      fetch('https://graphql.datocms.com/', {
        method: "POST",
        headers: {
          "Authorization": "d4536eabfe0de92804cf5feadc3d72",
          "Content-Type": "application/json",
          "Accept": "applcation/json",
        },

        body: JSON.stringify({ "query": `query {
          allCommunities {
            title
            imageurl
            id
          }
        }` })
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          const comunities = data.data.allCommunities;
          setComunidades(comunities);

        })
        .catch(err => {
          console.log(err);
        });

  }, [])

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
                title: dataForm.get('title'),
                imageurl: dataForm.get('image')
              }

              fetch('/api/comunidades', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(comunidadeObject)
              }).then(async (response) => {
                  const data = await response.json();
                  const comunity = data.data.register;
                  console.log(data);
                  setComunidades([...comunidades, comunity]);
              });

              

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
          <ProfileRelationsBox title="Seguidores" items={ seguidores } />
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
                            <img src={comunidade.imageurl} />
                            <span>{ comunidade.title }</span>
                          </a>
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
