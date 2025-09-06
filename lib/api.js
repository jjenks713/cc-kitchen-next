async function fetchGraphQL(query, preview = false) {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${
					preview
						? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
						: process.env.CONTENTFUL_ACCESS_TOKEN
				}`,
			},
			body: JSON.stringify({ query }),
		}
	).then((response) => response.json());
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
  console.log(infoCard.infoCardsCollection)
  return infoCard;
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
	);
	return headers;
}

export async function getMenu(preview) {
	const menu = await fetchGraphQL(
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
	);
	return menu;
}

export async function getGalTotal(preview) {
  const response = await fetchGraphQL(
    `query {
      galleryCollection {
        total
      }
    }`,
    preview
  )
  return response;
}

export async function getGalImages(preview, page) {

  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? 10 * skipMultiplier : 0;

  const response = await fetchGraphQL(
    `query {
      galleryCollection(limit: 10, skip: ${skip}, order: sys_firstPublishedAt_DESC) {
        total
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
  const paginatedGalleryResponse = response.data.galleryCollection
      ? response.data.galleryCollection
      : { total: 0, items: [] };

  return paginatedGalleryResponse;
}

export async function getSpecials(preview) {
	const specials = await fetchGraphQL(
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
	);
	return specials;
}

export async function getAnnouncement(preview) {
	const specials = await fetchGraphQL(
		`query {
        announcement(id: "4NPd4sbwKG7hGMk2EpMqC4") {
          title
          text
          textColor
          backgroundColor
        }
      }`,
		preview
	);
	return specials;
}
