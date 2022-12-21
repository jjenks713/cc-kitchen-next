async function fetchGraphQL(query, preview = false) {
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
      teamPage (id: "3tzp9pbmt2B3aBzomDRn0i") {
        teamMembersCollection {
            items {
              name
              firstName
              link
              jobTitle
              photo {
                url
              }
              description
            }
          }
      
    }
      
    }`,
    preview
  )
  return entries
}

export async function getInfoCards(preview) {

  const infoCard = await fetchGraphQL(
    `query {
      infoCardsCollection {
        items {
          title
        hours
        phone
        address
        email
        icon {
          url
          title
        }
        }   
      }
    }`,
    preview
  )
  return infoCard
}

export async function getHeaders(preview) {

  const headers = await fetchGraphQL(
    `query {
      homepageBannerCollection {
        items {
          heading
          buton
          text
          page
        }
      }	
    }`,
    preview
  )
  return headers
}

export async function getMenu(preview) {

  const headers = await fetchGraphQL(
    `query {
      menuCollection(order: sys_firstPublishedAt_ASC) {
        items {
          title
          description
          menuImage {
            url
          }
          id
        }
      }
    }`,
    preview
  )
  return headers
}

export async function getGalImages(preview) {

  const headers = await fetchGraphQL(
    `query {
      galleryCollection(order: sys_firstPublishedAt_DESC) {
        
        items {
          contentfulMetadata{
            tags{
              name
            }
          }
          title
          image{
            url
          }
          description
        }
      }
      }`,
    preview
  )
  return headers
}

export async function getSpecials(preview) {

  const headers = await fetchGraphQL(
    `query {
      specialsCollection(order: sys_firstPublishedAt_DESC) {
        items {
          name
          image{
            url
          }
          description
        }
      }
      }`,
    preview
  )
  return headers
}



