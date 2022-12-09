async function fetchGraphQL(query, preview = false) {
  console.log("check this", process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN)
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

export async function getAllTeam(preview) {
  const entries = await fetchGraphQL(
    `query {
      teamMembersCollection {
        items {
          name
          link
          jobTitle
          photo {
            url
          }
          description
        }
      }
      
    }`,
    preview
  )
  console.log("this is here", entries)
  return entries
}

export async function getInfoCards(preview) {

  const infoCard = await fetchGraphQL(
    `query {
      infoCardsCollection {
        items {
          title
        info
        location {
          lat
          lon
        }
        }
        
      }
    }`,
    preview
  )
  console.log("info cards", infoCard)
  return infoCard
}

