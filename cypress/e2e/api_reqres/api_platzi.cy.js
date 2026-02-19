describe('Platzi Fake API - Categories', () => {

  const baseUrl = 'https://api.escuelajs.co/api/v1'

  it('TC01 - GET All Categories', () => {
    cy.request(`${baseUrl}/categories`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.duration).to.be.lessThan(5000)
        expect(response.body).to.be.an('array')
      })
  })

  it('TC02 - Validate Category Structure', () => {
    cy.request(`${baseUrl}/categories`)
      .then((response) => {
        expect(response.body[0]).to.have.property('id')
        expect(response.body[0]).to.have.property('name')
        expect(response.body[0]).to.have.property('image')
      })
  })

  it('TC03 - GET Single Category', () => {
  cy.request(`${baseUrl}/categories/1`)
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property(1)
    })
  })

  it('TC04 - GET Invalid Category', () => {
    cy.request({
      url: `${baseUrl}/categories/999999`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })

  it('TC05 - POST Create Category', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/categories`,
      body: {
        name: 'QA Category',
        image: 'https://placeimg.com/640/480/any'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.name).to.eq('QA Category')
    })
  })

  it('TC06 - PUT Update Category', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/categories/1`,
      body: {
        name: 'Updated Category',
        image: 'https://placeimg.com/640/480/tech'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.name).to.eq('Updated Category')
    })
  })

  it('TC07 - DELETE Category', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/categories/1`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400)
    })
  })

  it('TC08 - Validate Response Time < 2s', () => {
    cy.request(`${baseUrl}/categories`)
      .then((response) => {
        expect(response.duration).to.be.lessThan(2000)
      })
  })

  it('TC09 - Validate Header', () => {
    cy.request(`${baseUrl}/categories`)
      .then((response) => {
        expect(response.headers['content-type'])
          .to.include('application/json')
      })
  })

  it('TC10 - Validate Category Not Empty', () => {
    cy.request(`${baseUrl}/categories`)
      .then((response) => {
        expect(response.body.length).to.be.greaterThan(0)
      })
  })

})